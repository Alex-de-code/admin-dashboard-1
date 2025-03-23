import React from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Sidebar from "./components/Sidebar/Sidebar";

const AdminDashPage = () => {
  return (
    // when I used a comma btwn 2 grid-col widths this didn't work, once I took it out it did
    <div className="grid gap-4 p-4 grid-cols-[220px_1fr]">
      {" "}
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default AdminDashPage;
