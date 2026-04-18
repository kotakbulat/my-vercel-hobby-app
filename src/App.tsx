import { Routes, Route } from "react-router-dom";
import { routes } from "./router/routes";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="app-wrapper">
      <Sidebar />

      <main
        style={{
          padding: "2rem",
          paddingTop: "4rem",
          minHeight: "100vh",
        }}
      >
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
      </main>
    </div>
  );
}

export default App;