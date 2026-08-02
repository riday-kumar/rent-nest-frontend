import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Request = {
  id: string;
  tenantId: string;
  rentStatus: string;
  tenant: {
    name: string;
    email: string;
  };
  property: {
    title: string;
    propertyStatus: string;
  };
};

type ReqResponse = {
  data: Request[];
};

const RentalRequestsTable = ({
  rentRequests,
}: {
  rentRequests: ReqResponse;
}) => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>All Rental request</CardTitle>
        </CardHeader>

        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Property Name</TableHead>

                <TableHead>Tenant Name</TableHead>

                <TableHead>Rent Status</TableHead>

                <TableHead>Property Status</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {rentRequests?.data.map((rentRequest) => (
                <TableRow key={rentRequest.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div>
                        <p className="font-medium">
                          {rentRequest.property.title}
                        </p>
                      </div>
                    </div>
                  </TableCell>

                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div>
                        <p className="font-medium">{rentRequest.tenant.name}</p>
                      </div>
                    </div>
                  </TableCell>

                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div>
                        <p className="font-medium">{rentRequest.rentStatus}</p>
                      </div>
                    </div>
                  </TableCell>

                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div>
                        <p className="font-medium">
                          {rentRequest.property.propertyStatus}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default RentalRequestsTable;
