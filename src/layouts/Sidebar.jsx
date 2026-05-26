import { Link, Outlet } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>PMO Dev</h2>

        <nav>
          <Link to="/">Dashboard</Link>
          <Link to="/employees">Employees</Link>
          <Link to="/invoice">Invoice</Link>
          <Link to="/project">Project</Link>
          <Link to="/reports">Reports</Link>
          <Link to="/tasks">Tasks</Link>
          <Link to="/settings">Settings</Link>
        </nav>
      </aside>

      {/* Page Content */}
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export default SideBar;
