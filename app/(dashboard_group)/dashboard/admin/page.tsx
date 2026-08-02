import React, { Suspense } from "react";
import AdminDashboardHomeCards from "../../_components/adminComponents/AdminDashboardHomeCards";

const AdminHomePage = () => {
  return (
    <div className="space-y-8">
      {/* Header */}

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>

          <p className="text-muted-foreground">
            Welcome back! Global overview of platform health.
          </p>
        </div>
      </div>

      {/* Cards */}

      <Suspense fallback={<div>Loading...</div>}>
        <AdminDashboardHomeCards />
      </Suspense>
    </div>
  );
};

export default AdminHomePage;
