import AllUsersContentTable from "@/app/(dashboard_group)/_components/adminComponents/AllUsersContentTable";
import React, { Suspense } from "react";

const AllUsersPage = () => {
  return (
    <div>
      <Suspense fallback={<p>loading...</p>}>
        <AllUsersContentTable />
      </Suspense>
    </div>
  );
};

export default AllUsersPage;
