"use client";

import { useBanner } from "@/hooks/use-banner";
import { useCanvas } from "@/hooks/use-canvas";
import { CanvasOpts } from "@/types/canvas";
import React, { useCallback } from "react";

type CanvasProps = {
  opts: CanvasOpts;
};

function resizeCanvas(canvas: HTMLCanvasElement) {
  const { width, height } = canvas.getBoundingClientRect();

  if (canvas.width !== width || canvas.height !== height) {
    const { devicePixelRatio: ratio = 1 } = window;
    const context = canvas.getContext("2d");
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    context?.scale(ratio, ratio);
    return true;
  }

  return false;
}

const predraw = (context: RenderingContext, canvas: HTMLCanvasElement) => {
  if (context instanceof CanvasRenderingContext2D) {
    context.save();
    resizeCanvas(canvas);
    const { width, height } = context.canvas;
    context.clearRect(0, 0, width, height);
  }
};

export function Canvas({ opts }: CanvasProps) {
  const { bgColor, title } = useBanner();
  const draw = useCallback(
    (context: RenderingContext) => {
      const ogImg = new Image();
      ogImg.src = "/opengraph-image.png";

      if (context instanceof CanvasRenderingContext2D) {
        context.fillStyle = bgColor;
        context.fillRect(0, 0, context.canvas.width, context.canvas.height);

        context.drawImage(
          ogImg,
          context.canvas.width / 6,
          context.canvas.height / 2.3,
          context.canvas.width / 2,
          context.canvas.height / 2,
        );

        // Render text at last --> top most render on canvas
        context.fillStyle = "#FFFFFF";
        const textX = context.canvas.width / 2 - title.length + title.length / 2 
        context.fillText(
          title,
          textX,
          context.canvas.height / 6,
        );
      }
    },
    [bgColor, title],
  );

  opts.predraw = predraw;

  const { canvasRef } = useCanvas({ draw, opts });

  return (
    <canvas ref={canvasRef} className="w-full h-full border border-green-500">
      Quick Banner Canvas
    </canvas>
  );
}
