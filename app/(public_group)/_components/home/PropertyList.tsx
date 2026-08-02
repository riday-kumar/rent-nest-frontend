import React from "react";

import { Button } from "@/components/ui/button";

import PropertyCardForHome from "../property/PropertyCardForHome";
import { allPublicProperties } from "../../_actions/property";
import { PropertyCardProps } from "@/lib/types";
import Link from "next/link";

const PropertyList = async () => {
  const PublicProperties = await allPublicProperties("", "");
  const sixProperties = PublicProperties?.data?.data?.slice(0, 6);
  return (
    <div className="bg-[#fef7f6] py-15">
      <div className="w-11/12 mx-auto max-lg:px-6 ">
        <div className="mb-10 flex justify-between items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-slate-800 sm:text-4xl">
              New Listings
            </h2>
            <p>Explore latest & featured properties for rent.</p>
          </div>
          {/* ------------ view all button ------------ */}
          <Button variant={"outline"}>
            <Link prefetch={false} href="/properties">
              View All
            </Link>
          </Button>
        </div>
        {/* =================== property card ================= */}
        <div className="grid lg:grid-cols-3 gap-10 md:grid-cols-2 grid-cols-1">
          {sixProperties?.map((property: PropertyCardProps) => (
            <PropertyCardForHome key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
