import Footer from "@/components/shared/Footer";
import { Suspense } from "react";
import NavbarWithUser from "../(public_group)/_components/navbarUser/NavbarWithUser";

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const user = await getMe();
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
