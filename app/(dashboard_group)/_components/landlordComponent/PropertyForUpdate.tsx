import React from "react";
import PropertyForm from "../forms/property/PropertyForm";
import { getSingleProperty } from "../../_actions/property/getSingleProperty";

const PropertyForUpdate = async ({ params }: { params: string }) => {
  const property = await getSingleProperty(params);
  return (
    <div>
      {/* <h1>Update Property id : {params}</h1> */}
      <PropertyForm mode="update" initialData={property.data} />
    </div>
  );
};

export default PropertyForUpdate;
