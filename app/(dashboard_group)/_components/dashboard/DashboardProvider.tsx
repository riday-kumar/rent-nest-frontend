import { getMe } from "@/service/getMe";
import DashboardLayout from "./DashboardLayout";

export default async function DashboardProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getMe();

  return <DashboardLayout user={user}>{children}</DashboardLayout>;
}
