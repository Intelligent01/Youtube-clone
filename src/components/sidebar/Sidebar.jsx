import React from "react";
import './Sidebar.css';

import home from "../../assets/home.png";
import game_icon from "../../assets/game_icon.png";
import automobiles from "../../assets/automobiles.png";
import sports from "../../assets/sports.png";
import entertainment from "../../assets/entertainment.png";
import tech from "../../assets/tech.png";
import music from "../../assets/music.png";
import blogs from "../../assets/blogs.png";
import news from "../../assets/news.png";
import jack from "../../assets/jack.png";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";
import cameron from "../../assets/cameron.png";
import { Link } from "react-router-dom";


export const Sidebar = ({sidebar, category, setCategory}) => {
  return <>
    <div className={`sidebar ${sidebar?"":"small"}`}>
        <div className="shortcuts-links">
            <div className={`side-link ${category === 0 ? "active":""}`}>
                <img src={home} alt="" onClick={() => setCategory(0)} /><p>Home</p>
            </div>
            <div className={`side-link ${category === 20 ? "active":""}`}>
                <img src={game_icon} alt="" onClick={() => setCategory(20)} /><p>Game_icon</p>
            </div>
            <div className={`side-link ${category === 2 ? "active":""}`}>
                <img src={automobiles} alt="" onClick={() => setCategory(2)} /><p>Automobiles</p>
            </div>
            <div className={`side-link ${category === 17 ? "active":""}`}>
                <img src={sports} alt="" onClick={() => setCategory(17)} /><p>Sports</p>
            </div>
            <div className={`side-link ${category === 24 ? "active":""}`}>
                <img src={entertainment} alt="" onClick={() => setCategory(24)} /><p>Entetainment</p>
            </div>
            <div className={`side-link ${category === 28 ? "active":""}`}>
                <img src={tech} alt="" onClick={() => setCategory(28)} /><p>Tech</p>
            </div>
            <div className={`side-link ${category === 10 ? "active":""}`}>
                <img src={music} alt="" onClick={() => setCategory(10)} /><p>Music</p>
            </div>
            <div className={`side-link ${category === 22 ? "active":""}`}>
                <img src={blogs} alt="" onClick={() => setCategory(22)} /><p>Blogs</p>
            </div>
            <div className={`side-link ${category === 25 ? "active":""}`}>
                <img src={news} alt="" onClick={() => setCategory(25)} /><p>News</p>
            </div>
        <hr />
        </div>
        <div className="subscribed-list">
            <h3>Subscribed</h3>
            <Link to={'/channel/channel'} className="side-link">
                <img src={jack} alt="" /><p>Jack</p>
            </Link>
            <div className="side-link">
                <img src={simon} alt="" /><p>MrBeast</p>
            </div>
            <div className="side-link">
                <img src={tom} alt="" /><p>Justin </p>
            </div>
            <div className="side-link">
                <img src={megan} alt="" /><p>5-Minutes craft</p>
            </div>
            <div className="side-link">
                <img src={cameron} alt="" /><p>Nas Daily</p>
            </div>
        </div>
    </div>
</>;
};
