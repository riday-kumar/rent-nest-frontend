"use client";

import { LogOut, Settings, User, LayoutDashboard } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function UserNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <button className="outline-none">
            <Avatar className="cursor-pointer">
              <AvatarFallback>H</AvatarFallback>
            </Avatar>
          </button>
        }
      ></DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        <div className="p-3">
          <h4 className="font-semibold">Hridoy</h4>

          <p className="text-sm text-muted-foreground">hridoy@email.com</p>
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <LayoutDashboard className="mr-2 h-4 w-4" />
          Dashboard
        </DropdownMenuItem>

        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          Profile
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="text-red-500">
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
