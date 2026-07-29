import Image from "next/image";
import React from "react";

const PaymentMethod = () => {
  return (
    <div className="container mx-auto">
      <Image
        src="/ssl.png"
        alt="Payment Method"
        width={1200}
        height={160}
        className="h-40 w-full rounded-3xl object-fit "
      />
    </div>
  );
};

export default PaymentMethod;
