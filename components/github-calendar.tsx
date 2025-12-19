"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { Section } from "./ui/section";

const GitHubCalendar = dynamic<{
  username: string;
  colorScheme?: "light" | "dark";
  fontSize?: number;
  blockSize?: number;
  blockMargin?: number;
}>(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  {
    ssr: false,
  }
);

export function GitHubContributionGraph({ username }: { username: string }) {
  const { theme } = useTheme();

  return (
    <Section>
      <h2 className="text-xl font-bold">GitHub Contributions</h2>
      <div className="w-full bg-secondary/20 rounded-xl border border-border mt-4 p-4 overflow-hidden relative">
        <div className="flex justify-center items-center scale-[0.55] xs:scale-[0.7] sm:scale-90 md:scale-100 origin-center transition-transform duration-300 py-4">
          <div className="min-w-[750px] flex justify-center">
            <GitHubCalendar
              username={username}
              colorScheme={theme === "dark" ? "dark" : "light"}
              fontSize={12}
              blockSize={10}
              blockMargin={4}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
