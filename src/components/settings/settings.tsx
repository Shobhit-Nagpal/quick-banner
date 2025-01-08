import React from "react";
import { ColorSettings } from "./color-settings";
import { TextSettings } from "./text-settings";
import { ExportButton } from "./export-button";

export function Settings() {
  return (
    <>
      <TextSettings />
      <ColorSettings />
      <ExportButton />
    </>
  );
}
