import { useEffect, useRef } from "react";
import type { VideoPost } from "../types";

interface VideoCardProps {
  post: VideoPost;
}

export default function VideoCard({ post }: VideoCardProps) {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    if (!iframeRef.current) return;

    const iframe = iframeRef.current;

    const buildSrc = (autoplay: boolean) => {
      return `https://www.youtube.com/embed/${post.videoId}?` +
        `rel=0&modestbranding=1&mute=1&playsinline=1` +
        (autoplay ? "&autoplay=1" : "");
    };

    // initial src (no autoplay)
    iframe.src = buildSrc(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!iframe) return;

        if (entry.isIntersecting) {
          // play when visible
          iframe.src = buildSrc(true);
        } else {
          // stop when out of view
          iframe.src = buildSrc(false);
        }
      },
      {
        threshold: 0.7, // adjust for when it should trigger
      }
    );

    observer.observe(iframe);

    return () => {
      observer.disconnect();
    };
  }, [post.videoId]);

  return (
    <div>
      {/* 9:16 wrapper */}
      <div className="shorts-wrapper">
        <iframe
          ref={iframeRef}
          className="shorts-iframe"
          title={post.title}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>

      <div className="content-padding">
        <p className="content-title">{post.title}</p>
      </div>
    </div>
  );
}