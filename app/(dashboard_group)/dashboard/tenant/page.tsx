import React, { Suspense } from "react";
import AllRentReqTable from "../../_components/tenant/AllRentReqTable";
import DashboardTableSkeleton from "../../_components/dashboard/DashboardTableSkeleton";

const TenantDashboardHome = () => {
  return (
    <div>
      <Suspense fallback={<DashboardTableSkeleton />}>
        <AllRentReqTable />
      </Suspense>
    </div>
  );
};

export default TenantDashboardHome;
