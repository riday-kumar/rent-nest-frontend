"use server";

import { tokens } from "@/service/tokens";
import { redirect } from "next/navigation";

export const createPayment = async (id: string) => {
  const { accessToken } = await tokens();
  const sendReqId = {
    reqId: id,
  };
  const res = await fetch(`${process.env.BACKEND_API_URL}/payments/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: `accessToken=${accessToken}`,
    },
    body: JSON.stringify(sendReqId),
  });
  const data = await res.json();
  console.log("link", data);
  redirect(data.data);
};
