import {
  Building2,
  ShieldCheck,
  Users,
  Home,
  BadgeCheck,
  HeartHandshake,
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const stats = [
    {
      number: "5K+",
      label: "Properties Listed",
    },
    {
      number: "2K+",
      label: "Happy Tenants",
    },
    {
      number: "500+",
      label: "Trusted Landlords",
    },
    {
      number: "99%",
      label: "Customer Satisfaction",
    },
  ];

  const features = [
    {
      icon: Home,
      title: "Verified Properties",
      description:
        "Browse carefully verified rental properties with complete information.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Platform",
      description:
        "Your personal information and transactions are protected with modern security.",
    },
    {
      icon: Users,
      title: "Trusted Community",
      description:
        "Connecting landlords and tenants through a reliable rental experience.",
    },
    {
      icon: Building2,
      title: "Easy Property Management",
      description:
        "Landlords can manage listings, requests, and tenants effortlessly.",
    },
  ];

  const values = [
    {
      icon: BadgeCheck,
      title: "Trust",
      description: "We believe transparency builds long-lasting relationships.",
    },
    {
      icon: HeartHandshake,
      title: "Commitment",
      description: "Our mission is to simplify renting for everyone.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}

      <section className="relative overflow-hidden bg-[url('/banner1.jpg')] bg-blend-overlay bg-cover bg-center py-28 ">
        <div className="absolute inset-0 bg-black/20" />

        <div className="container relative mx-auto px-4 text-center text-white">
          <span className="text-white rounded-full bg-white/30 px-5 py-2 text-sm backdrop-blur">
            Welcome to RentNest
          </span>

          <h1 className="mt-6 text-5xl font-extrabold md:text-6xl ">
            Find Your Perfect Place
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-blue-100">
            RentNest is designed to make property renting simple, secure, and
            stress-free for both landlords and tenants.
          </p>
        </div>
      </section>

      {/* Story */}

      <section className="w-11/12 mx-auto px-4 py-24">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="font-semibold text-blue-600">OUR STORY</span>

            <h2 className="mt-3 text-4xl font-bold">
              Making Renting Easier for Everyone
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Finding the right rental home shouldn't be difficult. RentNest
              connects landlords and tenants through a modern, transparent, and
              user-friendly platform.
            </p>

            <p className="mt-5 text-gray-600 leading-8">
              Whether you are searching for your next apartment or listing your
              property, RentNest provides the tools you need to make smarter
              rental decisions.
            </p>
          </div>

          <div className="rounded-3xl bg-linear-to-r from-blue-500 to-orange-500 p-10 text-white shadow-2xl">
            <h3 className="text-3xl font-bold">Our Mission</h3>

            <p className="mt-6 text-white leading-8">
              To create a trusted rental marketplace where people can discover
              quality homes and landlords can manage properties with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}

      <section className="bg-gray-50 py-24">
        <div className="w-11/12 mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold">Why Choose RentNest?</h2>

            <p className="mt-4 text-gray-600">
              Everything you need for a seamless rental experience.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>

                  <p className="mt-3 text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}

      <section className="w-11/12 mx-auto px-4 py-24">
        <div className="grid gap-8 rounded-3xl bg-linear-to-r from-orange-500 to-indigo-700 p-12 text-center text-white md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <h2 className="text-5xl font-bold">{stat.number}</h2>

              <p className="mt-3 text-blue-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}

      <section className="bg-gray-50 py-24">
        <div className="w-11/12 mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold">Our Core Values</h2>

            <p className="mt-4 text-gray-600">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-2xl border bg-white p-8 shadow-sm"
                >
                  <Icon className="mb-5 h-12 w-12 text-blue-600" />

                  <h3 className="text-2xl font-bold">{value.title}</h3>

                  <p className="mt-4 text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="py-24">
        <div className="w-11/12 mx-auto px-4">
          <div className="rounded-3xl bg-linear-to-r from-indigo-600 to-orange-500 px-8 py-20 text-center text-white shadow-xl">
            <h2 className="text-4xl font-bold">
              Ready to Find Your Next Home?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
              Join thousands of landlords and tenants who trust RentNest for
              their rental journey.
            </p>

            <button className="mt-10 rounded-xl bg-white px-8 py-3 font-semibold text-blue-600 transition hover:scale-105">
              <Link prefetch={false} href="/properties">
                Explore Properties
              </Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
