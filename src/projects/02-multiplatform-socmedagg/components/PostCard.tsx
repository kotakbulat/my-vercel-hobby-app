import type { FeedPost, Platform } from '../types';
import VideoCard from './VideoCard';
import ImageCard from './ImageCard';
import TextCard from './TextCard';

interface PlatformIconProps {
  platform: Platform;
}

const PlatformIcon = ({ platform }: PlatformIconProps) => {
  switch (platform) {
    case 'youtube':
      return <span className="platform-badge badge-yt">SHORTS</span>;
    case 'twitter':
      return <span className="platform-badge badge-tw">X</span>;
    case 'instagram':
      return <span className="platform-badge badge-ig">IG</span>;
    default:
      return null;
  }
};

interface PostCardProps {
  post: FeedPost;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="post-card">
      {/* Header */}
      <div className="post-header">
        <div className="post-author-info">
          <img src={post.avatar} alt={post.author} className="post-avatar" />
          <h3 className="post-author-name">{post.author}</h3>
        </div>
        <PlatformIcon platform={post.platform} />
      </div>

      {/* Dynamic Content */}
      {post.type === 'video' && <VideoCard post={post} />}
      {post.type === 'image' && <ImageCard post={post} />}
      {post.type === 'text'  && <TextCard post={post} />}

      {/* Engagement Bar */}
      <div className="post-footer">
        <button className="action-btn">❤️ Like</button>
        <button className="action-btn">💬 Comment</button>
        <button className="action-btn">🔄 Share</button>
      </div>
    </div>
  );
}