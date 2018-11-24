import React from "react";
import AdminLayout from "./../../layout/HOC/AdminLayout";

function Dashboard() {
  return (
    <AdminLayout>
      <div className="user_dashboard">
        <div>This is Your Dashboard</div>
      </div>
    </AdminLayout>
  );
}

export default Dashboard;
