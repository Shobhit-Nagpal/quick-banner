"use client";

import React from "react";
import { Button } from "../ui/button";
import { useBanner } from "@/hooks/use-banner";

export function ExportButton() {
  const { title } = useBanner();
  const handleExport = () => {
    const canvas = document.getElementById("qb-canvas") as HTMLCanvasElement;

    if (canvas) {
      const imageUrl = canvas.toDataURL("image/png");

      const link = document.createElement("a");
      link.href = imageUrl;
      const fileName = title.toLowerCase().split(" ").join("-");

      link.download = `${fileName}-og.png`;
      link.click();
    }
  };

  return <Button onClick={handleExport}>Export to PNG</Button>;
}
