import { Routes, Route } from "react-router-dom";
import { routes } from "./router/routes";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <main
        style={{
          flex: 1,
          padding: "2rem",
          marginLeft: "60px", // space for toggle button
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