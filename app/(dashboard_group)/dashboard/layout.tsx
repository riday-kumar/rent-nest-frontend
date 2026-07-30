import DashboardLayout from "../_components/dashboard/DashboardLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  const role = "LANDLORD";

  return <DashboardLayout role={role}>{children}</DashboardLayout>;
}
