import { Suspense } from "react";
import LandLordDashboardHomeCards from "../../_components/dashboard/LandLordDashboardHomeCards";
import DashboardHomeCardSkeleton from "../../_components/dashboard/DashboardHomeCardSkeleton";

export default function LandlordDashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>

          <p className="text-muted-foreground">
            Welcome back! Here is your rental overview.
          </p>
        </div>
      </div>

      {/* Cards */}

      <Suspense fallback={<DashboardHomeCardSkeleton />}>
        <LandLordDashboardHomeCards />
      </Suspense>
    </div>
  );
}
