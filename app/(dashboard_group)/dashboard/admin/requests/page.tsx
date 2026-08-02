import AllRentalReqContentTable from "@/app/(dashboard_group)/_components/adminComponents/AllRentalReqContentTable";
import React, { Suspense } from "react";

const RentalRequestsPage = () => {
  return (
    <div>
      <Suspense fallback={<p>loading...</p>}>
        <AllRentalReqContentTable />
      </Suspense>
    </div>
  );
};

export default RentalRequestsPage;
