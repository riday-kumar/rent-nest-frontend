import LandlordPropertiesContent from "@/app/(dashboard_group)/_components/dashboard/LandlordPropertiesContent";
import { Suspense } from "react";

const MyAllPropertyPage = async () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LandlordPropertiesContent />
    </Suspense>
  );
};

export default MyAllPropertyPage;
