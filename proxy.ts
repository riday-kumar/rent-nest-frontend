import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";
import { verifyToken } from "./utils/jwt";
import { getNewAccessToken } from "./service/refreshToken";

const AUTH_ROUTES = ["/login", "/register"];
const PUBLIC_ROUTES = [
  "/",
  "/about",
  "/properties",
  "/payment/success",
  "/payment/cancel",
  "/payment/fail",
];

export async function proxy(request: NextRequest) {
  const pathName = request.nextUrl.pathname;

  const cookieStore = await cookies();

  let accessToken = request.cookies.get("accessToken")?.value;
  const refreshToken = request.cookies.get("refreshToken")?.value;

  // decode access token
  let decodedAccessToken = accessToken
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
      decodedAccessToken = verifyToken(
        accessToken!,
        process.env.JWT_ACCESS_SECRET as string,
      );
    }
  }

  let userRole = null;
  if (!decodedAccessToken?.success) {
    // token has expired or is invalid, clear the cookies
    cookieStore.delete("accessToken");
  }

  if (decodedAccessToken?.success && decodedAccessToken.data) {
    userRole = (decodedAccessToken.data as JwtPayload).role;
  }

  // user is logged in and trying to access login or register pages, redirect to dashboard or root home
  if (accessToken && AUTH_ROUTES.includes(pathName)) {
    if (userRole === "LANDLORD") {
      return NextResponse.redirect(new URL("/dashboard/landlord", request.url));
    } else if (userRole === "TENANT") {
      return NextResponse.redirect(new URL("/dashboard/tenant", request.url));
    } else if (userRole === "ADMIN") {
      return NextResponse.redirect(new URL("/dashboard/admin", request.url));
    } else {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  const isPublicRoute = PUBLIC_ROUTES.some(
    (route) => pathName === route || pathName.startsWith(route + "/"),
  );
  const isAuthRoute = AUTH_ROUTES.some(
    (route) => pathName === route || pathName.startsWith(route + "/"),
  );

  if (!accessToken && !isPublicRoute && !isAuthRoute) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  // AUTHORIZATION
  if (pathName.startsWith("/dashboard/landlord") && userRole !== "LANDLORD") {
    return NextResponse.redirect(new URL("/not-found", request.url));
  } else if (
    pathName.startsWith("/dashboard/tenant") &&
    userRole !== "TENANT"
  ) {
    return NextResponse.redirect(new URL("/not-found", request.url));
  } else if (pathName.startsWith("/dashboard/admin") && userRole !== "ADMIN") {
    return NextResponse.redirect(new URL("/not-found", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|.*\\.(?:png|jpg|jpeg|svg|gif|webp|ico)$).*)",
  ],
};
