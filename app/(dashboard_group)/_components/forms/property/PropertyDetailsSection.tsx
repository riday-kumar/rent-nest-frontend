"use client";

import { Controller, UseFormReturn } from "react-hook-form";

import { Field, FieldError, FieldLabel } from "@/components/ui/field";

import { Input } from "@/components/ui/input";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PropertyDetailsSectionProps {
  form: UseFormReturn<PropertyFormValues>;
}

export default function PropertyDetailsSection({
  form,
}: PropertyDetailsSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Property Details</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Size */}
          <Controller
            name="size"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="property-size">
                  Property Size (sq ft)
                </FieldLabel>

                <Input
                  {...field}
                  id="property-size"
                  type="number"
                  placeholder="1200"
                  aria-invalid={fieldState.invalid}
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* Floor Type */}
          <Controller
            name="floorType"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="property-floor-type">
                  Floor Type
                </FieldLabel>

                <Input
                  {...field}
                  id="property-floor-type"
                  placeholder="Tiles / Marble"
                  aria-invalid={fieldState.invalid}
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* Bedroom */}
          <Controller
            name="bedRoom"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="property-bedroom">Bedrooms</FieldLabel>

                <Input
                  {...field}
                  id="property-bedroom"
                  type="number"
                  placeholder="3"
                  aria-invalid={fieldState.invalid}
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* Bathroom */}
          <Controller
            name="bathroom"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="property-bathroom">Bathrooms</FieldLabel>

                <Input
                  {...field}
                  id="property-bathroom"
                  type="number"
                  placeholder="2"
                  aria-invalid={fieldState.invalid}
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* Balcony */}
          <Controller
            name="balconies"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="property-balconies">Balconies</FieldLabel>

                <Input
                  {...field}
                  id="property-balconies"
                  type="number"
                  placeholder="2"
                  aria-invalid={fieldState.invalid}
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* Kitchen */}
          <Controller
            name="kitchen"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="property-kitchen">Kitchen</FieldLabel>

                <Input
                  {...field}
                  id="property-kitchen"
                  type="number"
                  placeholder="1"
                  aria-invalid={fieldState.invalid}
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>
      </CardContent>
    </Card>
  );
}
