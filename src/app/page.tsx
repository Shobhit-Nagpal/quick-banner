"use client";

import { Canvas } from "@/components/canvas";
import { useState } from "react";

export default function Home() {
  const [bgColor, setBgColor] = useState<string>("#FFFFFF");
  const [text, setText] = useState<string>("");

  return (
    <div className="w-full h-full bg-white flex flex-col items-center">
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
      <div className="w-full max-w-7xl">
        <Canvas bgColor={bgColor} text={text} />
      </div>
    </div>
  );
}
