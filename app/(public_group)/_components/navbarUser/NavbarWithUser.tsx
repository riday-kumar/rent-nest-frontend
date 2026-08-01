// components/shared/NavbarWithUser.tsx
import { Navbar } from "@/components/shared/Navbar";
import { getMe } from "@/service/getMe";

export default async function NavbarWithUser() {
  const profile = await getMe();

  let user;
  if (profile.success) {
    user = profile.data;
  }

  return <Navbar user={user} />;
}
