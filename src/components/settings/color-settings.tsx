"use client";

import React from "react";
import { PopoverPicker } from "../color-input/popover-picker";
import { useBanner } from "@/hooks/use-banner";
import { Label } from "../ui/label";
import { debounce } from "@/utils/debounce";

export function ColorSettings() {
  const { bgColor, setBgColor } = useBanner();

  const handleBgColorChange = (newColor: string) => {
    setBgColor(newColor);
  };

  const debouncedBgColor = debounce(handleBgColorChange, 200);

  return (
    <div className="flex flex-col gap-4">
      <Label>Background Color</Label>
      <PopoverPicker color={bgColor} onChange={debouncedBgColor} />
    </div>
  );
}
