import { LayoutDashboard, House, FileText, PlusCircle } from "lucide-react";

export const landlordLinks = [
  {
    title: "Dashboard",
    href: "/dashboard/landlord",
    icon: LayoutDashboard,
  },
  {
    title: "My Properties",
    href: "/dashboard/landlord/properties",
    icon: House,
  },
  {
    title: "Add Property",
    href: "/dashboard/landlord/properties/new",
    icon: PlusCircle,
  },
  {
    title: "Rent Requests",
    href: "/dashboard/landlord/request",
    icon: FileText,
  },
];

export const tenantLinks = [
  {
    title: "Dashboard",
    href: "/dashboard/tenant",
    icon: LayoutDashboard,
  },
];
