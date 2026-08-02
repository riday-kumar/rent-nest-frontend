import React from "react";
import PropertyCard from "./PropertyCard";
import { allPublicProperties } from "../../_actions/property";
import { PropertyCardProps } from "@/lib/types";

// export const properties = [
//   {
//     id: "1",
//     title: "Modern Luxury Villa",
//     location: "Banani, Dhaka",
//     image:
//       "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80",
//     price: 9000,
//     bedrooms: 5,
//     bathrooms: 4,
//     area: 3200,
//     garages: 2,
//     landlord: "Sarah Johnson",
//     createdAt: "2 days ago",
//   },
//   {
//     id: "2",
//     title: "Cozy Family Apartment",
//     location: "Dhanmondi, Dhaka",
//     image:
//       "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80",
//     price: 4500,
//     bedrooms: 3,
//     bathrooms: 2,
//     area: 1450,
//     garages: 1,
//     landlord: "Michael Brown",
//     createdAt: "1 week ago",
//   },
//   {
//     id: "3",
//     title: "Premium Lake View Condo",
//     location: "Gulshan, Dhaka",
//     image:
//       "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
//     price: 7200,
//     bedrooms: 4,
//     bathrooms: 3,
//     area: 2200,
//     garages: 2,
//     landlord: "Emily Davis",
//     createdAt: "3 weeks ago",
//   },
// ];

const PropertySection = async ({ query }: { query: string }) => {
  // api called here
  const data = await allPublicProperties(query);
  const properties = data.data;
  // console.log("properties", properties.data);

  if (!data.success) {
    return <p>No properties found</p>;
  }

  return (
    <div className="space-y-6 mt-20">
      {properties.data.map((property: PropertyCardProps) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default PropertySection;
