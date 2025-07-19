import React, { useState } from "react";
import VideoComparison from "./VideoComparison";

interface VideoComparisonConfig {
  beforeVideo: string;
  afterVideo: string;
  title?: string;
  className?: string;
  extraImage?: string;
}

interface VideoComparisonCarouselProps {
  items: VideoComparisonConfig[];
}

const VideoComparisonCarousel: React.FC<VideoComparisonCarouselProps> = ({
  items,
}) => {
  const [index, setIndex] = useState(0);

  if (!items || items.length === 0) return null;

  return (
    <div className="relative">
      <VideoComparison {...items[index]} />
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 shadow text-2xl font-bold"
        onClick={() => setIndex((i) => (i === 0 ? items.length - 1 : i - 1))}
        aria-label="Previous"
      >
        &#8592;
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 shadow text-2xl font-bold"
        onClick={() => setIndex((i) => (i === items.length - 1 ? 0 : i + 1))}
        aria-label="Next"
      >
        &#8594;
      </button>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {items.map((_, i) => (
          <span
            key={i}
            className={`inline-block w-2 h-2 rounded-full ${
              i === index ? "bg-sky-600" : "bg-sky-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoComparisonCarousel;
