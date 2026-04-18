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
      return <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded">YT</span>;
    case 'twitter':
      return <span className="bg-blue-500 text-white text-[10px] font-bold px-2 py-1 rounded">X</span>;
    case 'instagram':
      return <span className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white text-[10px] font-bold px-2 py-1 rounded">IG</span>;
    default:
      return null;
  }
};

interface PostCardProps {
  post: FeedPost;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden mb-6 shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between p-4 pb-3">
        <div className="flex items-center gap-3">
          <img src={post.avatar} alt={post.author} className="w-10 h-10 rounded-full bg-gray-700" />
          <h3 className="font-semibold text-sm text-gray-100">{post.author}</h3>
        </div>
        <PlatformIcon platform={post.platform} />
      </div>

      {/* Dynamic Content Mapping via TypeScript Discriminated Unions */}
      {post.type === 'video' && <VideoCard post={post} />}
      {post.type === 'image' && <ImageCard post={post} />}
      {post.type === 'text'  && <TextCard post={post} />}

      {/* Mock Footer / Engagement Bar */}
      <div className="px-4 pb-4 pt-2 flex gap-4 text-gray-500 text-sm">
        <button className="hover:text-pink-500 transition-colors">❤️ Like</button>
        <button className="hover:text-blue-500 transition-colors">💬 Comment</button>
        <button className="hover:text-green-500 transition-colors">🔄 Share</button>
      </div>
    </div>
  );
}