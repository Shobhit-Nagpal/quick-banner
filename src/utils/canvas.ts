import { CanvasOpts } from "@/types/canvas";

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
  size: number,
  color?: string,
) => {
  if (context instanceof CanvasRenderingContext2D) {
    context.save();

    if (color) {
      context.fillStyle = color;
    } else {
      context.fillStyle = "#FFFFFF";
    }

    context.font = `${size}px sans-serif`;

    context.textAlign = "center";

    context.fillText(text, posX, posY);

    context.restore();

    //Test
    // draw some guidelines just for testing
    context.beginPath();
    context.moveTo(posX, 0);
    context.lineTo(posX, context.canvas.height);
    context.moveTo(0, posY);
    context.lineTo(context.canvas.width, posY);
    context.stroke();
  }
};
