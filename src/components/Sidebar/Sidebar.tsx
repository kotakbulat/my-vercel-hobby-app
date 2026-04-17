import { useState } from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../../router/routes";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          top: "1rem",
          left: "1rem",
          zIndex: 1000,
          fontSize: "1.5rem",
        }}
      >
        ☰
      </button>

      {/* Sidebar */}
      <aside
        style={{
          position: "fixed",
          top: 0,
          left: open ? 0 : "-260px",
          width: "260px",
          height: "100vh",
          background: "#111",
          color: "#fff",
          padding: "2rem 1rem",
          transition: "left 0.3s ease",
        }}
      >
        <h2 style={{ marginBottom: "2rem" }}>Menu</h2>

        <nav style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {routes.map((route) => (
            <NavLink
              key={route.path}
              to={route.path}
              onClick={() => setOpen(false)}
              style={({ isActive }) => ({
                color: isActive ? "#4CAF50" : "#fff",
                textDecoration: "none",
                fontWeight: isActive ? "bold" : "normal",
              })}
            >
              {route.name}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}