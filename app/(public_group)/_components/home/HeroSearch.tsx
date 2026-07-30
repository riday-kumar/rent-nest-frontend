"use client";

import { useState } from "react";
import { Search, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function HeroSearch() {
  const router = useRouter();

  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [sort, setSort] = useState("");

  const handleSearch = () => {};

  return (
    <div className="w-11/12 mx-auto mb-40 md:mt-10 rounded-2xl bg-white p-4 shadow-2xl">
      <div className=" grid justify-center items-center grid-cols-1 gap-3 md:grid-cols-12">
        {/* Location */}
        <div className="relative md:col-span-3">
          <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />

          <Input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Search by location..."
            className="h-12 border-gray-200 pl-10 text-black placeholder:text-gray-500"
          />
        </div>

        {/* Category */}
        <div className="md:col-span-3">
          <Select onValueChange={setCategory}>
            <SelectTrigger className="h-12 w-full text-black">
              <SelectValue placeholder="Category" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="villa">Villa</SelectItem>
              <SelectItem value="office">Office</SelectItem>
              <SelectItem value="commercial">Commercial</SelectItem>
              <SelectItem value="plaza">Plaza</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Price */}
        <div className="md:col-span-3 ">
          <Select onValueChange={setPrice}>
            <SelectTrigger className=" w-full text-black">
              <SelectValue placeholder="Price Range" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="0-100">$0 - $100</SelectItem>
              <SelectItem value="100-300">$100 - $300</SelectItem>
              <SelectItem value="300-500">$300 - $500</SelectItem>
              <SelectItem value="500-1000">$500 - $1000</SelectItem>
              <SelectItem value="1000+">$1000+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Search Button */}
        <div className="md:col-span-3">
          <Button
            onClick={handleSearch}
            className="h-12 w-full text-base font-medium"
          >
            <Search className="mr-2 h-5 w-5" />
            Search Properties
          </Button>
        </div>
      </div>
    </div>
  );
}
