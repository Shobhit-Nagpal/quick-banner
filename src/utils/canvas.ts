import { CanvasOpts, TextOpts } from "@/types/canvas";

export const canvasOpts: CanvasOpts = {
  context: "2d",
};

export const convertCanvasToImage = (canvas: HTMLCanvasElement) => {
  return canvas.toDataURL("image/png");
};

export function resizeCanvas(canvas: HTMLCanvasElement) {
  const { width, height } = canvas.getBoundingClientRect();

  if (canvas.width !== width || canvas.height !== height) {
    const { devicePixelRatio: ratio = 1 } = window;
    const context = canvas.getContext("2d");
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    context?.scale(ratio, ratio);

    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    return true;
  }

  return false;
}

export const predraw = (
  context: RenderingContext,
  canvas: HTMLCanvasElement,
) => {
  if (context instanceof CanvasRenderingContext2D) {
    context.save();
    resizeCanvas(canvas);
    const { width, height } = context.canvas;
    context.clearRect(0, 0, width, height);
  }
};

export const drawText = (
  context: RenderingContext,
  text: string,
  posX: number,
  posY: number,
  opts?: TextOpts,
) => {
  if (context instanceof CanvasRenderingContext2D) {
    context.save();

    context.fillStyle = opts?.color ?? "#FFFFFF";

    const fontSize = opts?.size ?? 16;

    context.font = `${fontSize}px sans-serif`;

    context.textAlign = opts?.align ?? "center";

    context.fillText(text, posX, posY);

    context.restore();
  }
};
