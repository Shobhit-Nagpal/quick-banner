"use client";

import React from "react";
import { Input } from "../ui/input";
import { useBanner } from "@/hooks/use-banner";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export function TextSettings() {
  const { title, description, setTitle, setDescription } = useBanner();
  return (
    <section>
      <div>
        <Label>Title</Label>
        <Input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>

      <div>
        <Label>Description</Label>
        <Textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
        />
      </div>
    </section>
  );
}
