import { CanvasOpts } from "@/types/canvas";

export const canvasOpts: CanvasOpts = {
  context: "2d",
};

export const convertCanvasToImage = (canvas: HTMLCanvasElement) => {
  return canvas.toDataURL("image/png");
};
