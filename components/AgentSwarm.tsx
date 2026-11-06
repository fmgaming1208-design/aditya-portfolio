"use client";

import { useEffect, useState, useRef } from "react";

interface AgentCursor {
  id: number;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  vx: number;
  vy: number;
  angle: number;
  color: string;
}

const CURSOR_COLORS = [
  "#ffffff", "#ef4444", "#38bdf8", "#a855f7", "#22c55e", "#f59e0b",
  "#ec4899", "#06b6d4", "#eab308", "#8b5cf6", "#10b981", "#f43f5e",
  "#60a5fa", "#c084fc", "#4ade80", "#fb923c", "#ffffff", "#38bdf8",
];

export default function AgentSwarm({
  phase,
  atBottom = false,
}: {
  phase: "orbit" | "ready";
  atBottom?: boolean;
}) {
  const [cursors, setCursors] = useState<AgentCursor[]>([]);
  const cursorsRef = useRef<AgentCursor[]>([]);
  const frameRef = useRef<number | null>(null);
  const angleRef = useRef(0);

  useEffect(() => {
    const w = typeof window !== "undefined" ? window.innerWidth : 1280;
    const h = typeof window !== "undefined" ? window.innerHeight : 800;

    const initial: AgentCursor[] = CURSOR_COLORS.map((color, i) => {
      const a = (i / CURSOR_COLORS.length) * 2 * Math.PI;
      const r = 45 + (i % 2) * 12;
      return {
        id: i,
        x: w / 2 + Math.cos(a) * r,
        y: h / 2 + Math.sin(a) * r,
        targetX: w / 2 + Math.cos(a) * r,
        targetY: h / 2 + Math.sin(a) * r,
        vx: 0,
        vy: 0,
        angle: (a * 180) / Math.PI + 45,
        color,
      };
    });

    cursorsRef.current = initial;
    setCursors(initial);
  }, []);

  useEffect(() => {
    const assignTargets = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      if (phase === "orbit") {
        angleRef.current += 0.12;
        cursorsRef.current.forEach((c, i) => {
          const a = angleRef.current + (i / cursorsRef.current.length) * 2 * Math.PI;
          const r = 50 + Math.sin(angleRef.current * 2 + i) * 8;
          c.targetX = w / 2 + Math.cos(a) * r;
          c.targetY = h / 2 + Math.sin(a) * r;
        });
        return;
      }

      // Footer Swarm Cluster (00:51 - 00:57 in reference video)
      if (atBottom) {
        angleRef.current += 0.14;
        const centerX = w * 0.88;
        const centerY = h * 0.65;
        cursorsRef.current.forEach((c, i) => {
          const a = angleRef.current + (i / cursorsRef.current.length) * 2 * Math.PI;
          const r = 30 + (i % 4) * 14;
          c.targetX = centerX + Math.cos(a) * r;
          c.targetY = centerY + Math.sin(a) * r;
        });
        return;
      }

      const hotspots = Array.from(
        document.querySelectorAll("h1, h2, h3, button, a, [data-hotspot]")
      ).filter((el) => {
        const r = el.getBoundingClientRect();
        return r.top > 20 && r.bottom < h - 20;
      });

      cursorsRef.current.forEach((c, i) => {
        if (hotspots.length > 0 && Math.random() > 0.3) {
          const el = hotspots[(i * 3 + Math.floor(Math.random() * 2)) % hotspots.length];
          const rect = el.getBoundingClientRect();
          c.targetX = rect.left + Math.random() * rect.width;
          c.targetY = rect.top + Math.random() * rect.height;
        } else {
          c.targetX = Math.random() * (w - 100) + 50;
          c.targetY = Math.random() * (h - 100) + 50;
        }
      });
    };

    const interval = setInterval(assignTargets, phase === "orbit" || atBottom ? 70 : 350);

    const tick = () => {
      cursorsRef.current.forEach((c) => {
        const dx = c.targetX - c.x;
        const dy = c.targetY - c.y;

        const spring = phase === "orbit" ? 0.16 : 0.08;
        const damping = 0.8;

        c.vx = (c.vx + dx * spring) * damping;
        c.vy = (c.vy + dy * spring) * damping;

        c.x += c.vx;
        c.y += c.vy;

        if (Math.abs(c.vx) > 0.2 || Math.abs(c.vy) > 0.2) {
          c.angle = (Math.atan2(c.vy, c.vx) * 180) / Math.PI + 45;
        }
      });

      setCursors([...cursorsRef.current]);
      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);

    return () => {
      clearInterval(interval);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [phase, atBottom]);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {cursors.map((c) => (
        <div
          key={c.id}
          style={{
            transform: `translate3d(${c.x}px, ${c.y}px, 0)`,
            willChange: "transform",
          }}
          className="absolute left-0 top-0 transition-opacity duration-300"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill={c.color}
            stroke="#000000"
            strokeWidth="1.5"
            style={{
              transform: `rotate(${c.angle}deg)`,
              transformOrigin: "top left",
            }}
            className="drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
          >
            <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
          </svg>
        </div>
      ))}
    </div>
  );
}