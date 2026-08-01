"use client";

import { Sheet, SheetContent } from "@/components/ui/sheet";

import DashboardSidebar from "./DashboardSidebar";

type Role = "LANDLORD" | "TENANT" | "ADMIN";

interface MobileSidebarProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  role: Role;
}

export default function MobileSidebar({
  open,
  onOpenChange,
  role,
}: MobileSidebarProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="w-72 p-0">
        <div className="flex h-full flex-col">
          <DashboardSidebar role={role} mobile />
        </div>
      </SheetContent>
    </Sheet>
  );
}
