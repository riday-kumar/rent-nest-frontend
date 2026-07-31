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

type PropertyFormValues = {
  title: string;
  description: string;

  rentAmount: string;

  address: string;
  city: string;
  district: string;
  division: string;

  size: string;

  floorType: string;
  bedRoom: string;
  bathroom: string;
  balconies: string;
  kitchen: string;

  livingRoom: boolean;
  drawingRoom: boolean;
  dinningRoom: boolean;
  servantRoom: boolean;
  parking: boolean;
  lift: boolean;

  serviceCharge: string;

  images: string;

  amenities: string;

  categoryId: string;
};

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

export default function AddPropertyForm() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function getCategories() {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/category/all-categories`,
      );

      const data = await res.json();
      console.log("category data", data.data);

      setCategories(data.data);
    }

    getCategories();
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
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

  const onSubmit = (data: PropertyFormValues) => {
    console.log("data", data);
    const payload = {
      ...data,

      images: data.images.split(",").map((item) => item.trim()),

      // amenities: data.amenities.split(",").map((item) => item.trim()),
      amenities: data.amenities,
    };

    console.log("payload", payload);

    // API CALL HERE
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
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

        <Field>
          <FieldLabel>Rent Amount</FieldLabel>

          <Input
            placeholder="20000"
            {...register("rentAmount", {
              required: "Rent amount required",
            })}
          />

          {errors.rentAmount && (
            <FieldError>{errors.rentAmount.message}</FieldError>
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

        {[
          "size",
          "floorType",
          "bedRoom",
          "bathroom",
          "balconies",
          "kitchen",
        ].map((field) => (
          <Field key={field}>
            <FieldLabel>{field}</FieldLabel>

            <Input {...register(field as keyof PropertyFormValues)} />
          </Field>
        ))}

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

          <Select onValueChange={(value) => setValue("categoryId", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>

            <SelectContent>
              <Suspense fallback={<p>loading category</p>}>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.categoryName}
                  </SelectItem>
                ))}
              </Suspense>
            </SelectContent>
          </Select>
        </Field>

        <Button type="submit" className="w-full">
          Add Property
        </Button>
      </FieldGroup>
    </form>
  );
}
