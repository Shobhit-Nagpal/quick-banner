"use client";

import React, { useEffect, useRef } from "react";

type CanvasProps = {
  bgColor: string;
  text: string;
};

export function Canvas({ bgColor, text }: CanvasProps) {
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
        
        context.fillStyle = "#000000"
        context.fillText(text, canvas.width / 3, canvas.height / 2)
        animationFrameId = window.requestAnimationFrame(render);
      };

      render();

      return () => {
        window.cancelAnimationFrame(animationFrameId);
      };
    }
  }, [bgColor, text]);

  return (
    <canvas ref={canvasRef} className="w-full h-full border border-green-500">
      Quick Banner Canvas
    </canvas>
  );
}
