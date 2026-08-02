import { Skeleton } from "@/components/ui/skeleton";

const PropertyCardSkeleton = () => {
  return (
    <div className="overflow-hidden rounded-3xl border bg-white p-4 shadow-sm">
      {/* Image */}
      <Skeleton className="h-64 w-full rounded-2xl" />

      {/* Content */}
      <div className="mt-5 space-y-4">
        <div className="space-y-3">
          <Skeleton className="h-7 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>

        {/* Features */}
        <div className="flex justify-between border-b border-dashed pb-5">
          <Skeleton className="h-5 w-16" />
          <Skeleton className="h-5 w-16" />
          <Skeleton className="h-5 w-16" />
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <Skeleton className="h-8 w-28" />
            <Skeleton className="h-4 w-20" />
          </div>

          <Skeleton className="h-12 w-12 rounded-full" />
        </div>
      </div>
    </div>
  );
};

const PropertyListSkeleton = () => {
  return (
    <div className="bg-[#fef7f6] py-15">
      <div className="w-11/12 mx-auto max-lg:px-6">
        {/* Header */}
        <div className="mb-10 flex items-center justify-between">
          <div className="space-y-4">
            <Skeleton className="h-10 w-60" />
            <Skeleton className="h-5 w-80" />
          </div>

          <Skeleton className="h-11 w-28 rounded-md" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <PropertyCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyListSkeleton;
