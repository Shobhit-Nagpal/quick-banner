import { CanvasOpts } from "@/types/canvas";
import { useEffect, useRef } from "react";

interface CanvasHookProps {
  draw: (ctx: RenderingContext) => void;
  opts?: CanvasOpts;
}

export function useCanvas({ draw, opts = {} }: CanvasHookProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let animationFrameId = 0;

    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext(opts.context || "2d");

      if (!context) {
        throw new Error("Context is null");
      }

      if (context instanceof CanvasRenderingContext2D) {
        if (opts.predraw) {
          opts.predraw(context, canvas);
        }
      }

      const render = () => {
        draw(context);
        animationFrameId = window.requestAnimationFrame(render);
      };

      render();

      return () => {
        window.cancelAnimationFrame(animationFrameId);
      };
    }
  }, [draw]);

  return {
    canvasRef,
  };
}
