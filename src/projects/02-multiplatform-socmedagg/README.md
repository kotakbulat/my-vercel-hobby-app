```markdown
# 📱 OmniFeed PoC: Contextual Commerce in a Unified Feed

OmniFeed is a Proof of Concept (PoC) React application designed to validate two core product hypotheses:

1. **The Engagement Hypothesis:** *"A unified, infinite-scrolling feed aggregating mixed content from multiple platforms (YouTube Shorts, Twitter/X, Instagram) feels useful and highly engaging."*
2. **The Contextual Commerce Hypothesis:** *"Content drives intent. Contextual action overlays (like a flight booking CTA on a travel vlog) can convert user intent without breaking the native feed experience."*

This is **not** a production-ready app. It relies on mock data, structural CSS, and simulated APIs to rapidly test the UX/UI feel of the idea.

---

## ✨ Features

- **🔄 Unified Infinite Scroll**: Seamlessly mixes text, images, and 9:16 vertical video components into a single vertical feed using the native `IntersectionObserver` API.
- **🎥 Platform Simulation**: 
  - **YouTube**: Renders actual embedded YouTube iframes forced into a Shorts/Reels 9:16 aspect ratio.
  - **Twitter/X**: Renders clean, readable text cards.
  - **Instagram**: Renders high-quality images with author captions.
- **✈️ Contextual Intent Layer**: A sleek, frosted-glass CTA overlay automatically appears on media tagged with travel metadata (e.g., Tokyo Vlogs, Bali photos).
- **🔗 Dynamic Link Generation**: Clicking the CTA parses the underlying post's metadata and generates a live flight search query (via Airpaz).

---

## 🛠 Tech Stack

- **Framework**: React 18 + Vite
- **Language**: TypeScript (using Discriminated Unions for safe component rendering)
- **Styling**: Native CSS (Modular, CSS variables, Flexbox)
- **State Management**: React `useState`, `useEffect`, `useRef`
- **Data**: Static mock JSON + simulated network delays

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+ recommended)

### Installation

1. **Clone or Scaffold the Project**
   If you haven't already created the Vite app, run:
   ```bash
   npm create vite@latest omnifeed-poc -- --template react-ts
   cd omnifeed-poc
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start the Development Server**
   ```bash
   npm run dev
   ```

4. **View the App**
   Open your browser and navigate to `http://localhost:5173`

---

## 📁 Project Structure

```text
src/
├── components/
│   ├── Feed.tsx          # Handles infinite scroll logic & state
│   ├── PostCard.tsx      # Master wrapper that renders the right media type
│   ├── VideoCard.tsx     # 9:16 YouTube Shorts Iframe wrapper
│   ├── ImageCard.tsx     # Instagram-style image block
│   ├── TextCard.tsx      # Twitter-style text block
│   └── FlightCTA.tsx     # The contextual commerce overlay card
├── mockData.ts           # Simulated API returning mixed feed batches
├── types.ts              # TypeScript interfaces (Post types, TravelMeta)
├── utils.ts              # Helper functions (Flight URL generator)
├── styles.css            # Custom styling, animations, and variables
├── App.tsx               # Main application wrapper and Header
└── main.tsx              # React DOM entry point
```

---

## 🧠 How it Works Under the Hood

### 1. Discriminated Unions (TypeScript)
The app uses a robust TypeScript structure. A post has a `type: 'video' | 'image' | 'text'`. Based on this type, the TS compiler guarantees that `VideoCard` will receive a `videoId`, while `TextCard` will receive `content`.

### 2. The Contextual CTA
Certain mock posts are injected with an optional `travelMeta` object:
```typescript
travelMeta: {
  departureAirport: "LAX",
  arrivalAirport: "HND",
  departureDate: "2024-11-15",
  cabin: "economy",
  price: 850
}
```
If `PostCard.tsx` detects this object, it mounts the `<FlightCTA />` component absolutely positioned over the media, creating a non-intrusive intent bridge.

### 3. Endless Content Generation
To simulate an infinite feed without needing a massive database, `mockData.ts` grabs a static pool of mock posts, shuffles them randomly, assigns them fresh UUIDs, and feeds them back to the UI whenever the user hits the bottom of the screen.

---

## ⚠️ Limitations (Why this is a PoC)

To move this to production, the following would need to be addressed:
- **TOS & Scraping:** Currently uses YouTube embeds. A real app would need official API access (OAuth) or complex scraping infrastructure to bypass platform walled gardens safely.
- **Backend:** Needs a real database (PostgreSQL/MongoDB) and a recommendation algorithm.
- **Authentication:** No user login or session management exists.
- **Performance:** Rendering dozens of YouTube iframes will eventually cause memory bloat. A production app would use thumbnail placeholders that only load the iframe/video on click or intersection.

---

**Built to test ideas, fast. 🚀**
```