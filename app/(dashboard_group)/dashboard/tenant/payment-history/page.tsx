import DashboardTableSkeleton from "@/app/(dashboard_group)/_components/dashboard/DashboardTableSkeleton";
import AllPaymentHisTable from "@/app/(dashboard_group)/_components/paymentHistory/AllPaymentHisTable";
import React, { Suspense } from "react";

const PaymentHistoryPage = () => {
  return (
    <div>
      <Suspense fallback={<DashboardTableSkeleton />}>
        <AllPaymentHisTable />
      </Suspense>
    </div>
  );
};

export default PaymentHistoryPage;
