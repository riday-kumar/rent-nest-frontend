import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

const PropertiesPage = () => {
  return (
    <div className="container mx-auto w-full mt-36 mb-24 border-2 border-red-600">
      <div className="">
        <div className="grid grid-cols-6">
          <Input placeholder="Search Property" />
          <Select>
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
          <Select>
            <SelectTrigger className="h-12 w-full text-black">
              <SelectValue placeholder="Location" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="dhaka">Dhaka</SelectItem>
              <SelectItem value="narayanganj">Narayanganj</SelectItem>
              <SelectItem value="rajshahi">Rajshahi</SelectItem>
            </SelectContent>
          </Select>
          <Button>Advanced Search</Button>
          <Button>Search</Button>
        </div>
      </div>
    </div>
  );
};

export default PropertiesPage;
