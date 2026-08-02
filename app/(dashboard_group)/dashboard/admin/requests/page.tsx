import AllRentalReqContentTable from "@/app/(dashboard_group)/_components/adminComponents/AllRentalReqContentTable";
import DashboardTableSkeleton from "@/app/(dashboard_group)/_components/dashboard/DashboardTableSkeleton";
import React, { Suspense } from "react";

const RentalRequestsPage = () => {
  return (
    <div>
      <Suspense fallback={<DashboardTableSkeleton />}>
        <AllRentalReqContentTable />
      </Suspense>
    </div>
  );
};

export default RentalRequestsPage;
