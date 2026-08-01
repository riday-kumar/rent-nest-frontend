"use server";

import { tokens } from "@/service/tokens";

export const getTenantReqData = async () => {
  const { accessToken } = await tokens();
  const res = await fetch(`${process.env.BACKEND_API_URL}/rentals`, {
    headers: {
      Cookie: `accessToken=${accessToken}`,
    },
  });

  const data = await res.json();
  return data;
};
