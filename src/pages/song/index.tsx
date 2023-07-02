import { Breadcrumbs, Spinner } from "hikari-ui";
import classnames from "classnames";
import ReactPlayer from "react-player";
import { useGetSongQuery } from "../../graphql/generated-types";
import { useParams } from "react-router-dom";

// const ReactPlayer = dynamic(() => import("react-player"), {
//   loading: () => (
//     <div className="flex items-center justify-center w-full h-full">
//       <Spinner size={38} />
//     </div>
//   ),
//   ssr: false,
// });

// https://www.letras.mus.br
// https://www.youtube.com/watch?v=ONHJBgQf9vk
// https://www.youtube.com/watch?v=EMZRnFWUGa0
export default function SongPage() {
  const params = useParams();

  const {
    data: { song } = {},
    loading: loadingSong,
    // error: errorSongs,
  } = useGetSongQuery({
    variables: { slug: String(params?.slug) },
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
        <div className="flex justify-center items-center aspect-video">
          {loadingSong ? (
            <div className="m-auto">
              <Spinner size={38} />
            </div>
          ) : (
            <ReactPlayer url={song?.url} width="100%" height="100%" controls />
          )}
        </div>
        {song?.lyric?.html && <p>{song?.lyric?.html}</p>}
      </div>
    </div>
  );
}
