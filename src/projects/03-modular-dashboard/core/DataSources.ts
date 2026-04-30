export type DataSource = {
  id: string;
  name: string;
  fetch: () => Promise<any>;
  transform?: (data: any) => any;
};

export const DataRegistry: Record<string, DataSource> = {
  // Public API: User Posts Count
  userPosts: {
    id: 'userPosts',
    name: 'User Activity (JSONPlaceholder)',
    fetch: async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      return res.json();
    },
    transform: (data: any[]) => {
      // Aggregate posts by userId
      const counts = data.reduce((acc, post) => {
        acc[post.userId] = (acc[post.userId] || 0) + 1;
        return acc;
      }, {});
      return Object.entries(counts).map(([userId, count]) => ({
        label: `User ${userId}`,
        value: count,
      })).slice(0, 10);
    }
  },
  // Simulated Time-Series (e.g., Stock/Weather)
  timeSeriesMock: {
    id: 'timeSeriesMock',
    name: 'Live Server Load',
    fetch: async () => {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 500));
      return Array.from({ length: 30 }).map((_, i) => ({
        date: new Date(Date.now() - (30 - i) * 86400000), // Last 30 days
        value: Math.floor(Math.random() * 50) + 50
      }));
    }
  }
};