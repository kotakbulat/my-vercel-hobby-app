import type { VideoPost } from './types';

interface VideoCardProps {
  post: VideoPost;
}

export default function VideoCard({ post }: VideoCardProps) {
  return (
    <div className="flex flex-col">
      <div className="aspect-video w-full bg-black">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${post.videoId}`}
          title={post.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-4 pt-3">
        <p className="font-semibold text-gray-100">{post.title}</p>
      </div>
    </div>
  );
}