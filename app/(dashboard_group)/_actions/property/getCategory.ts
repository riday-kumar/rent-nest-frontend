"use server";
export const gestCategory = async () => {
  const res = await fetch(
    `${process.env.BACKEND_API_URL}/category/all-categories`,
    {
      cache: "force-cache",
      next: {
        revalidate: 60 * 60 * 24,
        tags: ["category"],
      },
    },
  );

  const result = await res.json();
  // console.log("result", result);
  return result;
};
