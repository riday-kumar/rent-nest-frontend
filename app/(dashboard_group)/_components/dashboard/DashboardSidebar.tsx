"use client";

import Link from "next/link";
import { Home } from "lucide-react";

import { Separator } from "@/components/ui/separator";

import SidebarItem from "./SidebarItem";
import { adminLinks, landlordLinks, tenantLinks } from "./Navigation";

type Role = "LANDLORD" | "TENANT" | "ADMIN";

interface DashboardSidebarProps {
  role: Role;
  mobile?: boolean;
}

export default function DashboardSidebar({
  role,
  mobile = false,
}: DashboardSidebarProps) {
  const roleLinks = {
    LANDLORD: landlordLinks,
    TENANT: tenantLinks,
    ADMIN: adminLinks,
  };

  const links = roleLinks[role] ?? [];

  return (
    <div
      className={
        mobile
          ? "flex h-full flex-col bg-background"
          : "hidden w-72 shrink-0 border-r bg-background lg:flex lg:flex-col"
      }
    >
      {/* Logo */}

      <div className="border-b p-6">
        <Link href="/" className="flex items-center gap-2">
          <Home className="h-7 w-7 text-primary" />

          <div>
            <h2 className="text-xl font-bold">RentNest</h2>

            <p className="text-xs text-muted-foreground">Dashboard</p>
          </div>
        </Link>
      </div>

      {/* Navigation */}

      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {links.map((item) => (
          <SidebarItem key={item.href} title={item.title} href={item.href} />
        ))}
      </div>

      <Separator />
    </div>
  );
}
