import { useState, useEffect, useRef } from 'react';
import PostCard from './PostCard';
import { fetchMockFeedBatch } from '../mockData';
import type { FeedPost } from '../types';

export default function Feed() {
  const [feedItems, setFeedItems] = useState<FeedPost[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const loaderRef = useRef<HTMLDivElement>(null);

  const loadMoreItems = async () => {
    if (isLoading) return;
    setIsLoading(true);
    
    const newItems = await fetchMockFeedBatch();
    setFeedItems((prev) => [...prev, ...newItems]);
    
    setIsLoading(false);
  };

  useEffect(() => {
    loadMoreItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadMoreItems();
      }
    }, { threshold: 0.1 });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [isLoading]);

  return (
    <div className="feed-container">
      {feedItems.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      
      <div ref={loaderRef} className="loader-container">
        {isLoading && <div className="spinner"></div>}
      </div>
    </div>
  );
}