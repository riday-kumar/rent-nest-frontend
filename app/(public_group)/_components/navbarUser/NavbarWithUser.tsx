// components/shared/NavbarWithUser.tsx
import { Navbar } from "@/components/shared/Navbar";
import { getMe } from "@/service/getMe";

export default async function NavbarWithUser() {
  const user = await getMe();

  return <Navbar user={user} />;
}
