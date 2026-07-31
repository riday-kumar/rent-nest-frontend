"use client";

import { Controller, UseFormReturn } from "react-hook-form";

import { Field, FieldError, FieldLabel } from "@/components/ui/field";

import { Checkbox } from "@/components/ui/checkbox";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { PropertyFormValues } from "./property.schema";

interface FacilitiesSectionProps {
  form: UseFormReturn<PropertyFormValues>;
}

const facilities = [
  {
    name: "livingRoom",
    label: "Living Room",
  },
  {
    name: "drawingRoom",
    label: "Drawing Room",
  },
  {
    name: "dinningRoom",
    label: "Dining Room",
  },
  {
    name: "servantRoom",
    label: "Servant Room",
  },
  {
    name: "parking",
    label: "Parking",
  },
  {
    name: "lift",
    label: "Lift",
  },
] as const;

export default function FacilitiesSection({ form }: FacilitiesSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Facilities</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid gap-5 md:grid-cols-3">
          {facilities.map((facility) => (
            <Controller
              key={facility.name}
              name={facility.name}
              control={form.control}
              render={({ field, fieldState }) => (
                <Field
                  orientation="horizontal"
                  data-invalid={fieldState.invalid}
                  className="rounded-lg border p-4"
                >
                  <Checkbox
                    id={`facility-${facility.name}`}
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    aria-invalid={fieldState.invalid}
                  />

                  <FieldLabel
                    htmlFor={`facility-${facility.name}`}
                    className="cursor-pointer font-normal"
                  >
                    {facility.label}
                  </FieldLabel>

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
