"use client";

import { useBanner } from "@/hooks/use-banner";
import { useCanvas } from "@/hooks/use-canvas";
import { CanvasOpts } from "@/types/canvas";
import { drawText, predraw } from "@/utils/canvas";
import React, { useCallback } from "react";

type CanvasProps = {
  opts: CanvasOpts;
};

export function Canvas({ opts }: CanvasProps) {
  const { bgColor, title, description } = useBanner();

  const draw = useCallback(
    (context: RenderingContext) => {
      const ogImg = new Image();
      ogImg.src = "/opengraph-image.png";
      if (context instanceof CanvasRenderingContext2D) {
        context.fillStyle = bgColor;
        context.fillRect(0, 0, context.canvas.width, context.canvas.height);

        //        context.drawImage(
        //          ogImg,
        //          context.canvas.width / 6,
        //          context.canvas.height / 2.3,
        //          context.canvas.width / 2,
        //          context.canvas.height / 2,
        //        );

        // Title
        const titleX = context.canvas.width / 2;
        const titleY = context.canvas.height / 2;
        drawText(context, title, titleX, titleY, 10);

        //        // Description
        //        const desX = context.canvas.width / 2;
        //        const desY = context.canvas.height / 3;
        //        drawText(context, description, desX, desY, 24);
      }
    },
    [bgColor, title, description],
  );

  opts.predraw = predraw;

  const { canvasRef } = useCanvas({ draw, opts });

  return (
    <canvas ref={canvasRef} className="rounded-sm">
      Quick Banner Canvas
    </canvas>
  );
}
