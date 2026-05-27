import "./SideBar.css";
import { useState } from "react";

import {
  FaHome,
  FaTasks,
  FaUsers,
  FaChartBar,
  FaCog,
  FaProjectDiagram,
  FaFileInvoice,
} from "react-icons/fa";

import { Link, Outlet } from "react-router-dom";

const SideBar = () => {
  const [showInvoice, setShowInvoice] = useState(false);

  return (
    <div className="SideBar">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo">
          <h2>Kumaran</h2>
        </div>

        <ul className="menu">
          <li>
            <Link to="/">
              <FaHome />
              <span>Dashboard</span>
            </Link>
          </li>

          <li>
            <Link to="/projects">
              <FaProjectDiagram />
              <span>Projects</span>
            </Link>
          </li>

          <li>
            <Link to="/tasks">
              <FaTasks />
              <span>Tasks</span>
            </Link>
          </li>

          <li>
            <Link to="/employees">
              <FaUsers />
              <span>Employees</span>
            </Link>
          </li>

          <li>
            <Link to="/reports">
              <FaChartBar />
              <span>Reports</span>
            </Link>
          </li>

          {/* Invoice Menu */}
          <li>
            <div
              className="submenu-title"
              onClick={() => setShowInvoice(!showInvoice)}
            >
              <FaFileInvoice />
              <span>Invoice</span>
            </div>

            {showInvoice && (
              <ul className="submenu">
                <li>
                  <Link to="/invoice/invoice-master">Invoice Master</Link>
                </li>

                <li>
                  <Link to="/invoice/invoice-mail-reports">
                    Invoice Mail Reports
                  </Link>
                </li>

                <li>
                  <Link to="/invoice/invoice-mail">Invoice Mail</Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link to="/settings">
              <FaCog />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default SideBar;
