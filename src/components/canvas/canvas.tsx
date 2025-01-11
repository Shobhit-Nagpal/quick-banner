"use client";

import { useBanner } from "@/hooks/use-banner";
import { useCanvas } from "@/hooks/use-canvas";
import { CanvasOpts } from "@/types/canvas";
import { _drawGrid, drawImage, drawText, predraw } from "@/utils/canvas";
import React, { useCallback } from "react";

type CanvasProps = {
  opts: CanvasOpts;
};

export function Canvas({ opts }: CanvasProps) {
  const { bgColor, title, description, link, img } = useBanner();

  const draw = useCallback(
    (context: RenderingContext) => {
      // Create image
      const image = new Image();
      image.src = img;

      if (context instanceof CanvasRenderingContext2D) {
        context.fillStyle = bgColor;
        context.fillRect(0, 0, context.canvas.width, context.canvas.height);

        drawImage(
          context,
          image,
          context.canvas.width / 4,
          context.canvas.height / 1.7,
        );

        // Title
        const titleX = context.canvas.width / 2;
        const titleY = context.canvas.height / 6;
        drawText(context, title, titleX, titleY, { size: 48, bold: true });

        // Description
        const desX = context.canvas.width / 2;
        const desY = context.canvas.height / 3.5;
        drawText(context, description, desX, desY, { size: 28 });

        // Link
        const linkX = context.canvas.width / 2;
        const linkY = context.canvas.height / 2.25;
        drawText(context, link, linkX, linkY, { size: 20 });
      }
    },
    [bgColor, title, description, link, img],
  );

  opts.predraw = predraw;

  const { canvasRef } = useCanvas({ draw, opts });

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={420}
      className="rounded-sm"
      id="qb-canvas"
    >
      Quick Banner Canvas
    </canvas>
  );
}
