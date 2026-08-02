import React from "react";
import LandlordOverviewCard from "../landlordComponent/OverviewCard";
import { getLandLordDashboardHomeCardInfo } from "../../_actions/dashboard_action/dashboardActions";
import { Home, FileText, Wallet } from "lucide-react";

const LandLordDashboardHomeCards = async () => {
  const allInfo = await getLandLordDashboardHomeCardInfo();
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      <LandlordOverviewCard
        title="Total Properties"
        value={allInfo.data.data.numOfProperty}
        icon={Home}
      />

      <LandlordOverviewCard
        title="Active Requests"
        value={allInfo.data.data.numOfActiveStatus}
        icon={FileText}
      />

      <LandlordOverviewCard
        title="Total Earnings"
        value={`৳ ${allInfo.data.data.numOfEarnings}`}
        icon={Wallet}
      />
    </div>
  );
};

export default LandLordDashboardHomeCards;
