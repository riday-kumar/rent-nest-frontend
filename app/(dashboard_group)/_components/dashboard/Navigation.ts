import {
  LayoutDashboard,
  House,
  Heart,
  CircleDollarSign,
  FileText,
  User,
  PlusCircle,
  MessageSquare,
  Edit,
} from "lucide-react";

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
    title: "Update Property",
    href: "/dashboard/landlord/properties/update",
    icon: Edit,
  },
  {
    title: "Rent Requests",
    href: "/dashboard/landlord/request",
    icon: FileText,
  },
  {
    title: "Reviews",
    href: "/dashboard/landlord/reviews",
    icon: MessageSquare,
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: User,
  },
];

export const tenantLinks = [
  {
    title: "Dashboard",
    href: "/dashboard/tenant",
    icon: LayoutDashboard,
  },
  {
    title: "Browse Properties",
    href: "/properties",
    icon: House,
  },
  {
    title: "Wishlist",
    href: "/dashboard/tenant/wishlist",
    icon: Heart,
  },
  {
    title: "My Requests",
    href: "/dashboard/tenant/requests",
    icon: FileText,
  },
  {
    title: "Payments",
    href: "/dashboard/tenant/payments",
    icon: CircleDollarSign,
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: User,
  },
];
