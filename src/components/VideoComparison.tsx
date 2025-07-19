"use client";

import React, { useState, useRef, useEffect } from "react";

interface VideoComparisonProps {
  beforeVideo: string;
  afterVideo: string;
  title?: string;
  className?: string;
  extraImage?: string; // 新增
}

const VideoComparison: React.FC<VideoComparisonProps> = ({
  beforeVideo,
  afterVideo,
  title,
  className = "",
  extraImage,
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const beforeVideoRef = useRef<HTMLVideoElement>(null);
  const afterVideoRef = useRef<HTMLVideoElement>(null);

  const syncVideos = () => {
    if (beforeVideoRef.current && afterVideoRef.current) {
      const before = beforeVideoRef.current;
      const after = afterVideoRef.current;
      after.currentTime = before.currentTime;

      if (!before.paused) {
        after.play();
      } else {
        after.pause();
      }
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    updateSliderPosition(e);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      updateSliderPosition(e);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const updateSliderPosition = (e: MouseEvent | React.MouseEvent | Touch) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    const touch = e.touches[0];
    updateSliderPosition(touch);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging) {
      e.preventDefault();
      const touch = e.touches[0];
      updateSliderPosition(touch);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
      document.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging]);

  useEffect(() => {
    const before = beforeVideoRef.current;
    const after = afterVideoRef.current;

    if (before && after) {
      const handleLoadedData = () => syncVideos();
      const handleTimeUpdate = () => syncVideos();

      before.addEventListener("loadeddata", handleLoadedData);
      before.addEventListener("timeupdate", handleTimeUpdate);
      before.addEventListener("play", syncVideos);
      before.addEventListener("pause", syncVideos);

      return () => {
        before.removeEventListener("loadeddata", handleLoadedData);
        before.removeEventListener("timeupdate", handleTimeUpdate);
        before.removeEventListener("play", syncVideos);
        before.removeEventListener("pause", syncVideos);
      };
    }
  }, []);

  return (
    <div
      className={`bg-white rounded-lg border border-sky-200 shadow-[0_0_20px_rgba(186,230,253,0.2)] overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(186,230,253,0.3)] p-4 max-w-5xl mx-auto ${className}`}
    >
      {/* {title && (
        <h3 className="text-lg font-semibold mb-4 text-sky-800 text-center">
          {title}
        </h3>
      )} */}

      <div
        ref={containerRef}
        className="relative w-full aspect-video bg-black rounded-md overflow-hidden cursor-col-resize select-none"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        style={{ maxWidth: "1280px", margin: "0 auto" }}
      >
        {/* After Video (底层完整显示) */}
        <video
          ref={afterVideoRef}
          src={afterVideo}
          autoPlay
          muted
          loop
          playsInline
          width={1280}
          height={720}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Before Video (上层裁剪显示右边部分) */}
        <video
          ref={beforeVideoRef}
          src={beforeVideo}
          autoPlay
          muted
          loop
          playsInline
          width={1280}
          height={720}
          className="absolute inset-0 w-full h-full object-cover z-10"
          style={{
            clipPath: `inset(0 0 0 ${sliderPosition}%)`,
            WebkitClipPath: `inset(0 0 0 ${sliderPosition}%)`,
          }}
        />

        {/* 分割线 */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-20 cursor-col-resize"
          style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg border-2 border-sky-500 flex items-center justify-center">
            <div className="w-1 h-4 bg-sky-500 rounded-full"></div>
          </div>
        </div>

        {/* 标签 */}
        <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium z-30">
          Layer-edited MR Scene
        </div>
        <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium z-30">
          V2V
        </div>
      </div>

      {/* <p className="text-center text-sky-600 mt-4 text-sm">
        Drag the vertical line to compare the editing effect before and after
      </p> */}
      {extraImage && (
        <img
          src={extraImage}
          alt="Comparison Extra"
          className="w-full max-w-2xl aspect-[1000/269] mx-auto rounded-lg shadow-md mt-2"
          loading="lazy"
        />
      )}
    </div>
  );
};

export default VideoComparison;
