"use client";

import { useState } from "react";

import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";
import MobileSidebar from "./MobileSidebar";

type Role = "LANDLORD" | "TENANT";

interface DashboardLayoutProps {
  children: React.ReactNode;
  role: Role;
}

export default function DashboardLayout({
  children,
  role,
}: DashboardLayoutProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-muted/30">
      {/* Desktop Sidebar */}

      <DashboardSidebar role={role} />

      {/* Mobile Sidebar */}

      <MobileSidebar role={role} open={open} onOpenChange={setOpen} />

      {/* Content */}

      <div className="flex flex-1 flex-col">
        <DashboardHeader onMenuClick={() => setOpen(true)} />

        <main className="flex-1 overflow-auto p-6">
          <div className="mx-auto max-w-7xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
