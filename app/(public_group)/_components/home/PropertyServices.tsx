import { Building2, House, Warehouse } from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Houses",
    icon: <House className="h-11 w-11 text-white" />,
    description:
      "Browse beautiful family homes in trusted neighborhoods with verified listings and competitive pricing.",
  },
  {
    title: "Apartments",
    icon: <Building2 className="h-11 w-11 text-white" />,
    description:
      "Discover modern apartments for rent or sale with premium amenities and excellent locations.",
  },
  {
    title: "Commercial",
    icon: <Warehouse className="h-11 w-11 text-white" />,
    description:
      "Find office spaces, shops, and commercial properties to grow your business with confidence.",
  },
];

export default function PropertyServices() {
  return (
    <section
      className="bg-cover bg-center py-24"
      style={{
        backgroundImage: "url('/service-bg.jpg')",
      }}
    >
      <div className="w-11/12 mx-auto px-5">
        {/* Heading */}

        <div className="mb-20 flex items-center gap-5">
          <div className="h-20 w-3 rounded-full bg-primary" />

          <div>
            <p className="text-lg font-medium uppercase tracking-widest">
              Property
            </p>

            <h2 className="text-5xl font-bold text-primary">Services</h2>
          </div>
        </div>

        {/* Cards */}

        <div className="grid gap-10 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
