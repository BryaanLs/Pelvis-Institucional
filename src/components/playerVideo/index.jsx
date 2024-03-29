/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect } from "react";
import "./styles.css";
import videoSource from "../../assets/video/videoPelvie.mp4";
import thumb from "../../assets/img/webp/thumbVideo.webp";

const PlayerVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    video.addEventListener("timeupdate", updateProgress);
    return () => {
      video.removeEventListener("timeupdate", updateProgress);
    };
  });

  const handleVideoSeek = (e) => {
    const video = videoRef.current;
    const seekTo = e.target.value;
    setProgress(seekTo);
    video.currentTime = (video.duration * seekTo) / 100;
  };

  const updateProgress = () => {
    const video = videoRef.current;
    const currentTime = video.currentTime;
    const duration = video.duration;
    const progress = (currentTime / duration) * 100;

    setProgress(progress);
  };

  useEffect(() => {
    if (progress >= 100) {
      setProgress(0);
      setIsPlaying(false);
    }
  }, [progress, isPlaying]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="custom-video-player">
      <video id="myVideo" ref={videoRef} poster={thumb} playsInline>
        <source src={videoSource} type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
      <div className="controls">
        <button
          onClick={togglePlay}
          className={`play-pause-button ${isPlaying ? "paused" : "playing"}`}
        ></button>
        <input
          type="range"
          className={`seekBar ${isPlaying ? "paused" : "playing"}`}
          id="seekBar"
          value={progress}
          onChange={handleVideoSeek}
        />
      </div>
    </div>
  );
};

export default PlayerVideo;
