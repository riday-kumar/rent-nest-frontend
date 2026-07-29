import React from "react";
import PropertyCard from "../property/PropertyCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const PropertyList = () => {
  // call action for properties fetching
  return (
    <div className="container mx-auto max-lg:px-6">
      <div className="mb-10 flex justify-between items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-slate-800 sm:text-4xl">
            New Listings
          </h2>
          <p>Explore latest & featured properties for rent.</p>
        </div>
        {/* ------------ view all button ------------ */}
        <Button variant={"outline"}>View All</Button>
      </div>
      {/* =================== property card ================= */}
      <div className="grid lg:grid-cols-3 gap-10 md:grid-cols-2 grid-cols-1">
        <PropertyCard
          id="1"
          title="Luxury Villa in Gulshan"
          image="/house1.jpg"
          location="Gulshan, Dhaka"
          price={3280}
          type="rent"
          bedrooms={3}
          bathrooms={2}
          area={1370}
        />
        <PropertyCard
          id="1"
          title="Luxury Villa in Gulshan"
          image="/house1.jpg"
          location="Gulshan, Dhaka"
          price={3280}
          type="rent"
          bedrooms={3}
          bathrooms={2}
          area={1370}
        />
        <PropertyCard
          id="1"
          title="Luxury Villa in Gulshan"
          image="/house1.jpg"
          location="Gulshan, Dhaka"
          price={3280}
          type="rent"
          bedrooms={3}
          bathrooms={2}
          area={1370}
        />
      </div>
    </div>
  );
};

export default PropertyList;
