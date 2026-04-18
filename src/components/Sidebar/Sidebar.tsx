import { useState } from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../../router/routes";
import "../../style/sidebar.css";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="sidebar-toggle" onClick={() => setOpen(!open)}>
        {open ? "✕" : "☰"}
      </button>

      <div 
        className={`sidebar-overlay ${open ? "visible" : ""}`} 
        onClick={() => setOpen(false)} 
      />

      <aside className={`sidebar-container ${open ? "open" : ""}`}>
        <h2 style={{ marginBottom: "2rem" }}>Menu</h2>

        <nav className="nav-list">
          {routes.map((route) => (
            <NavLink
              key={route.path}
              to={route.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) => 
                isActive ? "nav-item active" : "nav-item"
              }
            >
              {route.name}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}