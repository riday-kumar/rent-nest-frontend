"use client";

import { Controller, UseFormReturn } from "react-hook-form";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

import { Input } from "@/components/ui/input";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { PropertyFormValues } from "./property.schema";

interface LocationSectionProps {
  form: UseFormReturn<PropertyFormValues>;
}

export default function LocationSection({ form }: LocationSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Location Information</CardTitle>
      </CardHeader>

      <CardContent>
        <FieldGroup>
          {/* Address */}
          <Controller
            name="address"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="property-address">Full Address</FieldLabel>

                <Input
                  {...field}
                  id="property-address"
                  placeholder="House 12, Road 5"
                  aria-invalid={fieldState.invalid}
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* City District Division */}
          <div className="grid gap-6 md:grid-cols-3">
            {/* City */}
            <Controller
              name="city"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="property-city">City</FieldLabel>

                  <Input
                    {...field}
                    id="property-city"
                    placeholder="Dhaka"
                    aria-invalid={fieldState.invalid}
                  />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* District */}
            <Controller
              name="district"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="property-district">District</FieldLabel>

                  <Input
                    {...field}
                    id="property-district"
                    placeholder="Dhaka"
                    aria-invalid={fieldState.invalid}
                  />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* Division */}
            <Controller
              name="division"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="property-division">Division</FieldLabel>

                  <Input
                    {...field}
                    id="property-division"
                    placeholder="Dhaka Division"
                    aria-invalid={fieldState.invalid}
                  />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </div>
        </FieldGroup>
      </CardContent>
    </Card>
  );
}
