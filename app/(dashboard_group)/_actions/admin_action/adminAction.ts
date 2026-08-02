"use server";

import { tokens } from "@/service/tokens";

export const getAllUsersForAdmin = async () => {
  const { accessToken } = await tokens();

  const res = await fetch(`${process.env.BACKEND_API_URL}/admin/users`, {
    headers: {
      Cookie: `accessToken=${accessToken}`,
    },
  });
  const result = await res.json();
  return result;
};

export const getAllRentalReqForAdmin = async () => {
  const { accessToken } = await tokens();

  const res = await fetch(`${process.env.BACKEND_API_URL}/admin/rentals`, {
    headers: {
      Cookie: `accessToken=${accessToken}`,
    },
  });
  const result = await res.json();
  return result;
};

export const getAllPendingReqForAdmin = async () => {
  const { accessToken } = await tokens();

  const res = await fetch(`${process.env.BACKEND_API_URL}/admin/pending`, {
    headers: {
      Cookie: `accessToken=${accessToken}`,
    },
  });
  const result = await res.json();
  return result;
};

export const handleUserStatus = async (id: string) => {
  const { accessToken } = await tokens();

  const res = await fetch(`${process.env.BACKEND_API_URL}/admin/users/${id}`, {
    method: "PATCH",
    headers: {
      Cookie: `accessToken=${accessToken}`,
    },
  });
  const result = await res.json();
  return result;
};
