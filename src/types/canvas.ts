export type CanvasOpts = {
  context?: "2d" | "webgl" | "webgl2" | "bitmaprenderer";
  predraw?: (context: RenderingContext, canvas: HTMLCanvasElement) => void;
};

export type TextOpts = {
  size?: number;
  bold?: boolean;
  textAlign?: "end" | "left" | "right" | "start" | "center";
  textBaseline?:
    | "middle"
    | "top"
    | "bottom"
    | "hanging"
    | "alphabetic"
    | "ideographic";
  color?: string;
};

export type ImageOpts = {
  width?: number;
  height?: number;
};
