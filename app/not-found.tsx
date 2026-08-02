import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-linear-to-br from-slate-50 via-white to-blue-50 px-6">
      <div className="max-w-2xl text-center">
        {/* 404 */}
        <h1 className="text-8xl md:text-9xl font-extrabold tracking-tight text-primary">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-6 text-3xl font-bold text-gray-900">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-600 leading-7">
          The page you are looking for does not exist, may have been moved, or
          the URL might be incorrect.
        </p>

        {/* Illustration */}
        <div className="my-10 flex justify-center">
          <div className="relative">
            <div className="flex h-56 w-56 items-center justify-center rounded-full bg-primary/10">
              <Search className="h-24 w-24 text-primary" />
            </div>

            <div className="absolute -right-2 -top-2 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white shadow-lg">
              ?
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button size="lg">
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </Button>

          <Button variant="outline" size="lg">
            <Link href="/properties">Browse Properties</Link>
          </Button>
        </div>

        {/* Bottom Text */}
        <p className="mt-10 text-sm text-muted-foreground">
          Lost? Start exploring available rental properties and find your
          perfect home.
        </p>
      </div>
    </main>
  );
}
