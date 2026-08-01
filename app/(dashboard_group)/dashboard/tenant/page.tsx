import React, { Suspense } from "react";
import AllRentReqTable from "../../_components/tenant/AllRentReqTable";

const TenantDashboardHome = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <AllRentReqTable />
      </Suspense>
    </div>
  );
};

export default TenantDashboardHome;
