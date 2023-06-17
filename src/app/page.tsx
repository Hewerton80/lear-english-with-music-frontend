"use client";
import {
  Breadcrumbs,
  DataTable,
  IconButton,
  PaginationBar,
  IRowDataTable,
  IColmunDataTable,
  Spinner,
  Input,
} from "hikari-ui";
import classnames from "classnames";
import { FaRegEye } from "react-icons/fa";
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import {
  useGetSongsQuery,
  GetSongsQueryVariables,
  SongWhereInput,
  SortOrder,
} from "@/graphql/generated-types";
import Link from "next/link";
import { useDebouncedCallback } from "use-debounce";

const PER_PAGE = 15;
const initialVariablesQuery: GetSongsQueryVariables = {
  paginationInput: { currentPage: 1, perPage: PER_PAGE },
  orderBy: { title: SortOrder.Asc },
};

export default function Home() {
  const {
    data: { songs } = {},
    loading: loadingSongs,
    error: errorSongs,
    refetch: refetchSongs,
  } = useGetSongsQuery({
    variables: initialVariablesQuery,
  });

  const [currentPage, setCurrentPage] = useState(1);

  const [songNameFilter, setSongNameFilter] = useState("");

  const [isWriting, setIsWriting] = useState(false);

  const loadingTableSongs = useMemo(
    () => isWriting || loadingSongs,
    [isWriting, loadingSongs]
  );

  const rows = useMemo<IRowDataTable[]>(() => {
    return (
      songs?.docs?.map((song) => ({
        contents: [
          <p key={song?.id + "title"}>{song.title}</p>,
          <p key={song?.id + "authors"}>
            {song.authors?.map((author) => author?.name).join(", ")}
          </p>,
          <div key={song?.id + "actions"} className="flex justify-end">
            <Link href={`/song/${song?.slug}`}>
              <IconButton icon={<FaRegEye />} size="sm" />
            </Link>
          </div>,
        ],
        value: song?.id,
      })) || []
    );
  }, [songs]);

  const columns = useMemo<IColmunDataTable[]>(() => {
    return [
      { field: "title", content: "Título" },
      { field: "author", content: "Cantor(a)/Banda" },
      { field: "", content: "" },
    ];
  }, []);

  // const songs = useMemo(() => data?.songs, [data]);

  // useEffect(() => {
  //   console.log("songsData", songsData);
  // }, [songsData]);

  // useEffect(() => {
  //   console.log("songsData", songsData);
  // }, [songsData]);

  // useEffect(() => {
  //   console.log("errorSongs", errorSongs);
  // }, [errorSongs]);

  useEffect(() => {
    if (songs) {
      setCurrentPage(songs?.currentPage);
    }
  }, [songs]);

  const getSongsQueryVariables = useCallback(() => {
    const songsVariablesFilter: GetSongsQueryVariables = {
      paginationInput: {
        perPage: PER_PAGE,
        currentPage,
      },
    };

    let songWhereInput: SongWhereInput = {};

    if (songNameFilter.trim()) {
      songWhereInput = {
        ...songWhereInput,
        title: { contains: songNameFilter.trim() },
      };
    }
    songsVariablesFilter.where = songWhereInput;

    return songsVariablesFilter;
  }, [currentPage, songNameFilter]);

  const handleRefetchAuthors = useDebouncedCallback(
    useCallback(
      (songsQueryVariables: GetSongsQueryVariables) => {
        console.log("handleRefetchAuthors", songsQueryVariables);
        refetchSongs(songsQueryVariables);
        setIsWriting(false);
      },
      [refetchSongs]
    ),
    1000
  );

  const handlePage = useCallback(
    (toPage: number) => {
      setIsWriting(true);
      const songsQueryVariables = { ...getSongsQueryVariables() };
      setCurrentPage(toPage);
      songsQueryVariables.paginationInput.currentPage = toPage;
      handleRefetchAuthors(songsQueryVariables);
    },
    [getSongsQueryVariables, handleRefetchAuthors]
  );

  const handleChangeSongNameFilter = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setIsWriting(true);
      setCurrentPage(1);
      const futureSongname = e.target.value;
      setSongNameFilter(futureSongname);

      const songsQueryVariables = { ...getSongsQueryVariables() };
      songsQueryVariables.paginationInput.currentPage = 1;
      let songWhereInput: SongWhereInput = songsQueryVariables.where || {};

      songWhereInput = {
        ...songWhereInput,
        title: { contains: futureSongname.trim() },
      };

      songsQueryVariables.where = songWhereInput;
      console.log("handleChangeSongNameFilter", songsQueryVariables);
      handleRefetchAuthors(songsQueryVariables);
    },
    [getSongsQueryVariables, handleRefetchAuthors]
  );

  return (
    <div
      className={classnames("flex flex-col", "space-y-4", "max-w-2xl w-full")}
    >
      <Breadcrumbs>
        <Breadcrumbs.Link href="/">Home</Breadcrumbs.Link>
      </Breadcrumbs>
      <div className="grid grid-cols-3">
        <Input
          label="Nome da música"
          placeholder="Easy On Me..."
          value={songNameFilter}
          onChange={handleChangeSongNameFilter}
        />
      </div>
      {loadingTableSongs && (
        <div className="flex items-center justify-center w-full h-full min-h-[500px]">
          <Spinner size={38} />
        </div>
      )}
      {songs && !loadingTableSongs && (
        <DataTable columns={columns} rows={rows} />
      )}
      <PaginationBar
        currentPage={songs?.currentPage || 1}
        totalPages={songs?.lastPage || 1}
        perPage={PER_PAGE}
        totalRecords={songs?.total || 0}
        onChangePage={handlePage}
        disabled={loadingTableSongs}
      />
    </div>
  );
}
