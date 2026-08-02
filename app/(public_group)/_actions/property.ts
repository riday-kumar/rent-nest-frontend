/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { tokens } from "@/service/tokens";

export const allPublicProperties = async (query: any, type: string) => {
  const res = await fetch(
    `${process.env.BACKEND_API_URL}/properties?location=${query}&type=${type}`,
  );
  const data = await res.json();
  return data;
};

export const propertyDetails = async (id: string) => {
  const res = await fetch(`${process.env.BACKEND_API_URL}/properties/${id}`);
  const data = await res.json();
  return data;
};

export const createRentalReq = async (id: string) => {
  const { accessToken } = await tokens();
  const res = await fetch(
    `${process.env.BACKEND_API_URL}/rentals?propertyId=${id}`,
    {
      method: "POST",
      headers: {
        Cookie: `accessToken=${accessToken}`,
        "Content-Type": "application/json",
      },
    },
  );
  const data = await res.json();
  return data;
};
