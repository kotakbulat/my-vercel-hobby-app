import type { TextPost } from '../types';

interface TextCardProps {
  post: TextPost;
}

export default function TextCard({ post }: TextCardProps) {
  return (
        <div className="content-padding pt-0">
      <p className="text-content">
        {post.content}
      </p>
    </div>
  );
}