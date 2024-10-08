// import React from "react";
import Feed  from "../../components/feed/Feed";
import { Sidebar } from "../../components/sidebar/Sidebar";
import "./Home.css";

export default function Home({sidebar}) {
  return <>
    <Sidebar sidebar={sidebar} />
    <div className={`container ${sidebar?"":"large-container"}`}>
      <Feed />
    </div>
  </>
};
