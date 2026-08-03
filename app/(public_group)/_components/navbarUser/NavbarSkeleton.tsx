import { Skeleton } from "@/components/ui/skeleton";

export default function NavbarSkeleton() {
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-20 w-11/12 items-center justify-between">
        {/* Logo */}
        <Skeleton className="h-10 w-36 rounded-md" />

        {/* Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton key={index} className="h-5 w-16 rounded-md" />
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <Skeleton className="hidden h-10 w-24 rounded-md md:block" />

          <Skeleton className="h-10 w-10 rounded-full" />
        </div>
      </div>
    </header>
  );
}
