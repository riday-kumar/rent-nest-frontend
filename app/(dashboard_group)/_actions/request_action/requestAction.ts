"use server";

import { tokens } from "@/service/tokens";

export const allRentalReqForLandlord = async () => {
  const { accessToken } = await tokens();

  const res = await fetch(`${process.env.BACKEND_API_URL}/landlord/requests`, {
    headers: {
      Cookie: `accessToken=${accessToken}`,
    },
  });
  const data = await res.json();
  return data;
};

export const updateRentRequestStatus = async (
  reqId: string,
  status: string,
) => {
  const { accessToken } = await tokens();
  const payload = {
    status: status,
  };
  const res = await fetch(
    `${process.env.BACKEND_API_URL}/landlord/requests/${reqId}`,
    {
      method: "PATCH",
      headers: {
        Cookie: `accessToken=${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    },
  );
  const data = await res.json();
  return data;
};
