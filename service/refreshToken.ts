"use server";

import { verifyToken } from "@/utils/jwt";
import { cookies } from "next/headers";

export const getNewAccessToken = async () => {
  const cookieStore = await cookies();
  const refreshToken = cookieStore.get("refreshToken")?.value || null;
  // console.log("get access token", accessToken);

  if (!refreshToken) {
    // throw new Error("User Not Logged In!");
    return {
      success: false,
      message: "refresh token not found",
    };
  }

  const res = await fetch(`${process.env.BACKEND_API_URL}/auth/refresh-token`, {
    method: "POST",
    headers: {
      Cookie: `refreshToken=${refreshToken}`,
    },
    cache: "no-store",
  });

  const result = await res.json();

  // console.log("result from server func:", result);
  return result;
};

export const isAccessTokenExist = async () => {
  const cookieStore = await cookies();
  let accessToken = cookieStore.get("accessToken")?.value || null;
  const refreshToken = cookieStore.get("refreshToken")?.value || null;
  //   console.log("access token", accessToken);

  if (!accessToken && !refreshToken) {
    // return {
    //   success: false,
    //   message: "user not logged in!",
    // };
    throw new Error("user not logged in");
  }

  // decode access token
  const decodedAccessToken = accessToken
    ? verifyToken(accessToken, process.env.JWT_ACCESS_SECRET as string)
    : null;

  // decode refresh token
  const decodedRefreshToken = refreshToken
    ? verifyToken(refreshToken, process.env.JWT_REFRESH_SECRET as string)
    : null;

  // access token is expired but decoded token is valid. so user will get new access token from backend
  if (!decodedAccessToken?.success && decodedRefreshToken?.success) {
    const result = await getNewAccessToken();

    if (result.success) {
      const newAccessToken = result.data.accessToken;

      cookieStore.set("accessToken", newAccessToken, {
        httpOnly: true,
        secure: true,
        maxAge: 60 * 60 * 24,
        sameSite: "lax",
      });

      // reassign new access token
      accessToken = newAccessToken;
    }
  }
  return accessToken;
};
