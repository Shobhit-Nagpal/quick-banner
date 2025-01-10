"use client";

import React from "react";
import { Button } from "../ui/button";
import { useBanner } from "@/hooks/use-banner";
import { downloadBanner } from "@/utils/canvas";

export function ExportSettings() {
  const { title } = useBanner();

  const handleExport = () => {
    const canvas = document.getElementById("qb-canvas") as HTMLCanvasElement;

    if (canvas) {
      downloadBanner(canvas, title);
    }
  };

  return (
    <div className="w-full bg-white p-6 rounded-lg space-y-4">
      <h2 className="text-xl font-bold text-gray-800">Export</h2>
      <div className="flex flex-col space-y-2">
        <Button onClick={handleExport} className="w-full">
          Export to PNG
        </Button>
      </div>
    </div>
  );
}
