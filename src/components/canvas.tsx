"use client";

import React, { useEffect, useRef } from "react";

type CanvasProps = {
  bgColor: string;
};

export function Canvas({ bgColor = "#000000" }: CanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let animationFrameId = 0;

    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      if (!context) {
        throw new Error("Context is null");
      }

      context.fillStyle = bgColor;
      context.fillRect(0, 0, context.canvas.width, context.canvas.height);

      const render = () => {
        context.fillStyle = bgColor;
        context.fillRect(0, 0, context.canvas.width, context.canvas.height);
        animationFrameId = window.requestAnimationFrame(render);
      };

      render();

      return () => {
        window.cancelAnimationFrame(animationFrameId);
      };
    }
  }, [bgColor]);

  return (
    <canvas ref={canvasRef} className="w-full h-full border border-green-500">
      Quick Banner Canvas
    </canvas>
  );
}
