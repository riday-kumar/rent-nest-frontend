import Footer from "@/components/shared/Footer";
import NavbarWithUser from "./_components/navbarUser/NavbarWithUser";
import { Suspense } from "react";

export default async function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <NavbarWithUser />
      </Suspense>
      {children}
      <Footer />
    </div>
  );
}
