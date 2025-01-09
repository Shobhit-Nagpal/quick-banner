export type CanvasOpts = {
  context?: "2d" | "webgl" | "webgl2" | "bitmaprenderer";
  predraw?: (context: RenderingContext, canvas: HTMLCanvasElement) => void;
};

export type TextOpts = {
  size?: number;
  bold?: boolean;
  align?: "end" | "left" | "right" | "start" | "center";
  color?: string;
};
