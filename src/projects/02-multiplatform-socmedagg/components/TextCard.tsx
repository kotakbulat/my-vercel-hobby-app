import type { TextPost } from '../types';

interface TextCardProps {
  post: TextPost;
}

export default function TextCard({ post }: TextCardProps) {
  return (
        <div className="p-4 pt-2">
          <p className="text-gray-200 text-[15px] leading-relaxed">
            {post.content}
          </p>
        </div>
  );
}