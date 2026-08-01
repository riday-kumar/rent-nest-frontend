"use server";
import { cookies } from "next/headers";

export const tokens = async () => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value || null;

  // if (!accessToken) {
  //   return {
  //     success: false,
  //     message: "User not logged in",
  //   };
  // }

  return {
    success: true,
    accessToken,
  };
};
