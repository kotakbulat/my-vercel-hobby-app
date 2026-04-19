import type { ImagePost } from '../types';

interface ImageCardProps {
  post: ImagePost;
}

export default function ImageCard({ post }: ImageCardProps) {
  return (
    <div>
      <img 
        src={`https://picsum.photos/id/${post.imageId}/600/800`} 
        alt="Post" 
        className="post-image"
        loading="lazy"
      />
      <div className="content-padding">
        <p className="post-caption">
          <span className="caption-author">{post.author}</span>
          {post.caption}
        </p>
      </div>
    </div>
  );
}