"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "John Smith",
    location: "Dhaka",
    rating: 5,
    review:
      "RentNest made finding my apartment incredibly simple. The platform is easy to use and the landlords were very responsive.",
  },
  {
    name: "Sarah Ahmed",
    location: "Chattogram",
    rating: 5,
    review:
      "I found my dream home within a few days. Highly recommended for anyone looking for verified properties.",
  },
  {
    name: "Michael Lee",
    location: "Sylhet",
    rating: 4,
    review:
      "The search filters are excellent and the whole rental process felt smooth and secure.",
  },
  {
    name: "Emily Davis",
    location: "Khulna",
    rating: 5,
    review:
      "Beautiful listings, genuine landlords, and an amazing overall experience.",
  },
];

export default function TestimonialSection() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="container mx-auto px-5">
        <div className="mb-16 text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-primary">
            Testimonials
          </p>

          <h2 className="mt-4 text-5xl font-bold">What Our Clients Say</h2>

          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Hear from people who found their perfect property through RentNest.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3500,
            }),
          ]}
        >
          <CarouselContent>
            {testimonials.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <TestimonialCard {...item} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mt-12 flex justify-center gap-4">
            <CarouselPrevious className="static translate-y-0" />

            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
