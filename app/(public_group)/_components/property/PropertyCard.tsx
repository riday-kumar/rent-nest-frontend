import React from "react";
import banner1 from "../../../../public/banner1.jpg";
import Image from "next/image";
import Link from "next/link";
import { BedDouble, Bath, Square, Car, MapPin } from "lucide-react";

type PropertyCardProps = {
  id: string;
  title: string;
  location: string;
  image: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  garages: number;
  landlord: string;
  createdAt: string;
};

const PropertyCard = ({ property }: { property: PropertyCardProps }) => {
  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-lg">
      <div className="p-4 grid md:grid-cols-12">
        {/* Image */}
        <div className="relative md:col-span-4 h-72 ">
          <Image
            src={banner1}
            alt={property.title}
            fill
            className="object-cover rounded-xl"
          />

          <div className="absolute bottom-4 left-4 rounded-lg bg-black/70 px-4 py-2 text-xl font-semibold text-white">
            ${property.price.toLocaleString()}
            <span className="text-base font-normal">/month</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between px-6 md:col-span-8">
          <div>
            <h2 className="text-2xl font-semibold">{property.title}</h2>

            <div className="mt-2 flex items-center gap-2 text-muted-foreground">
              <MapPin size={16} />
              <span>{property.location}</span>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-y-6 text-muted-foreground">
              <div className="flex items-center gap-3">
                <BedDouble size={20} />
                <span>{property.bedrooms} Bedrooms</span>
              </div>

              <div className="flex items-center gap-3">
                <Bath size={20} />
                <span>{property.bathrooms} Bathrooms</span>
              </div>

              <div className="flex items-center gap-3">
                <Square size={20} />
                <span>{property.area} sq ft</span>
              </div>

              <div className="flex items-center gap-3">
                <Car size={20} />
                <span>{property.garages} Garages</span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t pt-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-2xl">
                👤
              </div>

              <div>
                <p className="font-medium">{property.landlord}</p>
                <p className="text-sm text-muted-foreground">
                  {property.createdAt}
                </p>
              </div>
            </div>

            <Link
              href={`/properties/${property.id}`}
              className="rounded-lg bg-primary px-5 py-2.5 text-center font-medium text-primary-foreground transition hover:opacity-90"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
