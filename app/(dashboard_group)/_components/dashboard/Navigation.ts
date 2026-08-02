import {
  LayoutDashboard,
  House,
  FileText,
  PlusCircle,
  Users,
} from "lucide-react";
import { MdPayment } from "react-icons/md";

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
  {
    title: "Payment History",
    href: "/dashboard/tenant/payment-history",
    icon: MdPayment,
  },
];

export const adminLinks = [
  {
    title: "Dashboard",
    href: "/dashboard/admin",
    icon: LayoutDashboard,
  },
  {
    title: "All Users",
    href: "/dashboard/admin/users",
    icon: Users,
  },
  {
    title: "All Rental Requests",
    href: "/dashboard/admin/requests",
    icon: FileText,
  },
];
