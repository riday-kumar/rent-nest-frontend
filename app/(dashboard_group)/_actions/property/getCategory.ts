"use server";
export const gestCategory = async () => {
  const res = await fetch(
    "https://rent-nest-b7-a4.vercel.app/api/category/all-categories",
  );

  const result = await res.json();
  return result.data;
};
