import { Suspense } from "react";
import DashboardProvider from "../_components/dashboard/DashboardProvider";
import DashboardLayoutSkeleton from "../_components/dashboard/DashboardLayoutSkeleton";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<DashboardLayoutSkeleton />}>
      <DashboardProvider>{children}</DashboardProvider>
    </Suspense>
  );
}
