"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { usePathname, useRouter } from "next/navigation";
import { logOut } from "@/service/logOut";
import { toast } from "sonner";

type IUser = {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    id: string;
    name: string;
    email: string;
    role: string;
    isActive: boolean;
  };
};

export function Navbar({ user }: { user: IUser }) {
  // console.log("user", user);
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogOut = async (action: string) => {
    if (action === "logout") {
      await logOut();
      toast.success("user logged out successfully");
      router.push("/");
    }
  };

  const handleRedirect = () => {
    if (user?.data.role === "ADMIN") {
      router.push("/dashboard/admin");
    } else if (user?.data.role === "LANDLORD") {
      router.push("/dashboard/landlord");
    } else {
      router.push("/dashboard/tenant");
    }
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/properties", label: "Properties" },
  ];

  const pathName = usePathname();
  const isHome = pathName === "/";
  const backgroundClass = isHome
    ? isScrolled
      ? "bg-white shadow-md ease-in-out duration-400"
      : "bg-transparent "
    : "bg-white shadow-md";

  const homePageTextScrollBlack = isHome && isScrolled;
  const homePageTextIsNotScrolled = isHome && !isScrolled;
  // console.log(homePageTextScrollBlack);

  return (
    <nav
      className={` fixed top-0 z-50 w-full px-4 transition-colors ${backgroundClass}`}
    >
      <div className="mx-auto flex h-16 items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className={`font-bold text-2xl ${isHome ? "text-white" : "text-black"}`}
        >
          <span className="inline secondary-text-color">RentNest</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div
          className={`hidden md:flex items-center gap-8 ${homePageTextScrollBlack && "text-black"} ${homePageTextIsNotScrolled ? "text-white" : "text-black"}`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xl font-medium  transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Auth Section */}
        <div className="hidden md:flex items-center gap-4">
          {user?.success ? (
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button className="relative h-8 w-8 rounded-full cursor-pointer">
                    <Avatar className="h-8 w-8">
                      {/* <AvatarImage src={user.avatar} alt={user.name} /> */}
                      <AvatarFallback>
                        {user.data.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                }
              ></DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuGroup>
                  <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium">{user.data.name}</p>
                      <p className="text-xs text-foreground/70">
                        {user.data.email}
                      </p>
                      <DropdownMenuSeparator />
                      <p
                        onClick={() => handleRedirect()}
                        className="cursor-pointer text-xs text-foreground/70"
                      >
                        Dashboard
                      </p>
                    </div>
                  </DropdownMenuLabel>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => handleLogOut("logout")}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button variant="outline" size="sm">
                <Link href="/login">Sign In</Link>
              </Button>
              <Button size="sm">
                <Link href="/register">Sign Up</Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden secondary-text-color font-bold">
          <Sheet>
            <SheetTrigger>
              <div>
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </div>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 mt-8 px-3">
                {/* Mobile Nav Links */}
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                {/* Mobile Auth Section */}
                <div className="border-t pt-4">
                  {user?.success ? (
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback>
                            {user.data.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">
                            {user.data.name}
                          </p>
                          <p className="text-xs text-foreground/70">
                            {user.data.email}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Button
                          variant="destructive"
                          size="sm"
                          className="w-full"
                          onClick={() => handleLogOut("logout")}
                        >
                          Logout
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-2">
                      <Button variant="outline" className="w-full">
                        <Link href="/login">Sign In</Link>
                      </Button>
                      <Button className="w-full">
                        <Link href="/register">Sign Up</Link>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
