import React from "react";
import PropertyGallery from "./PropertyGallery";
import LandlordCard from "./LandlordCard";
import PropertyHeading from "./PropertyHeading";
import { Separator } from "@/components/ui/separator";
import PropertyInfo from "./PropertyInfo";
import Amenities from "./Amenities";
import PropertyDescription from "./PropertyDescription";
import PropertyReview from "./PropertyReview";
import { propertyDetails } from "../../_actions/property";
import { PropertyDetails } from "@/lib/types";

const SinglePropertyDetails = async ({ id }: { id: string }) => {
  const data = await propertyDetails(id);
  const property = data.data as PropertyDetails;
  if (!data.success) {
    return <p>No property found</p>;
  }
  return (
    <div className="w-11/12 mx-auto mt-36 mb-24">
      {/* ========================= */}
      {/* TOP SECTION */}
      {/* ========================= */}

      <div className="grid lg:grid-cols-3 gap-8 mb-10">
        <div className="lg:col-span-2">
          {/* =================== Carousel ============== */}
          <PropertyGallery images={property.images} title={property.title} />
        </div>

        {/* ================ Landlord ============== */}
        <LandlordCard landlord={property.landlord} />
      </div>

      {/* ========================= */}
      {/* MAIN CONTENT */}
      {/* ========================= */}

      <div className="space-y-8">
        {/* ================== Header ======= */}

        <PropertyHeading
          title={property.title}
          categoryName={property.category.categoryName}
          address={property.address}
          city={property.city}
          division={property.division}
          rentAmount={property.rentAmount}
        />

        <Separator />

        {/* ============== Property Info ========== */}

        <PropertyInfo property={property} />

        <Separator />

        {/* =================== Amenities =============== */}

        <div>
          <h2 className="text-2xl font-semibold mb-4">Amenities</h2>

          <Amenities amenities={property.amenities} />
        </div>

        <Separator />

        {/* Description */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Description</h2>
          <PropertyDescription description={property.description} />
        </div>

        <Separator />

        {/* ============= Static Reviews ================= */}
        <div>
          <h2 className="text-2xl font-semibold mb-5">Reviews</h2>
          {property.review.length > 0 ? (
            <PropertyReview reviews={property.review} />
          ) : (
            <p>No reviews found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SinglePropertyDetails;
