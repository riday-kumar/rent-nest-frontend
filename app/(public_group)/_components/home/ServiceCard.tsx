import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function ServiceCard({
  title,
  description,
  icon,
}: ServiceCardProps) {
  return (
    <div className="group relative mt-12 overflow-visible rounded-sm bg-slate-900 px-8 pb-8 pt-16 text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Floating Icon */}
      <div className="absolute -top-12 left-1/2 flex h-24 w-24 -translate-x-1/2 items-center justify-center rounded-full bg-primary shadow-xl">
        {icon}
      </div>

      <h3 className="text-3xl font-semibold">{title}</h3>

      <p className="mt-5 leading-8 text-gray-300">{description}</p>

      <Link
        href="#"
        className="mt-8 secondary-text-color inline-flex items-center gap-2 font-medium transition hover:primary"
      >
        Read More
        <ArrowRight className="h-5 w-5" />
      </Link>
    </div>
  );
}
