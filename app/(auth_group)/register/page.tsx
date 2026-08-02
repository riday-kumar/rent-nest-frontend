import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

import RegisterForm from "../_components/RegisterForm";

export default function RegisterPage() {
  return (
    <section className="min-h-screen">
      <div className="w-11/12 mx-auto mt-36 mb-24 flex min-h-screen items-center justify-center px-5 my-20">
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
                  Find Your
                  <br />
                  Dream Home
                </h2>

                <p className="mt-5 max-w-md text-lg text-gray-200">
                  Join RentNest today and discover verified properties with a
                  simple, secure, and hassle-free experience.
                </p>
              </div>
            </div>

            {/* Right Form */}

            <div className="p-8 md:p-12 lg:p-16">
              <div className="mb-10">
                <h1 className="mt-8 text-4xl font-bold">Create Account</h1>

                <p className="mt-2 text-muted-foreground">
                  Register to start exploring properties.
                </p>
              </div>

              <RegisterForm />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
