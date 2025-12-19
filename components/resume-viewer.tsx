"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Section } from "./ui/section";
import { Maximize2, Minimize2, Download, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export function ResumeViewer({ resumeUrl }: { resumeUrl: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Resume</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" asChild>
            <a href={resumeUrl} download="Aditya_Aggarwal_Resume.pdf">
              <Download className="mr-2 h-4 w-4" />
              Download
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Open
            </a>
          </Button>
        </div>
      </div>

      <div
        className={cn(
          "relative overflow-hidden rounded-xl border border-border bg-background transition-all duration-500 ease-in-out",
          isExpanded ? "h-[800px]" : "h-[300px]"
        )}
      >
        <iframe
          src={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=0`}
          className="w-full h-full border-none"
          title="Resume Preview"
        />

        {!isExpanded && (
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent backdrop-blur-[2px] flex items-end justify-center pb-8 pointer-events-none">
            <Button
              variant="secondary"
              className="pointer-events-auto shadow-lg border border-border/50 animate-in fade-in zoom-in duration-300"
              onClick={() => setIsExpanded(true)}
            >
              <Maximize2 className="mr-2 h-4 w-4" />
              Expand Resume
            </Button>
          </div>
        )}

        {isExpanded && (
          <div className="absolute bottom-4 right-4 flex gap-2">
            <Button
              variant="secondary"
              size="sm"
              className="shadow-lg border border-border/50"
              onClick={() => setIsExpanded(false)}
            >
              <Minimize2 className="mr-2 h-4 w-4" />
              Collapse
            </Button>
          </div>
        )}
      </div>
    </Section>
  );
}
