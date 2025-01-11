"use client";

import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useBanner } from "@/hooks/use-banner";
import { Image } from "lucide-react";

export function ImageSettings() {
  const { setImg } = useBanner();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImg(imageUrl);
    }
  };

  return (
    <section className="bg-white p-6 rounded-lg max-w-3xl mx-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Image</h2>
      <div className="flex items-center space-x-4">
        <Label
          htmlFor="image-upload"
          className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors"
        >
          <Image className="w-6 h-6 text-gray-500" />
        </Label>
        <div className="flex-grow">
          <Input
            id="image-upload"
            type="file"
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />
          <Label
            htmlFor="image-upload"
            className="text-sm text-gray-600 cursor-pointer hover:text-gray-800 transition-colors"
          >
            Choose an image
          </Label>
          <p className="text-xs text-gray-400 mt-1">SVG, PNG, JPG</p>
        </div>
      </div>
    </section>
  );
}
