import React from "react";
import LandlordOverviewCard from "../landlordComponent/OverviewCard";
import {
  getAllPendingReqForAdmin,
  getAllRentalReqForAdmin,
  getAllUsersForAdmin,
} from "../../_actions/admin_action/adminAction";
import { Clock, HandshakeIcon, Users } from "lucide-react";

const AdminDashboardHomeCards = async () => {
  const totalUsers = await getAllUsersForAdmin();
  const totalRentalRequests = await getAllRentalReqForAdmin();
  const totalPendingRequests = await getAllPendingReqForAdmin();
  //   console.log("totalPendingRequests", totalPendingRequests);

  const totalUser = totalUsers.success ? totalUsers?.data?.data?.length : 0;
  const totalRentReq = totalRentalRequests.success
    ? totalRentalRequests?.data?.length
    : 0;
  const totalPendingReq = totalPendingRequests.success
    ? totalPendingRequests?.data?.length
    : 0;

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      <LandlordOverviewCard
        title="Total Users"
        value={totalUser}
        icon={Users}
      />

      <LandlordOverviewCard
        title="Total Rental Requests"
        value={totalRentReq}
        icon={HandshakeIcon}
      />

      <LandlordOverviewCard
        title="Total Pending Requests"
        value={totalPendingReq}
        icon={Clock}
      />
    </div>
  );
};

export default AdminDashboardHomeCards;
