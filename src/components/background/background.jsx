import React from "react";
import compressedVideo from "../../assets/images/compressed_video.mp4";
import "./background.css";

const Background = () => {
  return (
    <video className="background" autoPlay loop muted>
      <source src={compressedVideo} type="video/mp4" />
    </video>
  );
};

export default Background;
