import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Bath, BedDouble, MapPin, Ruler } from "lucide-react";

import { Button } from "@/components/ui/button";
import banner1 from "../../../../public/banner1.jpg";

interface PropertyCardProps {
  id: string;
  title: string;
  image: string;
  location: string;
  price: number;
  type: "rent" | "sale";
  bedrooms: number;
  bathrooms: number;
  area: number;
}

const PropertyCardForHome = ({
  id,
  title,
  image,
  location,
  price,
  type,
  bedrooms,
  bathrooms,
  area,
}: PropertyCardProps) => {
  return (
    <div className="group overflow-hidden rounded-3xl border bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative overflow-hidden rounded-2xl">
        <Image
          src={banner1}
          alt={title}
          width={600}
          height={400}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="mt-5 space-y-4">
        <div>
          <h3 className="line-clamp-1 text-2xl font-semibold">{title}</h3>

          <div className="mt-2 flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <p className="line-clamp-1 text-sm">{location}</p>
          </div>
        </div>

        {/* Features */}
        <div className="flex items-center justify-between border-b border-dashed pb-5 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Ruler className="h-4 w-4" />
            <span className="text-sm">{area} sqft</span>
          </div>

          <div className="flex items-center gap-2">
            <BedDouble className="h-4 w-4" />
            <span className="text-sm">{bedrooms} Bed</span>
          </div>

          <div className="flex items-center gap-2">
            <Bath className="h-4 w-4" />
            <span className="text-sm">{bathrooms} Bath</span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-3xl font-bold">
              ${price.toLocaleString()}
              {type === "rent" && (
                <span className="text-lg font-medium text-muted-foreground">
                  /month
                </span>
              )}
            </h3>
          </div>

          <Button size="icon" className="h-12 w-12 rounded-full">
            <Link href={`/properties/${id}`}>
              <ArrowUpRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCardForHome;
