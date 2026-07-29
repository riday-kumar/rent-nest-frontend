import React from "react";
import { Home, Handshake, Wallet, MapPinned, LucideIcon } from "lucide-react";

// Accent color used for icons — swap this or wire it to your Tailwind theme
const ACCENT = "#F0405A";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FEATURES: Feature[] = [
  {
    icon: Home,
    title: "Wide Range Of Properties",
    description:
      "Explore apartments, villas, houses, and commercial spaces tailored to every lifestyle and budget.",
  },
  {
    icon: Handshake,
    title: "Trusted by thousands",
    description:
      "Join thousands of satisfied buyers, renters, and property owners who trust RentNest every day.",
  },
  {
    icon: Wallet,
    title: "Financing made easy",
    description:
      "Discover flexible financing options and expert guidance to make your property journey stress-free.",
  },
  {
    icon: MapPinned,
    title: "We are here near you",
    description:
      "Find verified properties in your preferred location with local support whenever you need it.",
  },
];

function FeatureCard({ icon: Icon, title, description }: Feature) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-8 text-center transition-shadow hover:shadow-md">
      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center">
        <Icon
          className="h-14 w-14"
          strokeWidth={1.5}
          style={{ color: ACCENT }}
        />
      </div>
      <h3 className="mb-3 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="text-sm leading-relaxed text-slate-500">{description}</p>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="container mx-auto w-full bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-semibold text-slate-800 sm:text-4xl">
            Why You Should Work With Us
          </h2>
          <p className="mt-3 text-slate-500">
            We provide full service at every step.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
