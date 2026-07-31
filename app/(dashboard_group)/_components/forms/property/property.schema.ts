import { z } from "zod";

// Mirror your Prisma `PropertyStatus` enum here.
// Update the values below to match exactly what you defined in schema.prisma.
export const PROPERTY_STATUS = ["AVAILABLE", "RENTED", "UNAVAILABLE"] as const;
export type PropertyStatus = (typeof PROPERTY_STATUS)[number];

// Helper: turns an empty string from a number input into `undefined`
// so optional numeric fields don't fail validation when left blank.
const optionalNumber = z
  .union([z.string(), z.number()])
  .transform((val) =>
    val === "" || val === undefined ? undefined : Number(val),
  )
  .pipe(z.number().nonnegative().optional())
  .optional();

const requiredNumber = z
  .union([z.string(), z.number()])
  .transform((val) => Number(val))
  .pipe(z.number().nonnegative({ message: "Must be a positive number" }));

export const propertyFormSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters").max(120),
  description: z.string().max(2000).optional().or(z.literal("")),

  rentAmount: optionalNumber,

  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  district: z.string().min(1, "District is required"),
  division: z.string().optional().or(z.literal("")),

  propertyStatus: z.enum(PROPERTY_STATUS).default("AVAILABLE"),

  size: requiredNumber,
  floorType: z.string().optional().or(z.literal("")),

  bedRoom: optionalNumber,
  bathroom: optionalNumber,
  balconies: optionalNumber,

  livingRoom: z.boolean().default(false),
  drawingRoom: z.boolean().default(false),
  dinningRoom: z.boolean().default(false),

  kitchen: optionalNumber,
  servantRoom: z.boolean().default(false),
  parking: z.boolean().default(false),
  lift: z.boolean().default(false),

  serviceCharge: optionalNumber,

  images: z
    .array(z.object({ value: z.string().url("Must be a valid URL") }))
    .default([]),

  amenities: z.array(z.string()).default([]),

  categoryId: z
    .union([z.string(), z.number()])
    .transform((val) => Number(val))
    .pipe(z.number().int().positive("Please select a category")),
});

export type PropertyFormValues = z.infer<typeof propertyFormSchema>;

// Shape actually expected by the API (images as string[], not {value}[])
export type PropertyPayload = Omit<PropertyFormValues, "images"> & {
  images: string[];
};

export function toPropertyPayload(values: PropertyFormValues): PropertyPayload {
  return {
    ...values,
    images: values.images.map((i) => i.value),
  };
}
