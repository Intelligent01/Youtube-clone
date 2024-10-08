import "./PlayVideo.css";
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";


export const PlayVideo = () => {
  return <>
    <div className="play-video">
        <video src={video1}  controls autoPlay muted></video>
        <h3>Best you tube channel to learn web Development</h3>
        <div className="play-video-info">
            <p>1232 Views &bull; 2 days ago</p>
            <div>
                <span><img src={like} alt="" />123</span>
                <span><img src={dislike} alt="" />2</span>
                <span><img src={share} alt="" />share</span>
                <span><img src={save} alt="" />save</span>
            </div>
        </div>
        <hr />
        <div className="publisher">
            <img src={jack} alt="" />
            <div>
                <p>GreatestStack</p>
                <span>1M Suscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="vid-description">
            <p>Channel that makes learning Easy</p>
            <p>Subscribe our channel for watch more tutorial about web Development</p>
            <hr />
            <h4>130 comments</h4>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Jackson <span>1 day ago</span> </h3>
                    <p>you are amazing i remember when you used to make small projects videos
                         now your making clones for big apps this 10x more amazing keep
                          posting we want series for big apps like this long videos
                    </p>
                    <div className="comment-action">
                        <img src={like} alt="" /><span>232</span>
                        <img src={dislike} alt="" /><span>8</span>

                    </div>

                </div>
            </div>
        </div>
    </div>
  
  </>;
};
