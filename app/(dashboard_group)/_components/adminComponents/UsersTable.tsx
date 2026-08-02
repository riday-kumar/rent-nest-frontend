"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { handleUserStatus } from "../../_actions/admin_action/adminAction";
import { useRouter } from "next/navigation";

type User = {
  id: string;
  name: string;
  email: string;
  role: "ADMIN" | "TENANT" | "ADMIN";
  isActive: boolean;
};

type UsersResponse = {
  data: User[];
};

type Res = {
  success: boolean;
  message: string;
  data: User;
};

const UsersTable = ({ usersData }: { usersData: UsersResponse }) => {
  const router = useRouter();

  const handleActiveStatus = async (id: string) => {
    console.log(id);
    const res: Res = await handleUserStatus(id);

    if (res.success) {
      toast.success("user status updated successfully");
      router.refresh();
    }
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>All Users</CardTitle>
        </CardHeader>

        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>

                <TableHead>Email</TableHead>

                <TableHead>Role</TableHead>

                <TableHead>Active Status</TableHead>

                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {usersData?.data.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div>
                        <p className="font-medium">{user.name}</p>
                      </div>
                    </div>
                  </TableCell>

                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div>
                        <p className="font-medium">{user.email}</p>
                      </div>
                    </div>
                  </TableCell>

                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div>
                        <p className="font-medium">{user.role}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div>
                        <p className="font-medium">
                          {user.isActive ? "Active" : "Banned"}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div>
                        <Button
                          size="default"
                          variant={user?.isActive ? "outline" : "destructive"}
                          onClick={() => handleActiveStatus(user.id)}
                        >
                          {user?.isActive ? "Ban" : "Active"}
                        </Button>
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

export default UsersTable;
