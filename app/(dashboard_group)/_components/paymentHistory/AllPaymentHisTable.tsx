import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getTenantTransactionData } from "../../_actions/tenant_action/tenantReqData";

type Transaction = {
  id: string;
  rentRequest: {
    property: {
      title: string;
    };
  };
  transactionId: string;
  amount: number;
  status: string;
};

const AllPaymentHisTable = async () => {
  // data get from api
  const transactionData = await getTenantTransactionData();
  //   console.log("transactionData", transactionData);
  const allTransaction = transactionData?.data?.data;

  if (!transactionData.success) {
    return <p>No payment history found</p>;
  }

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Payment History</CardTitle>
        </CardHeader>

        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Property Title</TableHead>

                <TableHead>Transaction ID</TableHead>

                <TableHead>Amount</TableHead>

                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {allTransaction.map((item: Transaction) => (
                <TableRow key={item.id}>
                  <TableCell>{item.rentRequest.property.title}</TableCell>
                  <TableCell>{item.transactionId}</TableCell>
                  <TableCell>{item.amount}</TableCell>
                  <TableCell>{item.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AllPaymentHisTable;
