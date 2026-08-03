import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardLayoutSkeleton() {
  return (
    <div className="flex min-h-screen bg-muted/30">
      {/* Desktop Sidebar */}
      <aside className="hidden w-72 shrink-0 border-r bg-background lg:flex lg:flex-col">
        {/* Logo */}
        <div className="border-b p-6">
          <Skeleton className="h-8 w-36" />
        </div>

        {/* Navigation */}
        <div className="space-y-3 p-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} className="h-11 w-full rounded-lg" />
          ))}
        </div>
      </aside>

      {/* Right Side */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <header className="flex h-20 items-center justify-between border-b bg-background px-6">
          <div className="flex items-center gap-4">
            {/* Mobile Menu */}
            <Skeleton className="h-10 w-10 rounded-md lg:hidden" />

            {/* Page Title */}
            <Skeleton className="h-7 w-40" />
          </div>

          {/* User */}
          <div className="flex items-center gap-3">
            <div className="hidden space-y-2 md:block">
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-3 w-20" />
            </div>

            <Skeleton className="h-10 w-10 rounded-full" />
          </div>
        </header>

        {/* Empty Content Area */}
        <main className="flex-1 bg-muted/30" />
      </div>
    </div>
  );
}
