// src/mockData.ts
import type { RawPost, FeedPost } from "./types";

const MOCK_YOUTUBE: RawPost[] = [
  { platform: 'youtube', type: 'video', author: 'Fireship', videoId: 'B-ycCRtB-1M', title: 'React in 100 Seconds' },
  { platform: 'youtube', type: 'video', author: 'Veritasium', videoId: 'dQw4w9WgXcQ', title: 'Never Gonna Give You Up' },
  { platform: 'youtube', type: 'video', author: 'Marques Brownlee', videoId: 'tO1Ea-4B41A', title: 'Tech Review' }
];

const MOCK_TWITTER: RawPost[] = [
  { platform: 'twitter', type: 'text', author: 'Dan Abramov', content: 'Just realized you can build almost anything with useState and useEffect. What a time to be alive.' },
  { platform: 'twitter', type: 'text', author: 'Elon Musk', content: 'Funding secured for the unified feed project. 🚀' },
  { platform: 'twitter', type: 'text', author: 'Frontend Daily', content: 'Center a div? Just use flexbox. flex items-center justify-center. Done.' }
];

const MOCK_INSTAGRAM: RawPost[] = [
  { platform: 'instagram', type: 'image', author: 'NaturePhotography', imageId: '1018', caption: 'Beautiful sunset in the mountains. #nature #vibes' },
  { platform: 'instagram', type: 'image', author: 'FoodieLife', imageId: '429', caption: 'Best avocado toast I have ever had! 🥑✨' },
  { platform: 'instagram', type: 'image', author: 'TravelGram', imageId: '1043', caption: 'Exploring the hidden gems of the city.' }
];

export const fetchMockFeedBatch = async (): Promise<FeedPost[]> => {
  // Simulate network delay (300ms - 800ms)
  await new Promise((resolve) => setTimeout(resolve, Math.random() * 500 + 300));

  // Combine and shuffle
  const combined = [...MOCK_YOUTUBE, ...MOCK_TWITTER, ...MOCK_INSTAGRAM]
    .sort(() => Math.random() - 0.5);

  // Add required generated properties to satisfy the FeedPost type
  return combined.map((item) => ({
    ...item,
    id: crypto.randomUUID(),
    avatar: `https://i.pravatar.cc/150?u=${item.author.replace(/\s/g, '')}`
  })) as FeedPost[];
};