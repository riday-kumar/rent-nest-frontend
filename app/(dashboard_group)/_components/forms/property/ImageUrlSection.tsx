"use client";

import { Controller, UseFormReturn, useFieldArray } from "react-hook-form";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Plus, Trash2 } from "lucide-react";

import { PropertyFormValues } from "./property.schema";

interface ImageUrlSectionProps {
  form: UseFormReturn<PropertyFormValues>;
}

export default function ImageUrlSection({ form }: ImageUrlSectionProps) {
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "images",
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Property Images</CardTitle>
      </CardHeader>

      <CardContent>
        <FieldGroup>
          {fields.map((field, index) => (
            <Controller
              key={field.id}
              name={`images.${index}`}
              control={form.control}
              render={({ field: controllerField, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={`image-url-${index}`}>
                    Image URL {index + 1}
                  </FieldLabel>

                  <div className="flex gap-3">
                    <Input
                      {...controllerField}
                      id={`image-url-${index}`}
                      placeholder="https://example.com/image.jpg"
                      aria-invalid={fieldState.invalid}
                    />

                    {fields.length > 1 && (
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        onClick={() => remove(index)}
                        aria-label={`Remove image ${index + 1}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          ))}

          <Button type="button" variant="outline" onClick={() => append("")}>
            <Plus className="mr-2 h-4 w-4" />
            Add Image URL
          </Button>
        </FieldGroup>
      </CardContent>
    </Card>
  );
}
