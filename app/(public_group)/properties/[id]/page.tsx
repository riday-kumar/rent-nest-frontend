"use client";

import { Separator } from "@/components/ui/separator";

import LandlordCard from "../../_components/propertyDetails/LandlordCard";
import PropertyInfo from "../../_components/propertyDetails/PropertyInfo";
import PropertyDescription from "../../_components/propertyDetails/PropertyDescription";
import PropertyGallery from "../../_components/propertyDetails/PropertyGallery";
import PropertyHeading from "../../_components/propertyDetails/PropertyHeading";
import PropertyReview from "../../_components/propertyDetails/PropertyReview";
import Amenities from "../../_components/propertyDetails/Amenities";

const property = {
  title: "Hridoy new Apartment",
  description:
    "A spacious and well-ventilated apartment located in a peaceful neighborhood. Close to schools, hospitals, shopping malls, and public transportation. Ideal for families looking for a comfortable lifestyle.",

  rentAmount: 20000,

  address: "Tanbazar",
  city: "Narayanganj",
  district: "Narayanganj",
  division: "Dhaka",

  size: 1450,
  floorType: "5th Floor",

  bedRoom: 3,
  bathroom: 2,
  balconies: 2,

  livingRoom: true,
  drawingRoom: true,
  dinningRoom: true,

  kitchen: 1,

  servantRoom: false,

  parking: true,
  lift: true,

  serviceCharge: 3000,

  images: [
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",
    "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200",
    "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1200",
  ],

  amenities: ["WiFi", "Generator", "Security", "Gas", "CCTV"],

  categoryName: "Flat",
};

export default function PropertyDetails() {
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
        <LandlordCard />
      </div>

      {/* ========================= */}
      {/* MAIN CONTENT */}
      {/* ========================= */}

      <div className="space-y-8">
        {/* ================== Header ======= */}

        <PropertyHeading
          title={property.title}
          categoryName={property.categoryName}
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
          <PropertyReview />
        </div>
      </div>
    </div>
  );
}
