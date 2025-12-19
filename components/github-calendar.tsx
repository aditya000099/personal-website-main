"use client";

import React from "react";
import {GitHubCalendar} from "react-github-calendar";
import { useTheme } from "next-themes";
import { Section } from "./ui/section";

export function GitHubContributionGraph({ username }: { username: string }) {
  const { theme } = useTheme();

  return (
    <Section>
      <h2 className="text-xl font-bold">GitHub Contributions</h2>
      <div className="w-full bg-secondary/20 rounded-xl border border-border mt-4 p-4 overflow-hidden">
        <div className="flex justify-center items-center scale-[0.65] sm:scale-90 md:scale-100 origin-center transition-transform duration-300">
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
