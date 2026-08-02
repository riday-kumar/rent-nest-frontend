import AllPaymentHisTable from "@/app/(dashboard_group)/_components/paymentHistory/AllPaymentHisTable";
import React, { Suspense } from "react";

const PaymentHistoryPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <AllPaymentHisTable />
      </Suspense>
    </div>
  );
};

export default PaymentHistoryPage;
