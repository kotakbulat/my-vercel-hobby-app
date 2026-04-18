import Feed from './components/Feed';

function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      <header className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-xl mx-auto px-4 py-4">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            OmniFeed
          </h1>
        </div>
      </header>
      
      <main>
        <Feed />
      </main>
    </div>
  );
}

export default App;