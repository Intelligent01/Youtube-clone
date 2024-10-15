import React, { useState } from "react";
import './ChannelCommon.css';
import banner from  '../../assets/channel_banner.jpg';
import profile from  '../../assets/channel_profile.jpg';


const ChannelCommon = () => {

    const [channel_nav,setChannel_nav] = useState(0)

  return <>
    <div className="channel-common">
        <div className="channel-banner">
            <img src={banner} alt="" />
        </div>
        <div className="channel-details">
            <div className="channel-profile">
                <img src={profile} alt="" />
            </div>
            <div className="detail">
                <h1>Letmecooksomething</h1>
                <p>@Letmecooksomething • 87.3K subscribers •981 videos</p>
                <p>Random videos about my moving experience from india to canada,  PR, Foods, Streets , Ethical </p>
                <h4><a href="http://https://www.youtube.com/redirect?event=channel_header&redir_token=QUFFLUhqbnZFaGZzbWx5Wk9ja1BUYl85VzJjSWZ5U0xpQXxBQ3Jtc0trbmFkakhKQUdHV0JzTklaTndLSzZ5OFdja3llQzUxaFJrYlJaanJ1VjJzaGw0T1VseHMtRWdMb0EzRnpLOEItbklGWEpTSDNCLTV2c1padUo2UUdvQnJIaE9zVWU4cDUyeDduMDRFMjZoallTdnVTRQ&q=https%3A%2F%2Fwww.instagram.com%2Fletmecooksomething%2F">instagram.com/letmecooksomething
                </a> and More..
                </h4>
                <div className="channel-join">
                    <button>Subscribe</button>
                    <button>join</button>
                </div>
            </div>
        </div>
    </div>
    <div className="channel-nav">
        <h3 className={`${channel_nav == 0?"active":""}`} onClick={()=>setChannel_nav(0)} >Home</h3>
        <h3 className={`${channel_nav == 1?"active":""}`} onClick={()=>setChannel_nav(1)} >Videos</h3>
        <h3 className={`${channel_nav == 2?"active":""}`} onClick={()=>setChannel_nav(2)} >Shorts</h3>
        <h3 className={`${channel_nav == 3?"active":""}`} onClick={()=>setChannel_nav(3)} >Live</h3>
        <h3 className={`${channel_nav == 4?"active":""}`} onClick={()=>setChannel_nav(4)} >Playlist</h3>
        <h3 className={`${channel_nav == 5?"active":""}`} onClick={()=>setChannel_nav(5)} >Community</h3>
        <h3 className={`${channel_nav == 6?"active":""}`} onClick={()=>setChannel_nav(6)} >About</h3>
    </div>
    <hr />
  </>
};

export default ChannelCommon;
