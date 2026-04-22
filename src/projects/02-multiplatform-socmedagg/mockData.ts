// src/mockData.ts
import type { RawPost, FeedPost } from "./types";

const MOCK_YOUTUBE: RawPost[] = [
  // These use standard IDs, but we will force them into a Shorts 9:16 container via CSS
  { platform: 'youtube', type: 'video', author: 'RedBull', videoId: 'evXfp7ORQL0', title: 'Flying to History' },
  { platform: 'youtube', type: 'video', author: 'RedBull', videoId: 'kJ0tTj3KAXQ', title: 'Wait for the end... 🤯' },
  { platform: 'youtube', type: 'video', author: 'RedBull', videoId: 'NqZrNODuh8k', title: 'My morning routine ☕️📱' },
  { platform: 'youtube', type: 'video', author: 'Airpaz Official', videoId: 'tG8EHO3MpH8', title: 'Be a Member, Get App-only Deal' },
  { platform: 'youtube', type: 'video', author: 'Airpaz Official', videoId: 'T3H0Gt0EI-M', title: 'Be a Member, Get App-only Deal' },
  { 
    platform: 'youtube', type: 'video', author: 'Shubhi Najahi', videoId: 'puHbnVXKWkw', title: 'Bali to Jakarta on board TransNusa Airlines CGK - DPS',
    travelMeta: {
      departureAirport: "DPS",
      arrivalAirport: "CGK",
      departureDate: "2026-11-15",
      returnDate: "2026-11-25",
      adult: 1, child: 0, infant: 0,
      cabin: "economy", price: 850
    }
  }
];

const MOCK_TWITTER: RawPost[] = [
  {
    platform: 'twitter',
    type: 'text',
    author: 'Nomad Dev',
    content: 'Working from a tiny café in Lisbon today. Good coffee, slow WiFi, perfect vibes.'
  },
  {
    platform: 'twitter',
    type: 'text',
    author: 'Backpack Stories',
    content: 'Missed my train in Kyoto, ended up discovering a hidden temple. Sometimes getting lost is the plan.'
  },
  {
    platform: 'twitter',
    type: 'text',
    author: 'Wanderlog',
    content: 'Pro tip: pack light. You don’t need 5 outfits, just 1 good story per day.'
  },
  {
    platform: 'twitter',
    type: 'text',
    author: 'Airpaz',
    content: '✈️ Ready for your next escape? Discover the best flight deals to your dream destinations—easy, fast, and affordable.'
  },
  {
    platform: 'twitter',
    type: 'text',
    author: 'Airpaz',
    content: '🌍 Travel smarter with exclusive promos on flights & hotels. Your next adventure starts here with seamless booking.'
  }
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