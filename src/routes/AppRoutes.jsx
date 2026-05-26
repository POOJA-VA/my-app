import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Employees from "../pages/Employees";
import Invoice from "../pages/Invoice";
import Project from "../pages/Project";
import Reports from "../pages/Reports";
import Tasks from "../pages/Tasks";
import Settings from "../pages/Settings";
import SideBar from "../layouts/Sidebar";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SideBar />}>
          <Route index element={<Dashboard />} />
          <Route path="employees" element={<Employees />} />
          <Route path="invoice" element={<Invoice />} />
          <Route path="project" element={<Project />} />
          <Route path="reports" element={<Reports />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
