"use client";

import { Controller, UseFormReturn } from "react-hook-form";

import {
  Field,
  FieldContent,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { PropertyFormValues } from "./property.schema";

interface BasicInfoSectionProps {
  form: UseFormReturn<PropertyFormValues>;
}

export default function BasicInfoSection({ form }: BasicInfoSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Basic Information</CardTitle>
      </CardHeader>

      <CardContent>
        <FieldGroup>
          {/* Title */}
          <Controller
            name="title"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="property-title">Property Title</FieldLabel>

                <Input
                  {...field}
                  id="property-title"
                  placeholder="Luxury apartment in Dhaka"
                  aria-invalid={fieldState.invalid}
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* Description */}
          <Controller
            name="description"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="property-description">
                  Description
                </FieldLabel>

                <Textarea
                  {...field}
                  id="property-description"
                  placeholder="Write property details..."
                  rows={5}
                  aria-invalid={fieldState.invalid}
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* Rent Amount */}
          <Controller
            name="rentAmount"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="property-rent-amount">
                  Monthly Rent (BDT)
                </FieldLabel>

                <Input
                  {...field}
                  id="property-rent-amount"
                  type="number"
                  placeholder="20000"
                  aria-invalid={fieldState.invalid}
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* Category */}
          <Controller
            name="categoryId"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field orientation="responsive" data-invalid={fieldState.invalid}>
                <FieldContent>
                  <FieldLabel htmlFor="property-category">
                    Property Category
                  </FieldLabel>

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </FieldContent>

                <Select
                  name={field.name}
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  <SelectTrigger
                    id="property-category"
                    aria-invalid={fieldState.invalid}
                    className="min-w-[180px]"
                  >
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>

                  <SelectContent>
                    {/* 
                      Later these will come from API
                    */}
                    <SelectItem value="1">Apartment</SelectItem>
                    <SelectItem value="2">House</SelectItem>
                    <SelectItem value="3">Room</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
            )}
          />
        </FieldGroup>
      </CardContent>
    </Card>
  );
}
