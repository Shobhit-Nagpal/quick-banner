"use client";

import { Canvas } from "@/components/canvas/canvas";
import { canvasOpts } from "@/utils/canvas";

export default function Home() {
  return (
    <div className="w-full h-full bg-gray-500 flex flex-col items-center justify-start">
      <div className="mt-32">
        <Canvas opts={canvasOpts} />
      </div>
    </div>
  );
}
