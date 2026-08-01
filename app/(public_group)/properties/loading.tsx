import { Skeleton } from "@/components/ui/skeleton";

const PropertyCardSkeleton = () => {
  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
      <div className="grid p-4 md:grid-cols-12 gap-4">
        {/* Image */}
        <div className="relative h-72 rounded-xl md:col-span-4">
          <Skeleton className="h-full w-full rounded-xl" />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between md:col-span-8">
          <div>
            {/* Title */}
            <Skeleton className="h-8 w-2/3" />

            {/* Address */}
            <Skeleton className="mt-4 h-5 w-1/2" />

            {/* Features */}
            <div className="mt-8 grid grid-cols-2 gap-y-6">
              <div className="flex items-center gap-3">
                <Skeleton className="h-6 w-6 rounded-full" />
                <Skeleton className="h-5 w-28" />
              </div>

              <div className="flex items-center gap-3">
                <Skeleton className="h-6 w-6 rounded-full" />
                <Skeleton className="h-5 w-28" />
              </div>

              <div className="flex items-center gap-3">
                <Skeleton className="h-6 w-6 rounded-full" />
                <Skeleton className="h-5 w-28" />
              </div>

              <div className="flex items-center gap-3">
                <Skeleton className="h-6 w-6 rounded-full" />
                <Skeleton className="h-5 w-28" />
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 flex flex-col gap-4 border-t pt-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <Skeleton className="h-12 w-12 rounded-full" />

              <div className="space-y-2">
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-4 w-24" />
              </div>
            </div>

            <Skeleton className="h-11 w-36 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Loading() {
  return (
    <div className="w-10/12 mx-auto mt-36 mb-24 space-y-10">
      {/* Search + Filter */}
      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <div className="grid gap-4 md:grid-cols-5">
          <Skeleton className="h-11 md:col-span-2" />
          <Skeleton className="h-11" />
          <Skeleton className="h-11" />
          <Skeleton className="h-11" />
        </div>
      </div>

      {/* Property Cards */}
      <div className="space-y-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <PropertyCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}
