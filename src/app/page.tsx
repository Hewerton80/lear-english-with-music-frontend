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
              // onProgress={({ playedSeconds }) =>
              //   console.log("playedSeconds", playedSeconds)
              // }
              controls
            />
          )}
          {/* <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/ONHJBgQf9vk"
            title="The Weeknd - Blinding Lights (Tradução/Letra Pt-Br-Inglês)"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          /> */}
        </div>
        {/* <Slider>
          <Slider.Track>
            <Slider.Range />
          </Slider.Track>
          <Slider.Thumb />
        </Slider> */}
      </div>
      {/* <Card>
        <Card.Body>
          <div className="flex flex-col justify-center">
            <h3 className="text-lg text-center font-bold italic">
              bliding light
            </h3>
            <h3 className="text-lg text-center italic">luz azul</h3>
          </div>
        </Card.Body>
      </Card> */}
    </div>
  );
}
