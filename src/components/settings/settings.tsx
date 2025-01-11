import React from "react";
import { ColorSettings } from "./color-settings";
import { TextSettings } from "./text-settings";
import { ExportSettings } from "./export-settings";
import { ImageSettings } from "./image-settings";

export function Settings() {
  return (
    <div className="w-full flex flex-col items-center justify-center space-y-4">
      <TextSettings />
      <ColorSettings />
      <ImageSettings />
      <ExportSettings />
    </div>
  );
}
