"use server";

import { cookies } from "next/headers";
import jwt, { JwtPayload } from "jsonwebtoken";
import { redirect } from "next/navigation";

export const loginAction = async (previousState: false, formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const payload = {
    email,
    password,
  };

  const res = await fetch(`${process.env.BACKEND_API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const result = await res.json();
  // console.log("result", result);

  if (result.success) {
    const cookieStore = await cookies();

    cookieStore.set("accessToken", result.data.accessToken, {
      httpOnly: true,
      secure: true,
      maxAge: 60 * 60 * 24,
      sameSite: "lax",
    });

    cookieStore.set("refreshToken", result.data.refreshToken, {
      httpOnly: true,
      secure: true,
      maxAge: 60 * 60 * 24 * 7,
      sameSite: "lax",
    });

    // redirect("/dashboard");
    const accessToken = result.data.accessToken;
    const decode = jwt.decode(accessToken) as JwtPayload;
    const role = decode?.role;

    if (role === "ADMIN") {
      redirect("/dashboard/admin");
    } else if (role === "LANDLORD") {
      redirect("/dashboard/landlord");
    } else if (role === "TENANT") {
      redirect("/dashboard/tenant");
    }
  }

  return result;
};
