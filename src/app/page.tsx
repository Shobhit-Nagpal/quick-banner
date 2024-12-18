"use client";

import { Canvas } from "@/components/canvas";
import { canvasOpts } from "@/utils/canvas";
import { useState } from "react";

export default function Home() {
  const [bgColor, setBgColor] = useState<string>("#FFFFFF");

  return (
    <div className="w-full h-full bg-white flex flex-col items-center">
      <input value={bgColor} onChange={(e) => setBgColor(e.target.value)} />
      <div className="w-full max-w-7xl">
        <Canvas opts={canvasOpts} bgColor={bgColor} />
      </div>
    </div>
  );
}
