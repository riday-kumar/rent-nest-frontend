"use server";

import { tokens } from "@/service/tokens";

export const addReview = async (propertyId: string, review: string) => {
  console.log(propertyId, review);
  const newReview = {
    propertyId,
    review,
  };
  const { accessToken } = await tokens();
  const res = await fetch(`${process.env.BACKEND_API_URL}/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: `accessToken=${accessToken}`,
    },
    body: JSON.stringify(newReview),
  });
  const data = await res.json();
  console.log(data);
  return data;
};
