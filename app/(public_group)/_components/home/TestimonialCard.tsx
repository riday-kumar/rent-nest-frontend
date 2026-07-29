import { Quote, Star } from "lucide-react";

interface TestimonialCardProps {
  review: string;
  name: string;
  location: string;
  rating: number;
}

export default function TestimonialCard({
  review,
  name,
  location,
  rating,
}: TestimonialCardProps) {
  return (
    <div className="relative h-full rounded-xl border bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl">
      {/* Quote */}

      <Quote className="absolute right-8 top-8 h-12 w-12 text-primary/15" />

      {/* Rating */}

      <div className="mb-5 flex gap-1">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Review */}

      <p className="leading-8 text-muted-foreground">{review}</p>

      {/* Divider */}

      <div className="my-8 border-t border-dashed" />

      {/* User */}

      <div>
        <h3 className="text-xl font-semibold">{name}</h3>

        <p className="text-muted-foreground">{location}</p>
      </div>
    </div>
  );
}
