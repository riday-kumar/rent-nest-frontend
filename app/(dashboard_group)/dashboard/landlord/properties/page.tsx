import DashboardTableSkeleton from "@/app/(dashboard_group)/_components/dashboard/DashboardTableSkeleton";
import LandlordPropertiesContent from "@/app/(dashboard_group)/_components/dashboard/LandlordPropertiesContent";
import { Suspense } from "react";

const MyAllPropertyPage = async () => {
  return (
    <Suspense fallback={<DashboardTableSkeleton />}>
      <LandlordPropertiesContent />
    </Suspense>
  );
};

export default MyAllPropertyPage;
