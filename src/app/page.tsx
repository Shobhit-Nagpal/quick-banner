"use client";

import { Canvas } from "@/components/canvas";
import { canvasOpts } from "@/utils/canvas";
import { useState } from "react";

export default function Home() {
  const [bgColor, setBgColor] = useState<string>("#002679");
  const [text, setText] = useState<string>("Memer");

  return (
    <div className="w-full h-full bg-gray-500 flex flex-col items-center">
      <label className="text-black">BG Color</label>
      <input
        value={bgColor}
        className="border border-black"
        onChange={(e) => setBgColor(e.target.value)}
      />

      <label className="text-black">Text</label>
      <textarea
        value={text}
        className="border border-black"
        onChange={(e) => setText(e.target.value)}
      />
      <div className="w-full max-w-7xl p-4">
        <Canvas bgColor={bgColor} text={text} opts={canvasOpts} />
      </div>
    </div>
  );
}
