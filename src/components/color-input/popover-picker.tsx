import React from "react";
import { HexColorPicker } from "react-colorful";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface PopoverPickerProps {
  color: string;
  onChange: (newColor: string) => void;
}

export function PopoverPicker({ color, onChange }: PopoverPickerProps) {
  return (
    <Popover>
      <PopoverTrigger>
        <div
          style={{ backgroundColor: color }}
          className="w-8 h-8 rounded-full border-2 border-white"
        />
      </PopoverTrigger>
      <PopoverContent className="p-2 w-full">
        <HexColorPicker color={color} onChange={onChange} />
      </PopoverContent>
    </Popover>
  );
}
