import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import banner1 from "../../../../public/banner1.jpg";

const PropertyGallery = ({
  images,
  title,
}: {
  images: string[];
  title: string;
}) => {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="relative h-[500px] overflow-hidden rounded-xl">
              <Image src={banner1} alt={title} fill className="object-cover" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="left-5" />
      <CarouselNext className="right-5" />
    </Carousel>
  );
};

export default PropertyGallery;
