"use server";

export const allPublicProperties = async () => {
  const res = await fetch(`${process.env.BACKEND_API_URL}/properties`);
  const data = await res.json();
  return data;
};

export const propertyDetails = async (id: string) => {
  const res = await fetch(`${process.env.BACKEND_API_URL}/properties/${id}`);
  const data = await res.json();
  return data;
};
