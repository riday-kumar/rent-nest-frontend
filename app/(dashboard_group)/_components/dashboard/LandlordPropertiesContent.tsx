import React from "react";
import { getLandlordsAllProperty } from "../../_actions/property/getLandlordsAllProperty";
import AllProperties from "../allProperty/MyAllProperty";

const LandlordPropertiesContent = async () => {
  const properties = await getLandlordsAllProperty();
  //   console.log(properties);
  if (!properties.success) {
    return <div>No Data found</div>;
  }
  return (
    <div>
      <AllProperties properties={properties.data} />
    </div>
  );
};

export default LandlordPropertiesContent;
