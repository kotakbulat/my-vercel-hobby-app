import type { VideoPost } from '../types';

interface VideoCardProps {
  post: VideoPost;
}

export default function VideoCard({ post }: VideoCardProps) {
  return (
    <div>
      {/* 9:16 aspect ratio wrapper for Shorts */}
      <div className="shorts-wrapper">
        <iframe
          className="shorts-iframe"
          src={`https://www.youtube.com/embed/${post.videoId}?rel=0&modestbranding=1`}
          title={post.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="content-padding">
        <p className="content-title">{post.title}</p>
      </div>
    </div>
  );
}