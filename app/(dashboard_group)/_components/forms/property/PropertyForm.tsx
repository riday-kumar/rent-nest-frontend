"use client";

import { useForm } from "react-hook-form";

import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldError,
} from "@/components/ui/field";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Suspense, useEffect, useState } from "react";
import { PropertyFormUpdateValues, PropertyFormValues } from "@/lib/types";
import { createProperty } from "@/app/(dashboard_group)/_actions/property/createProperty";
import { updateProperty } from "@/app/(dashboard_group)/_actions/property/updateProperty";
import { gestCategory } from "@/app/(dashboard_group)/_actions/property/getCategory";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const facilities = [
  "livingRoom",
  "drawingRoom",
  "dinningRoom",
  "servantRoom",
  "parking",
  "lift",
] as const;

const amenityOptions = [
  "Wifi",
  "Gas",
  "Security",
  "Generator",
  "CCTV",
  "Intercom",
  "Gym",
  "Swimming Pool",
];

type PropertyFormProps = {
  mode: "create" | "update";
  initialData?: Partial<PropertyFormUpdateValues>;
};

type Category = {
  id: string;
  categoryName: string;
};

export default function PropertyForm({ mode, initialData }: PropertyFormProps) {
  console.log("initialData", initialData);
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    async function getCategories() {
      // const res = await fetch(
      //   `${process.env.NEXT_PUBLIC_BACKEND_API}/category/all-categories`,
      // );

      // const data = await res.json();
      const data = await gestCategory();
      console.log("category data", data.data);

      setCategories(data.data);
    }

    getCategories();
  }, []);

  // console.log("categories", categories);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<PropertyFormValues>({
    defaultValues: {
      title: "",
      description: "",

      rentAmount: "",

      address: "",
      city: "",
      district: "",
      division: "",

      size: "",

      floorType: "",
      bedRoom: "",
      bathroom: "",
      balconies: "",
      kitchen: "",

      livingRoom: false,
      drawingRoom: false,
      dinningRoom: false,
      servantRoom: false,
      parking: false,
      lift: false,

      serviceCharge: "",

      images: "",

      amenities: [],

      categoryId: "",
    },
  });

  useEffect(() => {
    if (mode === "update" && initialData) {
      reset({
        title: initialData.title ?? "",
        description: initialData.description ?? "",
        rentAmount: initialData.rentAmount ?? "",
        address: initialData.address ?? "",
        city: initialData.city ?? "",
        district: initialData.district ?? "",
        division: initialData.division ?? "",
        size: initialData.size ?? "",
        floorType: initialData.floorType ?? "",
        bedRoom: initialData.bedRoom ?? "",
        bathroom: initialData.bathroom ?? "",
        balconies: initialData.balconies ?? "",
        kitchen: initialData.kitchen ?? "",
        livingRoom: initialData.livingRoom ?? false,
        drawingRoom: initialData.drawingRoom ?? false,
        dinningRoom: initialData.dinningRoom ?? false,
        servantRoom: initialData.servantRoom ?? false,
        parking: initialData.parking ?? false,
        lift: initialData.lift ?? false,
        serviceCharge: initialData.serviceCharge ?? "",
        images: (initialData.images ?? []).join(","), // array -> string
        amenities: initialData.amenities ?? [],
        categoryId: initialData.categoryId ?? "",
      });
    }
  }, [mode, initialData, reset]);

  const handleFormSubmit = async (data: PropertyFormValues) => {
    // console.log("data", data);
    const payload = {
      ...data,

      images: data.images
        ? data.images.split(",").map((item) => item.trim())
        : [],

      // amenities: data.amenities.split(",").map((item) => item.trim()),
      amenities: data.amenities,
      categoryId: Number(data.categoryId),
    };

    console.log("payload", payload);

    // API CALL HERE
    if (mode === "create") {
      const res = await createProperty(payload);
      if (res.success) {
        toast.success("Property created successfully");
        reset();
        router.push("/dashboard/landlord/properties");
      }
    } else {
      const res = await updateProperty(initialData?.id ?? "", payload);
      if (res.success) {
        toast.success("Property updated successfully");
        router.push("/dashboard/landlord/properties");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-8">
      <FieldGroup>
        {/* Basic Information */}

        <h2 className="text-xl font-semibold">Basic Information</h2>

        <Field>
          <FieldLabel>Property Title</FieldLabel>

          <Input
            placeholder="Modern Apartment"
            {...register("title", {
              required: "Title is required",
            })}
          />

          {errors.title && <FieldError>{errors.title.message}</FieldError>}
        </Field>

        <Field>
          <FieldLabel>Description</FieldLabel>

          <Textarea
            placeholder="Property description"
            {...register("description")}
          />
        </Field>
        {/* Rent amount */}

        <Field>
          <FieldLabel>Rent Amount</FieldLabel>

          <Input
            type="number"
            placeholder="20000"
            {...register("rentAmount", {
              required: "Rent amount required",
              valueAsNumber: true,
            })}
          />

          {errors.rentAmount && (
            <FieldError>{errors.rentAmount.message}</FieldError>
          )}
        </Field>

        {/* Service charge */}
        <Field>
          <FieldLabel>Service Charge</FieldLabel>

          <Input
            type="number"
            placeholder="2000"
            {...register("serviceCharge", {
              valueAsNumber: true,
            })}
          />

          {errors.serviceCharge && (
            <FieldError>{errors.serviceCharge.message}</FieldError>
          )}
        </Field>

        {/* Location */}

        <h2 className="text-xl font-semibold">Location</h2>

        {["address", "city", "district", "division"].map((field) => (
          <Field key={field}>
            <FieldLabel>{field}</FieldLabel>

            <Input {...register(field as keyof PropertyFormValues)} />
          </Field>
        ))}

        {/* Details */}

        <h2 className="text-xl font-semibold">Property Details</h2>

        {["size", "bedRoom", "bathroom", "balconies", "kitchen"].map(
          (field) => (
            <Field key={field}>
              <FieldLabel>{field}</FieldLabel>

              <Input
                type="number"
                {...register(field as keyof PropertyFormValues, {
                  valueAsNumber: true,
                })}
              />
            </Field>
          ),
        )}

        {/* Facilities */}

        <h2 className="text-xl font-semibold">Facilities</h2>

        <div className="grid grid-cols-2 gap-4">
          {facilities.map((item) => (
            <label key={item} className="flex items-center gap-3">
              <Checkbox
                checked={watch(item)}
                onCheckedChange={(value) => setValue(item, Boolean(value))}
              />

              <span>{item}</span>
            </label>
          ))}
        </div>

        {/* Images */}

        <Field>
          <FieldLabel>Image URLs</FieldLabel>

          <Textarea
            placeholder="
            url1,url2,url3
            "
            {...register("images")}
          />
        </Field>

        {/* Amenities */}

        <h2 className="text-xl font-semibold">Amenities</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {amenityOptions.map((amenity) => (
            <label key={amenity} className="flex items-center gap-3">
              <Checkbox
                checked={watch("amenities").includes(amenity)}
                onCheckedChange={(checked) => {
                  const current = watch("amenities");

                  if (checked) {
                    setValue("amenities", [...current, amenity]);
                  } else {
                    setValue(
                      "amenities",
                      current.filter((item) => item !== amenity),
                    );
                  }
                }}
              />

              <span>{amenity}</span>
            </label>
          ))}
        </div>

        {/* ============== category field ========= */}

        <Field>
          <FieldLabel>Category</FieldLabel>

          <Select
            value={watch("categoryId") ? String(watch("categoryId")) : ""}
            onValueChange={(value) => setValue("categoryId", value!)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>

            <SelectContent>
              <Suspense fallback={<p>loading category</p>}>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={Number(category.id)}>
                    {category.categoryName}
                  </SelectItem>
                ))}
              </Suspense>
            </SelectContent>
          </Select>
        </Field>

        <Button type="submit" className="w-full">
          {mode === "create" ? "Add Property" : "Update Property"}
        </Button>
      </FieldGroup>
    </form>
  );
}
