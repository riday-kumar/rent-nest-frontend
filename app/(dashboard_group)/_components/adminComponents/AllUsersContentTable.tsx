import React from "react";
import { getAllUsersForAdmin } from "../../_actions/admin_action/adminAction";
import UsersTable from "./UsersTable";

const AllUsersContentTable = async () => {
  // data load from api
  const users = await getAllUsersForAdmin();
  if (!users.success) {
    return <p>No users found</p>;
  }
  return (
    <div>
      <UsersTable usersData={users?.data} />
    </div>
  );
};

export default AllUsersContentTable;
