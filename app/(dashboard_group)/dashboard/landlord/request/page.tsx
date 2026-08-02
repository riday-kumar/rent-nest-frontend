import RentRequestTable from "@/app/(dashboard_group)/_components/dashboard/RentRequestTable";
import React, { Suspense } from "react";

const Request = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <RentRequestTable />
      </Suspense>
    </div>
  );
};

export default Request;
