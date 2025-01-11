import { CanvasOpts, ImageOpts, TextOpts } from "@/types/canvas";

export const canvasOpts: CanvasOpts = {
  context: "2d",
};

export const downloadBanner = (canvas: HTMLCanvasElement, title: string) => {
  const imageUrl = canvas.toDataURL("image/png");

  const link = document.createElement("a");
  link.href = imageUrl;
  const fileName = title.toLowerCase().split(" ").join("-");

  link.download = `${fileName}-og.png`;
  link.click();
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
    context.font = `${fontSize}px SFProDisplay`;

    // Bold opts
    context.font = opts?.bold ? `bold ${context.font}` : context.font;

    // Center text horizontally and vertically
    context.textAlign = opts?.textAlign ?? "center";
    context.textBaseline = opts?.textBaseline ?? "middle";

    context.fillText(text, posX, posY);

    context.restore();
  }
};

export const drawImage = (
  context: RenderingContext,
  image: HTMLImageElement,
  posX: number,
  posY: number,
  opts?: ImageOpts,
) => {
  if (context instanceof CanvasRenderingContext2D) {
    context.save();

    const imageWidth = opts?.width ?? context.canvas.width / 2;
    const imageHeight = opts?.width ?? context.canvas.height / 2;

    context.drawImage(image, posX, posY, imageWidth, imageHeight);

    context.restore();
  }
};

/** 
  Utils for testing 
 */

export function _drawGrid(context: RenderingContext) {
  if (context instanceof CanvasRenderingContext2D) {
    context.lineWidth = 2;

    //Draw vertical line
    context.beginPath();
    context.moveTo(context.canvas.width / 2, 0);
    context.lineTo(context.canvas.width / 2, context.canvas.height);
    context.stroke();

    //Draw horizontal line
    context.beginPath();
    context.moveTo(0, context.canvas.height / 2);
    context.lineTo(context.canvas.width, context.canvas.height / 2);
    context.stroke();
  }
}
