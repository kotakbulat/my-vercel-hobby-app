import Feed from './components/Feed';
import './style.css'; // Make sure to import the CSS we created!

function App() {
  return (
    <div>
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">Feeds</h1>
        </div>
      </header>
      
      <main>
        <Feed />
      </main>
    </div>
  );
}

export default App;