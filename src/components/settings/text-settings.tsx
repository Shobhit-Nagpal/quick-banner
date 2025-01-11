"use client";

import React from "react";
import { Input } from "../ui/input";
import { useBanner } from "@/hooks/use-banner";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export function TextSettings() {
  const { title, description, link, setTitle, setDescription, setLink } =
    useBanner();

  return (
    <section className="bg-white p-6 rounded-lg max-w-3xl mx-auto space-y-6">
      <h2 className="text-xl font-bold text-gray-800">Text</h2>
      <div className="flex flex-col space-y-2">
        <Label className="text-sm font-semibold text-gray-700">Title</Label>
        <Input
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter the title"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <Label className="text-sm font-semibold text-gray-700">
          Description
        </Label>
        <Textarea
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          placeholder="Write the description here"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <Label className="text-sm font-semibold text-gray-700">Link</Label>
        <Input
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="Enter the link"
        />
      </div>
    </section>
  );
}
