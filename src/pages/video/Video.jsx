// import React from "react";
import { useParams } from "react-router-dom";
import { PlayVideo } from "../../components/playvideo/PlayVideo";
import Recommended from "../../components/reocmmended/Recommended";
import "./Video.css"

export default function Video(){
  const {videoId,categoryId} = useParams();
  return <>
    <div className="play-container">
        <PlayVideo videoId={videoId} />
        <Recommended categoryId={categoryId}/>
    </div>
  </>;
};
