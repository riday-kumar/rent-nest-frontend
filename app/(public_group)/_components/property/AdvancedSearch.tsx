"use client";

import { SlidersHorizontal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Button } from "@/components/ui/button";
import BedroomSelect from "../filters/BedroomSelect";
import BathroomSelect from "../filters/BathroomSelect";
import PriceRange from "../filters/PriceRange";
import AreaRange from "../filters/AreaRange";

const amenities = [
  "WiFi",
  "Gym",
  "Swimming Pool",
  "Laundry",
  "Parking",
  "Lift",
  "Balcony",
  "Air Conditioning",
];

export default function AdvancedSearch() {
  return (
    <Popover>
      <PopoverTrigger
        render={
          <Button variant="outline">
            Advanced Search
            <SlidersHorizontal size={18} />
          </Button>
        }
      ></PopoverTrigger>

      <PopoverContent className="w-212.5 p-6" align="end">
        <div className="space-y-8">
          {/* Top Row */}

          <div className="grid grid-cols-3 gap-5">
            <BedroomSelect />

            <BathroomSelect />
          </div>

          {/* Sliders */}

          <div className="grid grid-cols-2 gap-10">
            <div>
              <p className="mb-4 font-medium">Area Size</p>

              {/* Slider */}
              <AreaRange></AreaRange>
            </div>

            <div>
              <p className="mb-4 font-medium">Price Range</p>

              <PriceRange />
            </div>
          </div>

          {/* Amenities */}

          <div>
            <h4 className="font-semibold mb-4">Amenities</h4>

            <div className="grid grid-cols-3 gap-y-3">
              {amenities.map((item) => (
                <label key={item} className="flex items-center gap-2">
                  <Checkbox />

                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>

          {/* <div className="flex justify-end">
            <Button>Apply Filters</Button>
          </div> */}
        </div>
      </PopoverContent>
    </Popover>
  );
}
