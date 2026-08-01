import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

export default function SinglePropertyLoading() {
  return (
    <div className="w-11/12 mx-auto mt-36 mb-24">
      {/* ========================= */}
      {/* TOP SECTION */}
      {/* ========================= */}

      <div className="grid gap-8 mb-10 lg:grid-cols-3">
        {/* Gallery */}
        <div className="lg:col-span-2">
          <Skeleton className="h-[500px] w-full rounded-xl" />

          <div className="mt-4 grid grid-cols-4 gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-24 rounded-lg" />
            ))}
          </div>
        </div>

        {/* Landlord Card */}
        <div className="rounded-xl border p-6">
          <div className="flex flex-col items-center">
            <Skeleton className="h-24 w-24 rounded-full" />
            <Skeleton className="mt-4 h-6 w-40" />
            <Skeleton className="mt-2 h-4 w-28" />
          </div>

          <div className="mt-8 space-y-4">
            <Skeleton className="h-10 w-full rounded-lg" />
            <Skeleton className="h-10 w-full rounded-lg" />
            <Skeleton className="h-10 w-full rounded-lg" />
          </div>
        </div>
      </div>

      {/* ========================= */}
      {/* MAIN CONTENT */}
      {/* ========================= */}

      <div className="space-y-8">
        {/* Heading */}
        <div className="space-y-4">
          <Skeleton className="h-10 w-2/3" />
          <Skeleton className="h-5 w-56" />
          <Skeleton className="h-5 w-80" />
          <Skeleton className="h-9 w-40" />
        </div>

        <Separator />

        {/* Property Info */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-5 w-20" />
              <Skeleton className="h-6 w-28" />
            </div>
          ))}
        </div>

        <Separator />

        {/* Amenities */}
        <div>
          <Skeleton className="mb-6 h-8 w-40" />

          <div className="flex flex-wrap gap-3">
            {Array.from({ length: 8 }).map((_, i) => (
              <Skeleton key={i} className="h-10 w-28 rounded-full" />
            ))}
          </div>
        </div>

        <Separator />

        {/* Description */}
        <div>
          <Skeleton className="mb-6 h-8 w-40" />

          <div className="space-y-3">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-5/6" />
            <Skeleton className="h-5 w-4/6" />
          </div>
        </div>

        <Separator />

        {/* Reviews */}
        <div>
          <Skeleton className="mb-6 h-8 w-32" />

          <div className="space-y-5">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="rounded-xl border p-5">
                <div className="flex items-center gap-4">
                  <Skeleton className="h-12 w-12 rounded-full" />

                  <div className="space-y-2">
                    <Skeleton className="h-5 w-32" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-11/12" />
                  <Skeleton className="h-4 w-8/12" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
