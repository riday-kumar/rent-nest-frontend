import { Navbar } from "@/components/shared/Navbar";
import React from "react";

const PublicGroupLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="container mx-auto px-4">
      <Navbar />
      {children}
    </div>
  );
};

export default PublicGroupLayout;
