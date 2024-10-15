import "./PlayVideo.css";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import user_profile from "../../assets/user_profile.jpg";
import { useEffect, useState } from "react";
import { API_KEY, value_converter } from "../../data";
import { useParams } from "react-router-dom";

export const PlayVideo = () => {
    
    const { videoId } = useParams();
    const [apidata, setApidata] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [commentData, setCommentData] = useState(null);

    const fetchVideodata = async () => {
        // fetching video data
        const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
        try {
            const response = await fetch(url);
            const _data = await response.json();
            setApidata(_data.items[0]); // assuming the first item is the video data
        } catch (error) {
            console.log("error", error);
        }
    };

    

    const fetchChannelData = async (channelId) => {
        // fetching channel data
        const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${API_KEY}`;
        try {
            const response = await fetch(url);
            const _data = await response.json();
            setChannelData(_data.items[0]); // assuming the first item is the channel data
        } catch (error) {
            console.log("error", error);
        }
    };

    const fetchCommentData = async (channelId) => {
        // fetching Comment data
        const url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            setCommentData(data.items); // assuming the first item is the Comment data
        } catch (error) {
            console.log("error", error);
        }
    };

    useEffect(() => {
        if (videoId) {
            fetchVideodata();  // Fetch video data when videoId changes
            fetchCommentData();
        }
    }, [videoId]);

    useEffect(() => {
        if (apidata?.snippet?.channelId) {
            fetchChannelData(apidata.snippet.channelId);  // Fetch channel data when apidata is available
        }
    }, [apidata]);
    
    return (
        <div className="play-video">
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>

            <h3>{apidata ? apidata.snippet.title : "Loading title..."}</h3>

            <div className="play-video-info">
                <p>{apidata ? value_converter(apidata.statistics?.viewCount) : "Loading views..."} Views &bull; 2 days ago</p>
                <div>
                    <span><img src={like} alt="" />{value_converter(apidata?.statistics?.likeCount) || 0}</span>
                    <span><img src={dislike} alt="" /></span>
                    <span><img src={share} alt="" />share</span>
                    <span><img src={save} alt="" />save</span>
                </div>
            </div>

            <hr />

            <div className="publisher">
                <img src={channelData?.snippet?.thumbnails?.default?.url || user_profile} alt="Channel Thumbnail" />
                <div>
                    <p>{apidata?.snippet?.channelTitle}</p>
                    <span>{channelData ? value_converter(channelData.statistics?.subscriberCount) : "Loading subscribers..."} Subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>

            <div className="vid-description">
                <p>{apidata?.snippet?.description.slice(0, 250) || "No description available"}</p>
                <hr />
                <h4>Comments</h4>
                {commentData && commentData.length > 0 ? (
                    commentData.map((item, index) => (
                        <div key={index} className="comment">
                            <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                            <div>
                                <h3>{item.snippet.topLevelComment.snippet.authorDisplayName.slice(1)} <span>{item.snippet.topLevelComment.snippet.publishedAt}</span></h3>
                                <p>
                                    {item.snippet.topLevelComment.snippet.textDisplay}
                                </p>
                                <div className="comment-action">
                                    <img src={like} alt="" /><span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                                    <img src={dislike} alt="" /><span></span>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Loading comments...</p>
                )}
            </div>
        </div>
    );
};
