"use server";

import { PropertyFormValues } from "@/lib/types";
import { tokens } from "@/service/tokens";

export const createProperty = async (payload: PropertyFormValues) => {
  const { accessToken } = await tokens();

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/landlord/properties`,
    {
      method: "POST",
      headers: {
        Cookie: `accessToken=${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    },
  );
  const data = await res.json();
  console.log(data);
  return data;
};
