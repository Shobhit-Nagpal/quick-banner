"use client";

import { Canvas } from "@/components/canvas";
import { PopoverPicker } from "@/components/color-input/popover-picker";
import { useBanner } from "@/hooks/use-banner";
import { Banner, initBannerState } from "@/types/state";
import { canvasOpts } from "@/utils/canvas";
import { debounce } from "@/utils/debounce";
import { useState } from "react";

export default function Home() {
  const { title, bgColor, img, link, setTitle, setBgColor } = useBanner();

  const handleBgColorChange = (newColor: string) => {
    setBgColor(newColor);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
  };

  const debouncedBgColor = debounce(handleBgColorChange, 200);

  return (
    <div className="w-full h-screen bg-gray-500 flex flex-col items-center">
      <label className="text-black">BG Color</label>
      <PopoverPicker color={bgColor} onChange={debouncedBgColor} />

      <label className="text-black">Text</label>
      <textarea
        value={title}
        className="border border-black"
        onChange={handleTitleChange}
      />
      <div className="w-full max-w-4xl p-4">
        <Canvas opts={canvasOpts} />
      </div>
    </div>
  );
}
