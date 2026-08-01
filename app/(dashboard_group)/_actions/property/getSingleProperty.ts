"use server";
export const getSingleProperty = async (propId: string) => {
  const res = await fetch(
    `${process.env.BACKEND_API_URL}/properties/${propId}`,
    {
      cache: "force-cache",
      next: {
        revalidate: 60 * 60 * 24,
        tags: ["singleProperty"],
      },
    },
  );
  const data = await res.json();
  return data;
};
