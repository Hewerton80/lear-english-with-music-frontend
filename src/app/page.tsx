"use client";
import { Spinner } from "hikari-ui";
import classnames from "classnames";
// import ReactPlayer from "";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ReactPlayer = dynamic(() => import("react-player"), {
  loading: () => (
    <div className="flex items-center justify-center w-full h-full">
      <Spinner size={38} />
    </div>
  ),
});

// https://www.letras.mus.br
// https://www.youtube.com/watch?v=ONHJBgQf9vk
// https://www.youtube.com/watch?v=EMZRnFWUGa0
export default function Home() {
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <div
      className={classnames("flex flex-col", "space-y-4", "max-w-2xl w-full")}
    >
      <div className="flex flex-col space-y-4">
        <h2>My only onde</h2>
        <div className="aspect-video">
          {hasWindow && (
            <ReactPlayer
              url="https://www.youtube.com/watch?v=EMZRnFWUGa0"
              width="100%"
              height="100%"
              controls
            />
          )}
        </div>
      </div>
    </div>
  );
}
