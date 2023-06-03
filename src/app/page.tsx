"use client";
import { Button } from "hikari-ui";
import classnames from "classnames";
// import ReactPlayer from "";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), {
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  // return <h1>ola, mundo</h1>;
  return (
    <div
      className={classnames(
        "flex flex-col",
        "mx-auto",
        "bg-red-950 max-w-2xl w-full"
      )}
    >
      <div className="aspect-video">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=4NRXx6U8ABQ"
          width="100%"
          height="100%"
          onProgress={(props) => console.log(props)}
        />
      </div>
    </div>
  );
}
