import { Outlet } from "react-router-dom";
import SideBar from "./Sidebar";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="app-layout">
      {/* Sidebar */}
      <Header />

      {/* Main Section */}
      <div className="main-section">
        {/* Add Header Here */}
        <SideBar />

        {/* Page Content */}
        <div className="page-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
