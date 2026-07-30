"use client";

import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

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

              <form className="space-y-6">
                {/* Email */}

                <div className="space-y-2">
                  <Label>Email</Label>

                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="h-12"
                  />
                </div>

                {/* Password */}

                <div className="space-y-2">
                  <Label>Password</Label>

                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter password"
                      className="h-12 pr-12"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                {/* Register Button */}

                <Button className="h-12 w-full text-base">Sign in</Button>

                <p className="text-center text-sm text-muted-foreground">
                  Not a member?{" "}
                  <Link
                    href="/register"
                    className="font-semibold text-primary hover:underline"
                  >
                    Register here
                  </Link>
                </p>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
