import React from "react";
import AllFilteringComponent from "./AllFilteringcomponent";
import { gestCategory } from "@/app/(dashboard_group)/_actions/property/getCategory";

const AdvancedFiltering = async () => {
  const res = await gestCategory();
  const categories = res?.data;

  // const amenities = [
  //   {
  //     id: "1",
  //     name: "Wifi",
  //   },
  //   {
  //     id: "2",
  //     name: "Gas",
  //   },
  //   {
  //     id: "3",
  //     name: "Security",
  //   },
  //   {
  //     id: "4",
  //     name: "Generator",
  //   },
  //   {
  //     id: "5",
  //     name: "CCTV",
  //   },
  //   {
  //     id: "6",
  //     name: "Intercom",
  //   },
  //   {
  //     id: "7",
  //     name: "Gym",
  //   },
  //   {
  //     id: "8",
  //     name: "Swimming Pool",
  //   },
  // ];
  return (
    <div>
      <AllFilteringComponent categories={categories} />
    </div>
  );
};

export default AdvancedFiltering;
