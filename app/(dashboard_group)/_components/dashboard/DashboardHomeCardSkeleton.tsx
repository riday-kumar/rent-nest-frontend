import { Skeleton } from "@/components/ui/skeleton";

const DashboardCardSkeleton = () => {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        {/* Title & Value */}
        <div className="space-y-3">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-8 w-20" />
        </div>

        {/* Icon */}
        <Skeleton className="h-14 w-14 rounded-xl" />
      </div>
    </div>
  );
};

const DashboardHomeCardSkeleton = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: 3 }).map((_, index) => (
        <DashboardCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default DashboardHomeCardSkeleton;
