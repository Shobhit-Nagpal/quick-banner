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
    <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
      <h2 className="text-xl font-bold text-gray-800">Color</h2>
      <div className="flex flex-col space-y-2">
        <Label className="text-sm font-semibold text-gray-700">
          Background Color
        </Label>
        <div className="flex items-center space-x-4">
          <PopoverPicker color={bgColor} onChange={debouncedBgColor} />
        </div>
      </div>
    </div>
  );
}
