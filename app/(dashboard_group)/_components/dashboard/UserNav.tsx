"use client";

import { LogOut, User as UserIcon } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User } from "@/lib/types";
import { logOut } from "@/service/logOut";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function UserNav({ user }: { user: User }) {
  const router = useRouter();
  const handleLogOut = async (action: string) => {
    if (action === "logout") {
      await logOut();
      toast.success("user logged out successfully");
      router.push("/");
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <button className="outline-none">
            <Avatar className="cursor-pointer">
              <AvatarFallback>
                {user.data.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </button>
        }
      ></DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        <div className="p-3">
          <h4 className="font-semibold">{user.data.name}</h4>

          <p className="text-sm text-muted-foreground">{user.data.email}</p>
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={() => handleLogOut("logout")}
          className="text-red-500"
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
