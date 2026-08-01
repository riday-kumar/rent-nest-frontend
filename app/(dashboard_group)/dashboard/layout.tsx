import { Suspense } from "react";
import DashboardProvider from "../_components/dashboard/DashboardProvider";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DashboardProvider>{children}</DashboardProvider>
    </Suspense>
  );
}
