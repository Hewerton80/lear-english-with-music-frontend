"use client";
import {
  Breadcrumbs,
  DataTable,
  IconButton,
  PaginationBar,
  IRowDataTable,
  IColmunDataTable,
  Spinner,
} from "hikari-ui";
import classnames from "classnames";
import { FaRegEye } from "react-icons/fa";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useGetSongsQuery } from "@/graphql/generated-types";
import Link from "next/link";

const PER_PAGE = 2;

export default function Home() {
  const {
    data: { songs } = {},
    loading: loadingSongs,
    error: errorSongs,
    refetch: refetchSongs,
  } = useGetSongsQuery({
    variables: { paginationInput: { currentPage: 1, perPage: PER_PAGE } },
  });

  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalRecords, setTotalRecords] = useState(0);

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
      setTotalPages(songs?.lastPage);
      setTotalRecords(songs?.total);
    }
  }, [songs]);

  const handlePage = useCallback(
    (toPage: number) => {
      setCurrentPage(toPage);
      refetchSongs({
        paginationInput: { currentPage: toPage, perPage: PER_PAGE },
      });
    },
    [refetchSongs]
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

  return (
    <div
      className={classnames("flex flex-col", "space-y-4", "max-w-2xl w-full")}
    >
      <Breadcrumbs>
        <Breadcrumbs.Link href="/">Home</Breadcrumbs.Link>
      </Breadcrumbs>
      {loadingSongs && (
        <div className="flex items-center justify-center w-full h-full">
          <Spinner size={38} />
        </div>
      )}
      {songs && <DataTable columns={columns} rows={rows} />}
      <PaginationBar
        currentPage={currentPage}
        totalPages={totalPages}
        perPage={PER_PAGE}
        totalRecords={totalRecords}
        onChangePage={handlePage}
        disabled={loadingSongs}
      />
    </div>
  );
}
