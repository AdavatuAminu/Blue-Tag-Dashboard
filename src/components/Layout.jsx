import { useState } from "react";
import {
  FaBars,
  FaHome,
  FaBuilding,
  FaChartBar,
  FaCog,
  FaUserCircle,
} from "react-icons/fa";

export default function Layout({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`layout ${collapsed ? "collapsed" : ""}`}>

      {/* SIDEBAR */}
      <aside className="sidebar">

        <div className="sidebar-header">
          <h2 className="logo">
            {collapsed ? "BT" : "BlueTag"}
          </h2>

          <button
            className="collapse-btn"
            onClick={() => setCollapsed(!collapsed)}
          >
            <FaBars />
          </button>
        </div>

        <nav className="nav">

          <a className="nav-item active">
            <FaHome />
            {!collapsed && <span>Dashboard</span>}
          </a>

          <a className="nav-item">
            <FaBuilding />
            {!collapsed && <span>Companies</span>}
          </a>

          <a className="nav-item">
            <FaChartBar />
            {!collapsed && <span>Reports</span>}
          </a>

          <a className="nav-item">
            <FaCog />
            {!collapsed && <span>Settings</span>}
          </a>

        </nav>

      </aside>


      {/* MAIN AREA */}
      <div className="main">

        {/* TOPBAR */}
        <header className="topbar">

          <input
            className="search"
            placeholder="Search..."
          />

          <div className="user-area">
            <FaUserCircle size={28} />
            <span>Admin</span>
          </div>

        </header>


        {/* CONTENT */}
        <main className="content">
          {children}
        </main>

      </div>

    </div>
  );
}