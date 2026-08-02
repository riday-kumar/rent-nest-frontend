/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import CategoryFilter from "../filters/CategoryFilter";
// import AmenitiesFilter from "../filters/AmenitiesFilter";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const AllFilteringComponent = ({ categories }: { categories: any }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  //   const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  const handleCategoryChange = (category: string, checked: boolean) => {
    const params = new URLSearchParams(searchParams);

    if (checked) {
      setSelectedCategories((prev) => [...prev, category]);
      params.set("type", category);
    } else {
      setSelectedCategories((prev) => prev.filter((item) => item !== category));
      params.delete("type", category);
    }

    replace(`${pathname}?${params.toString()}`);
  };

  //   const handleAmenityChange = (amenity: string, checked: boolean) => {
  //     if (checked) {
  //       setSelectedAmenities((prev) => [...prev, amenity]);
  //     } else {
  //       setSelectedAmenities((prev) => prev.filter((item) => item !== amenity));
  //     }
  //   };
  console.log("selected category", selectedCategories);
  //   console.log("selected category", selectedCategories);
  return (
    <div>
      {/* =================== category filter ============== */}
      <CategoryFilter
        categories={categories}
        selectedCategories={selectedCategories}
        onCategoryChange={handleCategoryChange}
      />

      {/* ===================== Amenities filter =============== */}
      {/* <AmenitiesFilter
        amenities={amenities}
        selectedAmenities={selectedAmenities}
        onAmenityChange={handleAmenityChange}
      /> */}
    </div>
  );
};

export default AllFilteringComponent;
