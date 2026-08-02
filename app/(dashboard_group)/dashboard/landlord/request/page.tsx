import DashboardTableSkeleton from "@/app/(dashboard_group)/_components/dashboard/DashboardTableSkeleton";
import RentRequestTable from "@/app/(dashboard_group)/_components/dashboard/RentRequestTable";
import React, { Suspense } from "react";

const Request = () => {
  return (
    <div>
      <Suspense fallback={<DashboardTableSkeleton />}>
        <RentRequestTable />
      </Suspense>
    </div>
  );
};

export default Request;
