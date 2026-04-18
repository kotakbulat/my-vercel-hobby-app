import type { ImagePost } from '../types';

interface ImageCardProps {
  post: ImagePost;
}

export default function ImageCard({ post }: ImageCardProps) {
  return (
    <div className="flex flex-col">
      <img 
        src={`https://picsum.photos/id/${post.imageId}/600/600`} 
        alt="Post" 
        className="w-full h-auto object-cover max-h-[600px]"
        loading="lazy"
      />
      <div className="p-4 pt-3">
        <p className="text-sm text-gray-300">
          <span className="font-semibold text-gray-100 mr-2">{post.author}</span>
          {post.caption}
        </p>
      </div>
    </div>
  );
}