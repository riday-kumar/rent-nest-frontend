"use client";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

import React, { useState } from "react";

const PriceRange = () => {
  const [value, setValue] = useState([5000, 50000]);
  return (
    <div className="mx-auto grid w-full max-w-xs gap-3">
      <div className="flex items-center justify-between gap-2">
        <Label htmlFor="slider-demo-temperature">Price</Label>
        <span className="text-sm text-muted-foreground">
          {value.join(", ")}
        </span>
      </div>
      <Slider
        id="slider-for-price"
        value={value}
        onValueChange={(value) => setValue(value as number[])}
        min={5000}
        max={50000}
        step={5000}
      />
    </div>
  );
};

export default PriceRange;
