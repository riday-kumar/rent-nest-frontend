import Image from "next/image";
import { Home, MessageSquareText, KeyRound } from "lucide-react";

const steps = [
  {
    icon: Home,
    title: "Find Properties",
    description:
      "Browse verified apartments, villas, houses, and commercial properties that match your needs and budget.",
  },
  {
    icon: MessageSquareText,
    title: "Request to Landlords",
    description:
      "Send rental requests directly to property owners and communicate with them securely.",
  },
  {
    icon: KeyRound,
    title: "Take the Keys",
    description:
      "Once your request is approved, pay the first month rent and move into your new home with confidence.",
  },
];

export default function HowItWorks() {
  return (
    <section className="pt-5 pb-24">
      <div className="w-11/12 mx-auto grid items-center gap-16 px-5 lg:grid-cols-2">
        {/* Left Image */}

        <div className="relative">
          <Image
            src="/img2.webp"
            alt="How RentNest Works"
            width={700}
            height={750}
            className="mask-radial-at-bottom-left h-162.5 w-full rounded-3xl object-fit "
          />

          {/* Floating Card */}

          <div className="absolute bottom-8 left-8 rounded-2xl bg-white px-6 py-5 shadow-xl">
            <p className="text-sm text-muted-foreground">
              Available Properties
            </p>

            <h3 className="mt-1 text-3xl font-bold text-primary">14K+</h3>
          </div>
        </div>

        {/* Right Content */}

        <div>
          <p className="font-semibold uppercase tracking-[0.3em] text-primary">
            HOW IT WORKS
          </p>

          <h2 className="mt-4 text-5xl font-bold leading-tight">
            Find Your Perfect Place
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            RentNest makes finding your dream property simple. Search verified
            listings, connect directly with landlords, and complete your rental
            journey in just a few easy steps.
          </p>

          <div className="mt-12 space-y-10">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={index} className="flex items-start gap-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold">{step.title}</h3>

                    <p className="mt-2 leading-7 text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
