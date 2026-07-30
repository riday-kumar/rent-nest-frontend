"use client";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

import React, { useState } from "react";

const AreaRange = () => {
  const [value, setValue] = useState([800, 3000]);
  return (
    <div className="mx-auto grid w-full max-w-xs gap-3">
      <div className="flex items-center justify-between gap-2">
        <Label htmlFor="slider-demo-temperature">Area</Label>
        <span className="text-sm text-muted-foreground">
          {value.join(", ")}
        </span>
      </div>
      <Slider
        id="slider-for-area"
        value={value}
        onValueChange={(value) => setValue(value as number[])}
        min={800}
        max={3000}
        step={200}
      />
    </div>
  );
};

export default AreaRange;
