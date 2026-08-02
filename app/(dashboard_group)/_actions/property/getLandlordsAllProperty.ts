"use server";

import { tokens } from "@/service/tokens";

export const getLandlordsAllProperty = async () => {
  const tokenResult = await tokens();

  if (!tokenResult.success) {
    throw new Error("unauthorized");
  }
  const accessToken = tokenResult.accessToken;

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/landlord/landlord-all-properties`,
    {
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
      cache: "no-store",
    },
  );
  const data = await res.json();
  return data;
};

export const deleteLandlordProperty = async (id: string) => {
  const { accessToken } = await tokens();

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/landlord/properties/${id}`,
    {
      method: "DELETE",
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
    },
  );
  const result = res.json();
  return result;
};
