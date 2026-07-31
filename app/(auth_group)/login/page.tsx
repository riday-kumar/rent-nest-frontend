import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

import LoginForm from "../_components/LoginForm";

export default function LoginPage() {
  return (
    <section className="min-h-screen">
      <div className="w-11/12 mx-auto mt-20 mb-24 flex min-h-screen items-center justify-center px-5">
        <Card className="py-0 w-full max-w-6xl overflow-hidden rounded-3xl border-0 shadow-2xl">
          <CardContent className="grid p-0 lg:grid-cols-2">
            {/* Left Image */}

            <div className="relative hidden lg:block">
              <Image
                src="/auth.webp"
                alt="Register"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/35" />

              <div className="absolute bottom-10 left-10 text-white">
                <h2 className="text-5xl font-bold leading-tight">
                  Welcome to
                  <br />
                  RentNest
                </h2>

                <p className="mt-5 max-w-md text-lg text-gray-200">
                  Discover verified properties for rent.RentNest helps you find
                  your perfect home with a secure and hassle-free experience.
                </p>
              </div>
            </div>

            {/* Right Form */}

            <div className="p-8 md:p-12 lg:p-16">
              <div className="mb-10">
                <h1 className="mt-8 text-4xl font-bold">
                  Sign into your account
                </h1>
              </div>

              <LoginForm />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
