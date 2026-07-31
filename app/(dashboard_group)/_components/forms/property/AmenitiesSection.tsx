"use client";

import { Controller, UseFormReturn } from "react-hook-form";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";

import { Checkbox } from "@/components/ui/checkbox";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { PropertyFormValues } from "./property.schema";

interface AmenitiesSectionProps {
  form: UseFormReturn<PropertyFormValues>;
}

const amenitiesList = [
  "WiFi",
  "CCTV",
  "Generator",
  "Security",
  "Gym",
  "Rooftop",
  "Swimming Pool",
  "Playground",
  "Gas Connection",
  "Water Supply",
] as const;

export default function AmenitiesSection({ form }: AmenitiesSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Amenities</CardTitle>
      </CardHeader>

      <CardContent>
        <Controller
          name="amenities"
          control={form.control}
          render={({ field, fieldState }) => (
            <FieldSet>
              <FieldLegend variant="label" className="sr-only">
                Amenities
              </FieldLegend>

              <FieldGroup
                data-slot="checkbox-group"
                className="grid gap-4 md:grid-cols-3"
              >
                {amenitiesList.map((item) => {
                  const checked = field.value?.includes(item);

                  return (
                    <Field
                      key={item}
                      orientation="horizontal"
                      data-invalid={fieldState.invalid}
                      className="rounded-lg border p-4"
                    >
                      <Checkbox
                        id={`amenity-${item}`}
                        checked={checked}
                        aria-invalid={fieldState.invalid}
                        onCheckedChange={(value) => {
                          if (value) {
                            field.onChange([...(field.value ?? []), item]);
                          } else {
                            field.onChange(
                              field.value?.filter((v) => v !== item),
                            );
                          }
                        }}
                      />

                      <FieldLabel
                        htmlFor={`amenity-${item}`}
                        className="cursor-pointer font-normal"
                      >
                        {item}
                      </FieldLabel>
                    </Field>
                  );
                })}
              </FieldGroup>

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </FieldSet>
          )}
        />
      </CardContent>
    </Card>
  );
}
