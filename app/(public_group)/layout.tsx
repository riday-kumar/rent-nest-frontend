import Footer from "@/components/shared/Footer";
import NavbarWithUser from "./_components/navbarUser/NavbarWithUser";
import { Suspense } from "react";
import NavbarSkeleton from "./_components/navbarUser/NavbarSkeleton";

export default async function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Suspense fallback={<NavbarSkeleton />}>
        <NavbarWithUser />
      </Suspense>
      {children}
      <Footer />
    </div>
  );
}
