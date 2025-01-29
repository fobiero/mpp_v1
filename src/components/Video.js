import React from "react";
import { Link } from "react-router-dom";

import "../assets/css/video.css";
import "../assets/css/custom.css";

import VideoItem from "../assets/videos/video-1.mp4";

const Video = () => {
  return (
    <>
      <div className="video-section">
        <div className="video-content">
          <video className="video-item" src={VideoItem} autoPlay muted loop />
          <div className="video-cont-desc">
            <h1 className="vd-hd">our vision</h1>
            <h3>
              Transformed, Industrious and Prosperous Community Living in{" "}
              <br className="br" />
              Culture of Peace for Sustainable Development.
            </h3>
            <Link className="about-more abt-ft-item wrap-link-item" to="/">
              donate <i class="fa-solid fa-arrow-right-long"></i>{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
