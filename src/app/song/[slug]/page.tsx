"use client";
import { Breadcrumbs, Spinner } from "hikari-ui";
import classnames from "classnames";
// import ReactPlayer from "";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useGetSongQuery } from "@/graphql/generated-types";

const ReactPlayer = dynamic(() => import("react-player"), {
  loading: () => (
    <div className="flex items-center justify-center w-full h-full">
      <Spinner size={38} />
    </div>
  ),
  ssr: false,
});

// https://www.letras.mus.br
// https://www.youtube.com/watch?v=ONHJBgQf9vk
// https://www.youtube.com/watch?v=EMZRnFWUGa0
export default function Song() {
  const params = useParams();

  const {
    data: { song } = {},
    loading: loadingSong,
    error: errorSongs,
  } = useGetSongQuery({
    variables: { where: { slug: String(params?.slug) } },
  });

  return (
    <div
      className={classnames("flex flex-col", "space-y-4", "max-w-2xl w-full")}
    >
      <Breadcrumbs>
        <Breadcrumbs.Link href="/">Home</Breadcrumbs.Link>
        <Breadcrumbs.Link href="/">{song?.title}</Breadcrumbs.Link>
      </Breadcrumbs>
      <div className="flex flex-col space-y-4">
        <div className="aspect-video">
          {song?.url && (
            <ReactPlayer url={song?.url} width="100%" height="100%" controls />
          )}
        </div>
        {song?.lyric && <p>{song?.lyric}</p>}
      </div>
    </div>
  );
}
