export type CanvasOpts = {
  context?: "2d" | "webgl" | "webgl2" | "bitmaprenderer";
  predraw?: (context: RenderingContext, canvas: HTMLCanvasElement) => void;
};
