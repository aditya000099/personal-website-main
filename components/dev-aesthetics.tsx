"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Terminal, Code2, Bug, Coffee, Zap } from "lucide-react";

// --- Dot Pattern Background ---
export function DotPattern({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full [mask-image:radial-gradient(ellipse_at_center,white,transparent)]",
        className
      )}
    >
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="dot-pattern"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="1" fill="currentColor" className="text-muted-foreground/20" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot-pattern)" />
      </svg>
    </div>
  );
}

// --- Stats Bento Grid ---
export function StatsBento() {
  const stats = [
    { label: "Lines of Code", value: "1.2M+", icon: Code2, color: "text-blue-500" },
    { label: "Bugs Fixed", value: "404", icon: Bug, color: "text-red-500" },
    { label: "Cups of Coffee", value: "∞", icon: Coffee, color: "text-amber-600" },
    { label: "Aha! Moments", value: "99", icon: Zap, color: "text-yellow-500" },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="p-4 rounded-xl border border-border bg-card/50 backdrop-blur-sm flex flex-col items-center justify-center text-center group hover:border-primary/50 transition-colors"
        >
          <stat.icon className={cn("h-5 w-5 mb-2 transition-transform group-hover:scale-110", stat.color)} />
          <div className="text-xl font-bold tracking-tight">{stat.value}</div>
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

// --- Matrix Easter Egg ---
export function MatrixEasterEgg() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Secret key combo: 'm' + 'a' + 't'
      // For simplicity, let's just use a small hidden button or a specific key
      if (e.key === "0" && e.ctrlKey) {
        setIsActive(!isActive);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isActive]);

  if (!isActive) {
    return (
      <button
        onClick={() => setIsActive(true)}
        className="fixed bottom-4 left-4 size-4 opacity-10 hover:opacity-100 transition-opacity cursor-help"
        title="[Ctrl+0] for a surprise"
      >
        <Terminal className="size-full" />
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-8 font-mono overflow-auto animate-in fade-in duration-500">
      <div className="max-w-2xl w-full text-green-500 space-y-4">
        <div className="text-xl">Initializing system... [OK]</div>
        <div className="text-sm opacity-80">
          {">"} Connection established to aditya_node_01<br />
          {">"} Accessing encrypted archives...<br />
          {">"} Bypassing firewall... [SUCCESS]<br />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="border border-green-500/30 p-4 bg-green-900/10">
            <h3 className="font-bold border-b border-green-500/30 pb-2 mb-2">QUOTES.txt</h3>
            <p className="text-xs italic">"Code is like humor. When you have to explain it, it's bad."</p>
          </div>
          <div className="border border-green-500/30 p-4 bg-green-900/10">
            <h3 className="font-bold border-b border-green-500/30 pb-2 mb-2">DEBUG_LOG</h3>
            <p className="text-xs">Warning: Coffee level low. Brain.exe may experience lag.</p>
          </div>
        </div>
        <button
          onClick={() => setIsActive(false)}
          className="mt-8 border border-green-500 px-4 py-2 hover:bg-green-500 hover:text-black transition-colors"
        >
          EXIT_SIMULATION
        </button>
      </div>
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0 bg-[length:100%_2px,3px_100%]" />
    </div>
  );
}
