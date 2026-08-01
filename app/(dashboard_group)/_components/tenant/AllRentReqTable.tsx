import { getTenantReqData } from "../../_actions/tenant_action/tenantReqData";
import TenantRentRequestsTable from "./RentRequestTable";

const AllRentReqTable = async () => {
  const rentRequests = await getTenantReqData();

  if (!rentRequests.success) {
    return <p>No rent requests found.</p>;
  }

  return (
    <div>
      <TenantRentRequestsTable requests={rentRequests.data} />
    </div>
  );
};

export default AllRentReqTable;
