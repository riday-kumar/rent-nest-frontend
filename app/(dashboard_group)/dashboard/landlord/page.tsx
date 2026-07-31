import { Home, FileText, Wallet, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import LandlordOverviewCard from "../../_components/landlordComponent/OverviewCard";

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

        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Property
        </Button>
      </div>

      {/* Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <LandlordOverviewCard title="Total Properties" value={12} icon={Home} />

        <LandlordOverviewCard
          title="Active Requests"
          value={5}
          icon={FileText}
        />

        <LandlordOverviewCard
          title="Total Earnings"
          value="৳120,000"
          icon={Wallet}
        />
      </div>
    </div>
  );
}
