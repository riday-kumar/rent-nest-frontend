import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import RentReqTableData from "./RentReqTableData";
import { allRentalReqForLandlord } from "../../_actions/request_action/requestAction";

export default async function RentRequestTable() {
  const allRequests = await allRentalReqForLandlord();
  const requests = allRequests.data.data;
  // console.log("requests", allRequests);
  if (requests.length === 0) {
    return <p>No rent requests found.</p>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Rent Requests</CardTitle>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tenant</TableHead>

              <TableHead>Property</TableHead>

              <TableHead>Rent</TableHead>

              <TableHead>Status</TableHead>

              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          {/* ===================== req table body =========== */}
          <RentReqTableData requests={requests} />
        </Table>
      </CardContent>
    </Card>
  );
}
