import { getSingleProperty } from "@/app/(dashboard_group)/_actions/property/getSingleProperty";
import PropertyForm from "@/app/(dashboard_group)/_components/forms/property/PropertyForm";
import React from "react";

const UPdatePropertyPage = async ({ params }: { params: { id: string } }) => {
  const property = await getSing;
  leProperty(params.id);

  return <PropertyForm mode="update" property={property} />;
};

export default UPdatePropertyPage;
