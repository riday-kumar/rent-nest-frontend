"use client";

import { Bell, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import UserNav from "./UserNav";
import { User } from "@/lib/types";

// interface DashboardHeaderProps {
//   onMenuClick?: () => void;
// }

type DashboardHeaderProps = {
  user: User;
  onMenuClick: () => void;
};

export default function DashboardHeader({
  user,
  onMenuClick,
}: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background px-6">
      {/* Left */}

      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={onMenuClick}
        >
          <Menu className="h-5 w-5" />
        </Button>

        <div>
          <h2 className="text-xl font-semibold">Dashboard</h2>

          <p className="text-sm text-muted-foreground">Welcome back 👋</p>
        </div>
      </div>

      {/* Right */}

      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>

        <UserNav user={user} />
      </div>
    </header>
  );
}
