import React from "react";
import { getAllRentalReqForAdmin } from "../../_actions/admin_action/adminAction";
import RentalRequestsTable from "./RentalRequestsTable";

const AllRentalReqContentTable = async () => {
  // api call
  const rentRequests = await getAllRentalReqForAdmin();
  if (!rentRequests.success) {
    return <p>No Rental Requests found</p>;
  }
  return (
    <div>
      <RentalRequestsTable rentRequests={rentRequests} />
    </div>
  );
};

export default AllRentalReqContentTable;
