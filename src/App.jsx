import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Video from "./pages/video/Video";
import { useState } from "react";
import Channel from "./pages/channels/Channel";

function App(){
  const [sidebar,setSidebar] = useState(true);

  return <>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar}/>} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
        <Route path="/channel/:channel" element={<Channel />} />
      </Routes>
  </>
}

export default App;