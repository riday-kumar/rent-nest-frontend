"use server";

import { tokens } from "@/service/tokens";

export const getLandLordDashboardHomeCardInfo = async () => {
  const { accessToken } = await tokens();

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/landlord/landlord-dashboard`,
    {
      method: "GET",
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
    },
  );
  const response = await res.json();
  return response;
};
