import { useState, useEffect, useRef } from 'react';
import PostCard from './PostCard';
import { fetchMockFeedBatch } from '../mockData';
import type { FeedPost } from '../types';

export default function Feed() {
  const [feedItems, setFeedItems] = useState<FeedPost[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  // Strongly type the ref for the div
  const loaderRef = useRef<HTMLDivElement>(null);

  const loadMoreItems = async () => {
    if (isLoading) return;
    setIsLoading(true);
    
    const newItems = await fetchMockFeedBatch();
    setFeedItems((prev) => [...prev, ...newItems]);
    
    setIsLoading(false);
  };

  // Initial load
  useEffect(() => {
    loadMoreItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Intersection Observer for Infinite Scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
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
    <div className="max-w-xl mx-auto py-8 px-4 sm:px-0">
      {feedItems.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      
      {/* Invisible element at the bottom to trigger Intersection Observer */}
      <div ref={loaderRef} className="h-20 flex items-center justify-center">
        {isLoading && (
          <div className="w-8 h-8 border-4 border-gray-600 border-t-blue-500 rounded-full animate-spin"></div>
        )}
      </div>
    </div>
  );
}