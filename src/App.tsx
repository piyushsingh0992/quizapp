import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import "./app.css";

type name = {
  name: string;
};

type songs = {
  songs: name[];
};

type ServerError = {
  message: string;
  errorCode?: number;
};
async function getSongs() {
  try {
    let response = await axios.get<songs>(
      "https://OutrageousSizzlingComma.piyushsingh6.repl.co/songs"
    );
    console.log( "response ->",response);
    return response.data as songs;
  } catch (error) {
    console.log("error catch -> ", error);
    if (axios.isAxiosError(error)) {
      console.log("error catch2 -> ", error);
      let axiosError = error as AxiosError<ServerError>;
      console.log("error catch3 -> ", axiosError.response);
      if (axiosError && axiosError.response) {
        return axiosError.response.data;
      }
    }

    return { message: "something went wrong" };
  }
}

export default function App() {
  let [songList, songListSetter] = useState<songs | null>(null);
  let [error, errorSetter] = useState<ServerError | null>(null);
  useEffect(() => {
    (async function () {
      let ans = await getSongs();
      if ("songs" in ans) {
        songListSetter(ans);
      } else {
        errorSetter(ans);
      }
    })();
    // songListSetter("piyush");
  }, []);

  console.log("songList ->", songList);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ol>
        {songList?.songs.map((item, index) => {
          return <li key={index}>{item.name}</li>;
        })}
      </ol>
    </div>
  );
}
