import { getLandlordsAllProperty } from "@/app/(dashboard_group)/_actions/property/getLandlordsAllProperty";
import AllProperties from "@/app/(dashboard_group)/_components/allProperty/MyAllProperty";
import LandlordPropertiesContent from "@/app/(dashboard_group)/_components/dashboard/LandlordPropertiesContent";
import React, { Suspense } from "react";

const MyAllPropertyPage = async () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LandlordPropertiesContent />
    </Suspense>
  );
};

export default MyAllPropertyPage;
