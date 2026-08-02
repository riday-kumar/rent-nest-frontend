import AllUsersContentTable from "@/app/(dashboard_group)/_components/adminComponents/AllUsersContentTable";
import DashboardTableSkeleton from "@/app/(dashboard_group)/_components/dashboard/DashboardTableSkeleton";
import React, { Suspense } from "react";

const AllUsersPage = () => {
  return (
    <div>
      <Suspense fallback={<DashboardTableSkeleton />}>
        <AllUsersContentTable />
      </Suspense>
    </div>
  );
};

export default AllUsersPage;
