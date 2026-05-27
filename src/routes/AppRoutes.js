import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Employees from "../pages/Employees";
import Invoice from "../pages/Invoice/Invoice";
import Reports from "../pages/Reports";
import Tasks from "../pages/Tasks";
import Settings from "../pages/Settings";

import Projects from "../pages/Projects";
import Layout from "../layouts/Layout";
import InvoiceMaster from "../pages/Invoice/InvoiceMaster";
import InvoiceMailReports from "../pages/Invoice/InvoiceMailReports";
import InvoiceMail from "../pages/Invoice/InvoiceMail";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="employees" element={<Employees />} />

          <Route path="projects" element={<Projects />} />
          <Route path="reports" element={<Reports />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
