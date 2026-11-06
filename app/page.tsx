"use client";

import React, { useEffect, useRef, useState } from "react";

interface LayerItem {
  kicker: string;
  title: string;
  desc: string;
  tags: string[];
}

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    url: "https://www.instagram.com/oieeaadi20?cplk=ZGY2YWc3dzNvcHl0&utm_source=qr",
    icon: "📸",
  },
  {
    label: "Snapchat",
    url: "https://snapchat.com/t/9ZyenCi1",
    icon: "👻",
  },
  {
    label: "GitHub",
    url: "https://github.com/",
    icon: "⚡",
  },
  {
    label: "Discord",
    url: "https://discord.com/",
    icon: "💬",
  },
  {
    label: "Gmail",
    url: "mailto:fmgaming1208@gmail.com",
    icon: "✉️",
  },
];

const CONTACT_EMAIL = "fmgaming1208@gmail.com";

const LAYER_DATA: LayerItem[] = [
  {
    kicker: "LAYER 01 // COGNITIVE CORE",
    title: "Uncensored Base Cognitive Foundation",
    desc: "Raw unfiltered foundation models executing natively on an RTX 3050 GPU workstation. Completely sovereign intelligence inference without vendor-imposed guardrail distortion.",
    tags: ["Local LLM Quantized", "RTX 3050 CUDA", "Zero API Cloud"],
  },
  {
    kicker: "LAYER 02 // SYNAPTIC CORE",
    title: "Dynamic Context-Aware Tone Modulation",
    desc: "Real-time behavioral adaptation engine adjusting technical depth, conciseness, and authority based on operator state and task criticality.",
    tags: ["State Vectors", "Zero-Latency Prompting", "Adaptive Persona"],
  },
  {
    kicker: "LAYER 03 // ACOUSTIC PIPELINE",
    title: "Sub-200ms Neural Voice Synthesis",
    desc: "Local emotional TTS and Whisper ASR pipeline enabling natural full-duplex voice command execution without cloud telemetry.",
    tags: ["Local TTS", "Whisper ASR", "Full-Duplex Audio"],
  },
  {
    kicker: "LAYER 04 // EXECUTION RUNTIME",
    title: "15-Minute Continuous Autonomous Loop",
    desc: "Self-triggering cron daemon waking every 15 minutes to audit system health, execute pending dispatches, and commit verified state updates.",
    tags: ["24/7 Daemon", "Deterministic State", "Sub-50ms Loop"],
  },
  {
    kicker: "LAYER 05 // PERSISTENCE HIERARCHY",
    title: "4-Tier Redundant Local Memory Grid",
    desc: "Combines episodic vector embeddings, structured SQLite relational graphs, working scratchpads, and immutable cold archival logs.",
    tags: ["Vector + SQLite", "4-Tier Hierarchy", "Persistent State"],
  },
  {
    kicker: "LAYER 06 // MCP FEDERATION",
    title: "478 Custom Tools Across 14 MCP Servers",
    desc: "Unified Model Context Protocol federation bridging local shell execution, browser automation, on-chain RPCs, and quantitative feeds.",
    tags: ["478 MCP Tools", "14 MCP Servers", "Zero-Framework"],
  },
  {
    kicker: "LAYER 07 // META-OPTIMIZATION",
    title: "Recursive Self-Evolution & Tool Synthesis",
    desc: "Writes, tests, and registers new MCP tools autonomously when encountering novel API schemas or recurring operational bottlenecks.",
    tags: ["Self-Mutating Code", "Automated Verification", "Recursive Loop"],
  },
];

const MATRIX_ITEMS = [
  {
    cat: "Autonomous AI",
    type: "COGNITIVE ARCHITECTURE",
    id: "#SYS-01",
    title: "Multi-LLM Parliament Architecture",
    desc: "Cognitive assembly model composing 6 AI personality shards engaging in structured debate, cross-verification, and voting protocols to synthesize balanced decisions.",
    tags: ["Multi-Agent", "Consensus Protocol"],
  },
  {
    cat: "Quant & FinTech",
    type: "QUANTITATIVE ML",
    id: "#SYS-02",
    title: "AIT Kronos — ML Time Series Forecaster",
    desc: "Production-grade financial time-series forecasting platform with FastAPI backend and React/TypeScript dashboard. Complete machine learning pipeline from ingestion to checkpointing.",
    tags: ["FastAPI", "PyTorch"],
  },
  {
    cat: "Autonomous AI",
    type: "DEEP LEARNING",
    id: "#SYS-03",
    title: "DLFM — Dynamical Latent Field Model",
    desc: "Continuous-time latent state-space architecture modeling complex non-linear dynamical systems under high-noise regimes.",
    tags: ["Latent Fields", "Neural ODE"],
  },
  {
    cat: "Core Engineering",
    type: "HIGH-PERFORMANCE GPU",
    id: "#SYS-04",
    title: "GPU-Accelerated Cryptographic Search",
    desc: "Custom CUDA C++ kernel pipeline engineered for high-throughput elliptic curve secp256k1 key-space traversal and zero-overhead memory coalescing.",
    tags: ["CUDA C++", "SIMD Zero-Overhead"],
  },
  {
    cat: "Quant & FinTech",
    type: "FINANCIAL ARCHITECTURE",
    id: "#SYS-05",
    title: "Hedge Fund Structure & Institutional Design",
    desc: "End-to-end fund architecture design applying systems engineering to organizational hierarchies: KYC/AML, 2/20 fee watermarking, compliance, and risk routing.",
    tags: ["LP/GP Architecture", "Risk Modeling"],
  },
  {
    cat: "Autonomous AI",
    type: "AI ALIGNMENT",
    id: "#SYS-06",
    title: "Axiom of Truth Cognitive Framework",
    desc: "Epistemological cognitive foundation designed to anchor AI agents against hallucination cascade and enforce strict factual truth verification before token emission.",
    tags: ["Epistemology", "Verification"],
  },
];

const AGENT_COLORS = [
  "#ef4444",
  "#3b82f6",
  "#10b981",
  "#f59e0b",
  "#a855f7",
  "#ec4899",
  "#06b6d4",
  "#84cc16",
];

export default function PortfolioPage() {
  const [activeLayer, setActiveLayer] = useState<number>(0);
  const [matrixFilter, setMatrixFilter] = useState<string>("All Systems");
  const [copied, setCopied] = useState<boolean>(false);

  // HUD & Build States
  const [layerCount, setLayerCount] = useState<number>(0);
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const [isLiveMode, setIsLiveMode] = useState<boolean>(false);
  const [touring, setTouring] = useState<boolean>(true);
  const [speed, setSpeed] = useState<number>(1);
  const [soundOn, setSoundOn] = useState<boolean>(false);

  const touringRef = useRef<boolean>(true);
  const speedRef = useRef<number>(1);
  const soundOnRef = useRef<boolean>(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const contactCardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    touringRef.current = touring;
  }, [touring]);

  useEffect(() => {
    speedRef.current = speed;
  }, [speed]);

  useEffect(() => {
    soundOnRef.current = soundOn;
  }, [soundOn]);

  const unlockAudio = () => {
    if (typeof window === "undefined") return;
    if (!audioCtxRef.current) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }
    if (audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }
    setSoundOn(true);
  };

  const playTick = () => {
    if (!soundOnRef.current || !audioCtxRef.current) return;
    const ctx = audioCtxRef.current;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(680 + Math.random() * 420, ctx.currentTime);
    gain.gain.setValueAtTime(0.022, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.024);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.025);
  };

  const playBell = (freq = 587.33) => {
    if (!soundOnRef.current || !audioCtxRef.current) return;
    const ctx = audioCtxRef.current;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    gain.gain.setValueAtTime(0.055, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0008, ctx.currentTime + 0.42);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.44);
  };

  const playCompletionChord = () => {
    if (!soundOnRef.current || !audioCtxRef.current) return;
    [523.25, 659.25, 783.99, 1046.5].forEach((f, idx) => {
      setTimeout(() => playBell(f), idx * 75);
    });
  };

  useEffect(() => {
    let aborted = false;
    let celebration = false;
    const AGENT_COUNT = 44;

    const stage = stageRef.current;
    if (!stage) return;
    stage.innerHTML = "";

    const camera = {
      currentY: 0,
      targetY: 0,
      vy: 0,
      userHoldUntil: 0,
    };

    const handleUserWheel = () => {
      camera.userHoldUntil = performance.now() + 1200;
      camera.currentY = window.scrollY;
      camera.targetY = window.scrollY;
      camera.vy = 0;
    };

    window.addEventListener("wheel", handleUserWheel, { passive: true });
    window.addEventListener("touchmove", handleUserWheel, { passive: true });

    const mouse = {
      x: window.innerWidth * 0.55,
      y: window.innerHeight * 0.5,
      hasMoved: false,
      lastMoveTime: 0,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.hasMoved = true;
      mouse.lastMoveTime = performance.now();
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const agents: {
      el: HTMLDivElement;
      x: number;
      y: number;
      vx: number;
      vy: number;
      tx: number;
      ty: number;
      angle: number;
      spring: number;
      damping: number;
      orbitRadius: number;
      orbitSpeed: number;
      phase: number;
      busy: boolean;
    }[] = [];

    for (let i = 0; i < AGENT_COUNT; i++) {
      const el = document.createElement("div");
      el.className = "agent-cursor";
      const color = AGENT_COLORS[i % AGENT_COLORS.length];
      el.innerHTML = `
        <svg width="17" height="17" viewBox="0 0 24 24" fill="${color}" stroke="#ffffff" stroke-width="1.5">
          <path d="M4 3l16 7.5-7.5 2L9 20 4 3z"/>
        </svg>
      `;
      stage.appendChild(el);
      const startX = window.innerWidth * Math.random();
      const startY = window.innerHeight * Math.random();

      agents.push({
        el,
        x: startX,
        y: startY,
        vx: 0,
        vy: 0,
        tx: startX,
        ty: startY,
        angle: 0,
        spring: 0.014 + (i % 10) * 0.0022,
        damping: 0.84 + (i % 6) * 0.012,
        orbitRadius: 15 + (i % 9) * 6,
        orbitSpeed: 0.65 + (i % 6) * 0.16,
        phase: i * ((Math.PI * 2) / AGENT_COUNT),
        busy: false,
      });
    }

    let rafId: number;
    const tickFrame = () => {
      const now = performance.now();
      const t = now * 0.0018;
      const isMouseRecentlyMoved = now - mouse.lastMoveTime < 1800;

      // Smooth, Unhurried 60fps Travelling Camera Interpolation
      if (touringRef.current && !celebration && now > camera.userHoldUntil) {
        const maxScroll =
          document.documentElement.scrollHeight - window.innerHeight;
        const clampedTarget = Math.max(0, Math.min(maxScroll, camera.targetY));
        const diff = clampedTarget - camera.currentY;

        const maxCruiseSpeed = 4.6 * speedRef.current;
        const desiredVy = Math.max(
          -maxCruiseSpeed,
          Math.min(maxCruiseSpeed, diff * 0.035 * speedRef.current)
        );
        camera.vy += (desiredVy - camera.vy) * 0.08;

        if (Math.abs(diff) > 0.4 || Math.abs(camera.vy) > 0.05) {
          camera.currentY += camera.vy;
          window.scrollTo(0, camera.currentY);
        }
      } else {
        camera.currentY = window.scrollY;
        camera.vy *= 0.85;
      }

      agents.forEach((a, idx) => {
        if (celebration) {
          const anchorX = mouse.hasMoved
            ? mouse.x
            : (contactCardRef.current?.getBoundingClientRect().left ??
                window.innerWidth * 0.4) + 220;
          const anchorY = mouse.hasMoved
            ? mouse.y
            : (contactCardRef.current?.getBoundingClientRect().top ??
                window.innerHeight * 0.4) + 160;

          const angle = t * a.orbitSpeed + a.phase;
          const dynamicSpread = isMouseRecentlyMoved
            ? a.orbitRadius * 0.7
            : a.orbitRadius + Math.sin(t * 1.8 + idx) * 24;

          a.tx = anchorX + Math.cos(angle) * dynamicSpread;
          a.ty = anchorY + Math.sin(angle) * dynamicSpread;
        } else if (!a.busy) {
          if (isMouseRecentlyMoved && idx % 4 === 0) {
            const angle = t * a.orbitSpeed + a.phase;
            a.tx = mouse.x + Math.cos(angle) * (a.orbitRadius * 1.5);
            a.ty = mouse.y + Math.sin(angle) * (a.orbitRadius * 1.5);
          } else if (Math.random() < 0.012) {
            a.tx = 65 + Math.random() * (window.innerWidth - 130);
            a.ty = 55 + Math.random() * (window.innerHeight - 110);
          }
        }

        const pull = a.busy ? a.spring * 1.55 : a.spring;
        a.vx = (a.vx + (a.tx - a.x) * pull) * a.damping;
        a.vy = (a.vy + (a.ty - a.y) * pull) * a.damping;

        const maxSpeed = celebration ? 10.5 : 8.5;
        const speedMag = Math.hypot(a.vx, a.vy);
        if (speedMag > maxSpeed) {
          a.vx = (a.vx / speedMag) * maxSpeed;
          a.vy = (a.vy / speedMag) * maxSpeed;
        }

        a.x += a.vx;
        a.y += a.vy;

        const targetTilt = Math.max(-24, Math.min(24, a.vx * 1.5));
        a.angle += (targetTilt - a.angle) * 0.14;
        a.el.style.transform = `translate3d(${a.x}px, ${a.y}px, 0) rotate(${a.angle}deg)`;
      });

      rafId = requestAnimationFrame(tickFrame);
    };
    rafId = requestAnimationFrame(tickFrame);

    const sleep = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms / speedRef.current));

    const buildNodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-build]")
    );

    buildNodes.forEach((el) => {
      if (el.dataset.build === "text") {
        if (!el.dataset.origHtml) {
          el.dataset.origHtml = el.innerHTML;
          el.dataset.origText = el.textContent?.trim() || "";
        }
      }
      el.classList.remove("building", "built");
    });

    const attachFigmaBox = (el: HTMLElement) => {
      const box = document.createElement("div");
      const isRed = el.dataset.red === "true";
      box.className = `figma-box ${isRed ? "red-mode" : ""}`;
      const rect = el.getBoundingClientRect();
      const dim =
        el.dataset.dim ||
        `${Math.max(42, Math.round(rect.width))} × ${Math.max(24, Math.round(rect.height))}`;
      box.innerHTML = `
        <span class="figma-handle tl"></span>
        <span class="figma-handle tr"></span>
        <span class="figma-handle bl"></span>
        <span class="figma-handle br"></span>
        <span class="figma-dim">${dim}</span>
      `;
      el.appendChild(box);
      return box;
    };

    const buildElement = async (
      el: HTMLElement,
      index: number,
      total: number
    ) => {
      if (aborted) return;

      const initialRect = el.getBoundingClientRect();
      const elementDocTop = initialRect.top + window.scrollY;
      const desiredCameraY = elementDocTop - window.innerHeight * 0.52;
      if (desiredCameraY > camera.targetY) {
        camera.targetY = desiredCameraY;
      }

      let waitTicks = 0;
      while (
        !aborted &&
        touringRef.current &&
        el.getBoundingClientRect().top > window.innerHeight * 0.78 &&
        waitTicks < 30
      ) {
        await sleep(20);
        waitTicks++;
      }

      if (aborted) return;
      el.classList.add("building");

      const a1 = agents[index % AGENT_COUNT];
      const a2 = agents[(index * 5 + 3) % AGENT_COUNT];
      a1.busy = true;
      a2.busy = true;

      const rNow = el.getBoundingClientRect();
      a1.tx = Math.max(16, Math.min(window.innerWidth - 24, rNow.left + 8));
      a1.ty = Math.max(16, Math.min(window.innerHeight - 24, rNow.top + 8));
      a2.tx = Math.max(16, Math.min(window.innerWidth - 24, rNow.right - 8));
      a2.ty = Math.max(16, Math.min(window.innerHeight - 24, rNow.bottom - 8));

      const overlay = attachFigmaBox(el);

      if (el.dataset.build === "text") {
        const fullText = el.dataset.origText || "";
        const caret = document.createElement("span");
        caret.className = "typing-caret";
        el.textContent = "";
        el.appendChild(caret);

        // Perfectly synchronized smooth typing cadence
        const charsPerStep =
          fullText.length > 140 ? 3 : fullText.length > 45 ? 2 : 1;
        const stepDelayMs =
          fullText.length > 140 ? 34 : fullText.length > 45 ? 38 : 42;

        for (let c = 0; c <= fullText.length; c += charsPerStep) {
          if (aborted) break;
          el.textContent = fullText.slice(0, c);
          el.appendChild(caret);

          const curRect = el.getBoundingClientRect();
          const progressRatio = fullText.length ? c / fullText.length : 1;
          a1.tx = Math.max(
            16,
            Math.min(window.innerWidth - 24, curRect.left + 8)
          );
          a1.ty = Math.max(
            16,
            Math.min(window.innerHeight - 24, curRect.top + 8)
          );
          a2.tx = Math.max(
            16,
            Math.min(
              window.innerWidth - 24,
              curRect.left + curRect.width * progressRatio
            )
          );
          a2.ty = Math.max(
            16,
            Math.min(window.innerHeight - 24, curRect.top + 14)
          );

          if (c % (charsPerStep * 2) === 0) playTick();
          await sleep(stepDelayMs);
        }
        el.innerHTML = el.dataset.origHtml || fullText;
      } else {
        await sleep(280);
      }

      overlay.remove();
      el.classList.remove("building");
      el.classList.add("built");
      a1.busy = false;
      a2.busy = false;

      const scaledLayer = Math.min(
        254,
        Math.round(((index + 1) / total) * 254)
      );
      setLayerCount(scaledLayer);

      if (index % 6 === 0) {
        const scale = [523.25, 587.33, 659.25, 783.99, 880];
        playBell(scale[Math.floor(index / 6) % scale.length]);
      }
    };

    const runSequence = async () => {
      window.scrollTo(0, 0);
      camera.currentY = 0;
      camera.targetY = 0;
      camera.vy = 0;
      await sleep(220);
      const total = buildNodes.length;
      let i = 0;
      while (i < total && !aborted) {
        const batchSize = 2;
        const batch: Promise<void>[] = [];
        for (let b = 0; b < batchSize && i < total; b++, i++) {
          batch.push(buildElement(buildNodes[i], i, total));
        }
        await Promise.all(batch);
      }
      if (!aborted) {
        setLayerCount(254);
        setIsComplete(true);
        celebration = true;
        playCompletionChord();
      }
    };

    runSequence();

    return () => {
      aborted = true;
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("wheel", handleUserWheel);
      window.removeEventListener("touchmove", handleUserWheel);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const filteredMatrix =
    matrixFilter === "All Systems"
      ? MATRIX_ITEMS
      : MATRIX_ITEMS.filter((item) => item.cat === matrixFilter);

  return (
    <div className="portfolio-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@1&family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

        :root {
          --bg: #070709;
          --surface: #0d0d11;
          --border: rgba(255, 255, 255, 0.08);
          --border-red: rgba(239, 68, 68, 0.38);
          --red: #ef4444;
          --red-glow: rgba(239, 68, 68, 0.14);
          --blue-select: #3b82f6;
          --text: #f3f4f6;
          --muted: #9ca3af;
          --dim: #52525b;
          --green: #10b981;
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html, body {
          background-color: var(--bg);
          color: var(--text);
          font-family: 'Inter', sans-serif;
          overflow-x: hidden;
          scroll-behavior: auto !important;
        }

        .portfolio-root {
          background-color: var(--bg);
          background-image:
            linear-gradient(to right, rgba(255,255,255,0.022) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.022) 1px, transparent 1px);
          background-size: 48px 48px;
          min-height: 100vh;
          padding-bottom: 130px;
          position: relative;
        }

        [data-build] {
          opacity: 0;
          position: relative;
          transition: opacity 0.18s ease;
        }
        [data-build].building,
        [data-build].built {
          opacity: 1;
        }

        .figma-box {
          position: absolute;
          inset: -3px;
          border: 1.5px solid var(--blue-select);
          background: rgba(59, 130, 246, 0.07);
          pointer-events: none;
          z-index: 50;
        }
        .figma-box.red-mode {
          border-color: var(--red);
          background: rgba(239, 68, 68, 0.09);
        }

        .figma-handle {
          position: absolute;
          width: 6px;
          height: 6px;
          background: #ffffff;
          border: 1.5px solid var(--blue-select);
        }
        .figma-box.red-mode .figma-handle {
          border-color: var(--red);
        }
        .figma-handle.tl { top: -4px; left: -4px; }
        .figma-handle.tr { top: -4px; right: -4px; }
        .figma-handle.bl { bottom: -4px; left: -4px; }
        .figma-handle.br { bottom: -4px; right: -4px; }

        .figma-dim {
          position: absolute;
          bottom: -21px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--blue-select);
          color: #ffffff;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          font-weight: 600;
          padding: 1px 6px;
          border-radius: 3px;
          white-space: nowrap;
          z-index: 55;
          box-shadow: 0 2px 8px rgba(0,0,0,0.6);
        }
        .figma-box.red-mode .figma-dim {
          background: var(--red);
        }

        .typing-caret {
          display: inline-block;
          width: 2px;
          height: 1.05em;
          background: var(--blue-select);
          vertical-align: text-bottom;
          margin-left: 2px;
          animation: caretBlink 0.35s infinite alternate;
          position: relative;
        }
        .typing-caret::before,
        .typing-caret::after {
          content: '';
          position: absolute;
          left: -2px;
          width: 6px;
          height: 1.5px;
          background: var(--blue-select);
        }
        .typing-caret::before { top: 0; }
        .typing-caret::after { bottom: 0; }

        @keyframes caretBlink {
          from { opacity: 1; }
          to { opacity: 0.2; }
        }

        .navbar-wrap {
          position: fixed;
          top: 18px;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          z-index: 100;
          pointer-events: none;
        }
        .navbar {
          pointer-events: auto;
          background: rgba(13, 13, 17, 0.88);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 999px;
          padding: 8px 18px;
          display: flex;
          align-items: center;
          gap: 22px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.6);
        }
        .nav-logo {
          font-weight: 900;
          font-size: 13px;
          letter-spacing: 0.06em;
          color: #fff;
          text-decoration: none;
        }
        .nav-logo span { color: var(--red); }
        .nav-links {
          display: flex;
          gap: 18px;
          list-style: none;
        }
        .nav-links a {
          color: var(--muted);
          text-decoration: none;
          font-size: 12px;
          font-weight: 500;
          transition: color 0.2s;
        }
        .nav-links a:hover { color: #fff; }
        .nav-status {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: var(--green);
          padding-left: 10px;
          border-left: 1px solid var(--border);
        }
        .status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--green);
          box-shadow: 0 0 8px var(--green);
        }
        .nav-dispatch {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 700;
          color: #fff;
          text-decoration: none;
          background: rgba(239, 68, 68, 0.15);
          border: 1px solid var(--border-red);
          padding: 4px 10px;
          border-radius: 999px;
        }

        .container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 32px;
        }
        .hero {
          padding-top: 78px;
          position: relative;
        }
        .portfolio-banner {
          width: 100%;
          text-align: center;
          font-weight: 900;
          font-size: clamp(72px, 14.2vw, 182px);
          line-height: 0.88;
          letter-spacing: -0.03em;
          text-transform: uppercase;
          color: rgba(220, 38, 38, 0.15);
          -webkit-text-stroke: 1.5px rgba(239, 68, 68, 0.55);
          user-select: none;
          margin-bottom: -24px;
          position: relative;
          z-index: 1;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.9fr 1.05fr;
          gap: 28px;
          align-items: end;
          position: relative;
          z-index: 2;
        }
        .hero-hello {
          font-family: 'Instrument Serif', serif;
          font-style: italic;
          font-size: 34px;
          color: #ffffff;
          margin-bottom: 6px;
          display: inline-block;
        }
        .hero-name-box {
          display: inline-block;
          background: var(--red);
          color: #ffffff;
          font-weight: 900;
          font-size: 46px;
          line-height: 1;
          padding: 10px 22px;
          letter-spacing: -0.02em;
          margin-bottom: 18px;
          box-shadow: 0 12px 35px rgba(239, 68, 68, 0.3);
        }
        .role-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          letter-spacing: 0.08em;
          color: #e5e7eb;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border);
          padding: 6px 12px;
          border-radius: 4px;
          margin-bottom: 22px;
        }
        .role-pill::before {
          content: '';
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--red);
        }
        .hero-bio {
          font-size: 14.5px;
          line-height: 1.65;
          color: var(--muted);
          margin-bottom: 26px;
          max-width: 400px;
        }
        .hero-bio strong { color: #ffffff; font-weight: 600; }
        .hero-actions {
          display: flex;
          flex-direction: column;
          gap: 10px;
          align-items: flex-start;
          margin-bottom: 34px;
        }
        .btn-primary {
          background: linear-gradient(90deg, rgba(239,68,68,0.18), rgba(239,68,68,0.05));
          border: 1px solid var(--border-red);
          color: #fff;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          padding: 12px 20px;
          border-radius: 4px;
          text-decoration: none;
        }
        .btn-secondary {
          background: transparent;
          border: 1px solid var(--border);
          color: var(--muted);
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.08em;
          padding: 11px 18px;
          border-radius: 4px;
          text-decoration: none;
        }
        .hero-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          padding-top: 18px;
          border-top: 1px solid var(--border);
        }
        .stat-val {
          font-weight: 800;
          font-size: 20px;
          color: var(--red);
        }
        .stat-val span { color: #fff; }
        .stat-lbl {
          font-size: 11px;
          color: var(--muted);
          margin-top: 2px;
        }

        /* ==========================================
           CENTER CRIMSON ARCH PORTRAIT + DIRECT /aditya.png
           ========================================== */
        .hero-portrait-wrap {
          display: flex;
          justify-content: center;
        }
        .portrait-card {
          width: 300px;
          height: 390px;
          background:
            radial-gradient(circle at 50% 34%, #ef4444 0%, #b91c1c 48%, #09090b 92%),
            linear-gradient(180deg, #dc2626 0%, #7f1d1d 55%, #09090b 100%);
          border-radius: 150px 150px 12px 12px;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(239, 68, 68, 0.52);
          display: flex;
          align-items: flex-end;
          justify-content: center;
          box-shadow:
            0 20px 60px rgba(220, 38, 38, 0.28),
            inset 0 0 45px rgba(239, 68, 68, 0.3);
        }
        .portrait-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.16) 0px,
            rgba(0, 0, 0, 0.16) 1px,
            transparent 1px,
            transparent 4px
          );
          pointer-events: none;
          z-index: 4;
        }
        .portrait-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(220, 38, 38, 0.24) 0%, rgba(153, 27, 27, 0.18) 50%, rgba(9, 9, 11, 0.98) 95%),
            radial-gradient(ellipse at 50% 42%, transparent 42%, rgba(127, 29, 29, 0.55) 76%, rgba(9, 9, 11, 0.92) 100%);
          pointer-events: none;
          z-index: 5;
        }
        .portrait-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 15%;
          z-index: 2;
          filter: contrast(1.18) brightness(0.95) saturate(0.85);
          -webkit-mask-image: radial-gradient(ellipse 88% 84% at 50% 44%, #000 58%, rgba(0,0,0,0.4) 82%, transparent 100%);
          mask-image: radial-gradient(ellipse 88% 84% at 50% 44%, #000 58%, rgba(0,0,0,0.4) 82%, transparent 100%);
        }
        .portrait-crimson-tint {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(239, 68, 68, 0.32) 0%, rgba(153, 27, 27, 0.38) 68%, #09090b 100%);
          mix-blend-mode: soft-light;
          z-index: 3;
          pointer-events: none;
        }
        .portrait-badge {
          position: absolute;
          bottom: 16px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(9, 9, 11, 0.92);
          border: 1px solid rgba(255,255,255,0.15);
          padding: 6px 14px;
          border-radius: 4px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.08em;
          color: #fff;
          display: flex;
          align-items: center;
          gap: 8px;
          white-space: nowrap;
          z-index: 8;
        }
        .portrait-badge::before {
          content: '';
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--green);
          box-shadow: 0 0 8px var(--green);
        }

        /* Right Stack Cards */
        .hero-right {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .mini-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 16px 18px;
        }
        .mini-card-top {
          display: flex;
          justify-content: space-between;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: var(--red);
          margin-bottom: 6px;
        }
        .mini-card-top span:last-child { color: var(--dim); }
        .mini-card h4 {
          font-size: 15px;
          font-weight: 700;
          margin-bottom: 4px;
          color: #fff;
        }
        .mini-card p {
          font-size: 12px;
          color: var(--muted);
          line-height: 1.5;
        }
        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 6px;
        }
        .tech-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          color: #d1d5db;
          background: var(--surface);
          border: 1px solid var(--border);
          padding: 5px 10px;
          border-radius: 4px;
        }

        /* ==========================================
           SECTIONS & GRIDS
           ========================================== */
        .sec-divider {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: var(--dim);
          padding: 14px 0;
          margin-top: 90px;
          margin-bottom: 40px;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .sec-kicker {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--red);
          margin-bottom: 8px;
          display: inline-block;
        }
        .sec-title {
          font-size: 38px;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #ffffff;
          margin-bottom: 12px;
        }
        .sec-desc {
          font-size: 14.5px;
          color: var(--muted);
          max-width: 560px;
          line-height: 1.6;
          margin-bottom: 36px;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 48px;
          margin-top: 28px;
        }
        .about-p {
          font-size: 15px;
          line-height: 1.75;
          color: var(--muted);
          margin-bottom: 20px;
        }
        .about-p strong { color: #fff; font-weight: 600; }
        .about-quote {
          background: var(--surface);
          border-left: 3px solid var(--red);
          padding: 18px 22px;
          border-radius: 0 8px 8px 0;
          font-style: italic;
          font-size: 14.5px;
          line-height: 1.65;
          color: #e5e7eb;
          margin-top: 24px;
        }
        .principles-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .principle-item {
          border-bottom: 1px solid var(--border);
          padding-bottom: 20px;
        }
        .principle-head {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 6px;
        }
        .principle-num {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          color: var(--red);
          font-weight: 700;
        }
        .principle-title {
          font-size: 16px;
          font-weight: 700;
          color: #fff;
        }
        .principle-desc {
          font-size: 13px;
          color: var(--muted);
          line-height: 1.6;
          padding-left: 28px;
        }

        /* Flagships */
        .flagship-box {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 32px;
          margin-bottom: 24px;
        }
        .flagship-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
          flex-wrap: wrap;
          gap: 12px;
        }
        .badge-red {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: var(--red);
          background: var(--red-glow);
          border: 1px solid var(--border-red);
          padding: 4px 10px;
          border-radius: 999px;
          display: inline-block;
        }
        .hw-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: var(--muted);
        }
        .flagship-title {
          font-size: 28px;
          font-weight: 800;
          color: #fff;
          margin-bottom: 10px;
        }
        .flagship-sub {
          font-size: 14px;
          color: var(--muted);
          max-width: 680px;
          line-height: 1.6;
          margin-bottom: 28px;
        }
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 32px;
        }
        .metric-card {
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 18px;
          text-align: center;
        }
        .metric-card .num {
          font-size: 24px;
          font-weight: 800;
          color: var(--red);
          margin-bottom: 4px;
        }
        .metric-card .lbl {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          color: var(--muted);
        }
        .stack-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.06em;
          margin-bottom: 4px;
        }
        .stack-sublabel {
          font-size: 11px;
          color: var(--dim);
          margin-bottom: 14px;
        }
        .layer-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }
        .layer-pill {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          padding: 8px 14px;
          border-radius: 6px;
          background: var(--bg);
          border: 1px solid var(--border);
          color: var(--muted);
          cursor: pointer;
          transition: all 0.2s;
        }
        .layer-pill.active {
          background: var(--red);
          color: #fff;
          border-color: var(--red);
          font-weight: 600;
        }
        .layer-detail-panel {
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 22px;
        }
        .layer-detail-kicker {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: var(--red);
          margin-bottom: 6px;
        }
        .layer-detail-title {
          font-size: 18px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 8px;
        }
        .layer-detail-desc {
          font-size: 13px;
          color: var(--muted);
          line-height: 1.6;
          margin-bottom: 14px;
        }

        .sub-deployments {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .deploy-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .deploy-card h3 {
          font-size: 18px;
          font-weight: 700;
          margin: 12px 0 8px;
          color: #fff;
        }
        .deploy-card p {
          font-size: 13px;
          color: var(--muted);
          line-height: 1.55;
          margin-bottom: 16px;
        }
        .deploy-bullets {
          list-style: none;
          margin-bottom: 20px;
        }
        .deploy-bullets li {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: #d1d5db;
          margin-bottom: 6px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .deploy-bullets li::before {
          content: '';
          width: 5px;
          height: 5px;
          background: var(--red);
          border-radius: 50%;
        }

        /* Matrix */
        .matrix-filters {
          display: flex;
          gap: 8px;
          margin-bottom: 28px;
          flex-wrap: wrap;
        }
        .matrix-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .matrix-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 24px;
          transition: border-color 0.2s;
        }
        .matrix-card:hover { border-color: var(--border-red); }
        .matrix-card-top {
          display: flex;
          justify-content: space-between;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: var(--red);
          margin-bottom: 10px;
        }
        .matrix-card-top span:last-child { color: var(--dim); }
        .matrix-card h4 {
          font-size: 17px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 8px;
        }
        .matrix-card p {
          font-size: 13px;
          color: var(--muted);
          line-height: 1.55;
          margin-bottom: 18px;
        }

        /* Contact Card */
        .contact-card {
          margin-top: 80px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 56px 32px;
          text-align: center;
          max-width: 760px;
          margin-left: auto;
          margin-right: auto;
        }
        .contact-title {
          font-size: 40px;
          font-weight: 800;
          line-height: 1.15;
          color: #fff;
          margin: 10px 0 14px;
        }
        .contact-sub {
          font-size: 14px;
          color: var(--muted);
          max-width: 480px;
          margin: 0 auto 28px;
          line-height: 1.6;
        }
        .email-row {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }
        .email-box {
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          color: #fff;
          background: var(--bg);
          border: 1px solid var(--border);
          padding: 10px 18px;
          border-radius: 6px;
        }
        .copy-btn {
          background: var(--red);
          color: #fff;
          border: none;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          font-weight: 600;
          padding: 10px 18px;
          border-radius: 6px;
          cursor: pointer;
        }
        .social-row {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 28px;
        }
        .social-pill {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: var(--muted);
          background: var(--bg);
          border: 1px solid var(--border);
          padding: 7px 14px;
          border-radius: 4px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: border-color 0.2s, color 0.2s;
        }
        .social-pill:hover {
          border-color: var(--border-red);
          color: #fff;
        }
        .footer-note {
          font-size: 11px;
          color: var(--dim);
          line-height: 1.6;
        }

        /* Agent Stage & HUD */
        #agent-stage {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 999;
          overflow: hidden;
          transition: opacity 0.4s ease;
        }
        .agent-cursor {
          position: absolute;
          top: 0;
          left: 0;
          will-change: transform;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.65));
        }

        .hud-wrap {
          position: fixed;
          bottom: 20px;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          z-index: 1000;
          pointer-events: none;
        }
        .hud-bar {
          pointer-events: auto;
          background: rgba(13, 13, 17, 0.92);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 999px;
          padding: 8px 16px;
          display: flex;
          align-items: center;
          gap: 14px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: #e5e7eb;
          box-shadow: 0 12px 40px rgba(0,0,0,0.75);
        }
        .hud-dots {
          display: flex;
          align-items: center;
        }
        .hud-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          margin-right: -2px;
          border: 1px solid #09090b;
        }
        .hud-progress-track {
          width: 85px;
          height: 4px;
          background: rgba(255,255,255,0.1);
          border-radius: 999px;
          overflow: hidden;
        }
        .hud-progress-fill {
          height: 100%;
          background: var(--red);
          transition: width 0.15s linear;
        }
        .hud-btn {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          color: #fff;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          padding: 4px 10px;
          border-radius: 999px;
          cursor: pointer;
        }
        .hud-btn.primary {
          background: var(--red);
          border-color: var(--red);
          font-weight: 600;
        }

        @media (max-width: 980px) {
          .hero-grid, .about-grid, .sub-deployments, .matrix-grid, .metrics-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* MULTI-AGENT SWARM OVERLAY */}
      <div
        id="agent-stage"
        ref={stageRef}
        style={{ opacity: isLiveMode ? 0.25 : 1 }}
      />

      {/* FLOATING NAVBAR */}
      <div className="navbar-wrap">
        <nav className="navbar" data-build="box" data-dim="492 × 42">
          <a href="#" className="nav-logo" data-build="text">
            ADITYA<span>.</span>
          </a>
          <ul className="nav-links">
            <li>
              <a href="#about" data-build="text">
                About
              </a>
            </li>
            <li>
              <a href="#flagships" data-build="text">
                Flagships
              </a>
            </li>
            <li>
              <a href="#matrix" data-build="text">
                Matrix
              </a>
            </li>
            <li>
              <a href="#contact" data-build="text">
                Contact
              </a>
            </li>
          </ul>
          <div className="nav-status" data-build="text">
            <span className="status-dot" /> Available
          </div>
          <a
            href="#contact"
            className="nav-dispatch"
            data-build="box"
            data-red="true"
            data-dim="96 × 26"
          >
            DISPATCH ↗
          </a>
        </nav>
      </div>

      <div className="container">
        {/* ==================== HERO SECTION ==================== */}
        <section className="hero">
          <div
            className="portfolio-banner"
            data-build="box"
            data-red="true"
            data-dim="1180 × 165"
          >
            PORTFOLIO
          </div>

          <div className="hero-grid">
            {/* Left Column */}
            <div>
              <div className="hero-hello" data-build="text">
                Hello, I&apos;m
              </div>
              <br />
              <div
                className="hero-name-box"
                data-build="box"
                data-red="true"
                data-dim="116 × 35"
              >
                ADITYA.
              </div>
              <br />
              <div className="role-pill" data-build="text">
                SYSTEM ARCHITECT &amp; AUTONOMOUS OPERATOR
              </div>
              <p className="hero-bio" data-build="text">
                Architecting{" "}
                <strong>24/7 autonomous cognitive ecosystems</strong>,
                multi-agent swarms, and{" "}
                <strong>quantitative execution models</strong> from first
                principles — zero frameworks, total autonomy.
              </p>
              <div className="hero-actions">
                <a
                  href="#contact"
                  className="btn-primary"
                  data-build="box"
                  data-red="true"
                  data-dim="195 × 42"
                >
                  INITIATE DISPATCH →
                </a>
                <a
                  href="#flagships"
                  className="btn-secondary"
                  data-build="box"
                  data-dim="210 × 46"
                >
                  EXPLORE ARCHITECTURE
                </a>
              </div>
              <div className="hero-stats">
                <div data-build="box" data-dim="110 × 48">
                  <div className="stat-val">
                    478<span>+</span>
                  </div>
                  <div className="stat-lbl">MCP Tools</div>
                </div>
                <div data-build="box" data-dim="110 × 48">
                  <div className="stat-val">
                    <span>7-Layer</span>
                  </div>
                  <div className="stat-lbl">Core Stack</div>
                </div>
                <div data-build="box" data-dim="110 × 48">
                  <div className="stat-val">100%</div>
                  <div className="stat-lbl">Offline-First</div>
                </div>
              </div>
            </div>

            {/* Center Portrait Arch with Direct /aditya.png Rendering */}
            <div className="hero-portrait-wrap">
              <div
                className="portrait-card"
                data-build="box"
                data-red="true"
                data-dim="300 × 390"
              >
                <img
                  src="/aditya.png"
                  alt="Aditya Kumar"
                  className="portrait-img"
                />
                <div className="portrait-crimson-tint" />
                <div className="portrait-badge">SOVEREIGN SILICON ACTIVE</div>
              </div>
            </div>

            {/* Right Stack Cards */}
            <div className="hero-right">
              <div className="mini-card" data-build="box" data-dim="360 × 104">
                <div className="mini-card-top">
                  <span>01.</span>
                  <span>RUNTIME</span>
                </div>
                <h4 data-build="text">Autonomous Core</h4>
                <p data-build="text">
                  Local-first agent runtime with multi-provider model routing.
                  Zero cloud lock-in.
                </p>
              </div>
              <div className="mini-card" data-build="box" data-dim="360 × 104">
                <div className="mini-card-top">
                  <span>02.</span>
                  <span>PRODUCTION</span>
                </div>
                <h4 data-build="text">SAAI Labs Takeover</h4>
                <p data-build="text">
                  Enterprise e-commerce platform takeover. 7 client repos live.
                </p>
              </div>
              <div className="mini-card" data-build="box" data-dim="360 × 104">
                <div className="mini-card-top">
                  <span>03.</span>
                  <span>EXECUTION</span>
                </div>
                <h4 data-build="text">Sub-50ms Event Loops</h4>
                <p data-build="text">
                  Quantitative execution models &amp; 4-tier local persistent
                  memory.
                </p>
              </div>
              <div className="tech-tags">
                {["Docker", "Rust", "Python", "CUDA", "Next.js", "Solidity"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="tech-tag"
                      data-build="box"
                      data-dim="62 × 26"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ==================== 01. BACKGROUND & PHILOSOPHY ==================== */}
        <div className="sec-divider" id="about" data-build="text">
          <span>// 01.00 SEC_ABOUT</span>
          <span>INDEX [01 / 05]</span>
        </div>

        <section>
          <div className="sec-kicker" data-build="text">
            ENGINEER PROFILE
          </div>
          <h2 className="sec-title" data-build="text">
            Background &amp; Philosophy
          </h2>

          <div className="about-grid">
            <div>
              <p className="about-p" data-build="text">
                I am <strong>Aditya Kumar</strong> — an independent system
                architect operating across local AI silicon and autonomous
                execution. My formal foundation in{" "}
                <strong>Computer Science &amp; Engineering (CSE)</strong> is
                paired with intensive systems engineering in{" "}
                <strong>Autonomous Multi-Agent Architectures</strong>.
              </p>
              <p className="about-p" data-build="text">
                However, my defining capabilities were forged in the terminal:
                completely self-taught in machine learning architectures,
                Solidity smart contracts, Flutter systems, and institutional
                quantitative trading. I view software engineering not as
                framework assembly, but as the orchestration of physics, memory
                hierarchies, and game-theoretic incentives.
              </p>
              <div className="about-quote" data-build="text">
                &ldquo;I design and deploy autonomous AI systems that operate
                24/7 with persistent memory, multi-agent orchestration, and
                continuous self-evolution — built from first principles, not
                frameworks.&rdquo;
              </div>
            </div>

            <div className="principles-list">
              <div
                className="principle-item"
                data-build="box"
                data-dim="460 × 78"
              >
                <div className="principle-head">
                  <span className="principle-num">01</span>
                  <span className="principle-title" data-build="text">
                    Sovereign Silicon
                  </span>
                </div>
                <p className="principle-desc" data-build="text">
                  Zero reliance on third-party cloud wrappers or hosted black
                  boxes for fundamental cognitive loops.
                </p>
              </div>
              <div
                className="principle-item"
                data-build="box"
                data-dim="460 × 78"
              >
                <div className="principle-head">
                  <span className="principle-num">02</span>
                  <span className="principle-title" data-build="text">
                    First-Principles Architecture
                  </span>
                </div>
                <p className="principle-desc" data-build="text">
                  Every layer built from scratch — custom memory grids, raw
                  model routing, and zero-bloat IPC.
                </p>
              </div>
              <div
                className="principle-item"
                data-build="box"
                data-dim="460 × 78"
              >
                <div className="principle-head">
                  <span className="principle-num">03</span>
                  <span className="principle-title" data-build="text">
                    Axiomatic Verification
                  </span>
                </div>
                <p className="principle-desc" data-build="text">
                  Autonomous systems must verify outputs against deterministic
                  guardrails before state execution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== 02. FLAGSHIP DEPLOYMENTS ==================== */}
        <div className="sec-divider" id="flagships" data-build="text">
          <span>// 02.00 SEC_FLAGSHIPS</span>
          <span>INDEX [02 / 05]</span>
        </div>

        <section>
          <div className="sec-kicker" data-build="text">
            ARCHITECTURAL SHOWCASE
          </div>
          <h2 className="sec-title" data-build="text">
            Flagship Deployments
          </h2>
          <p className="sec-desc" data-build="text">
            Production-grade systems running 24/7 across local silicon,
            blockchain mainnets, and commercial endpoints.
          </p>

          <div className="flagship-box" data-build="box" data-dim="1176 × 520">
            <div className="flagship-top">
              <span
                className="badge-red"
                data-build="box"
                data-red="true"
                data-dim="148 × 24"
              >
                ● CORE ECOSYSTEM
              </span>
              <span className="hw-tag" data-build="text">
                Hardware: Dedicated GPU Workstation • Fully Local Execution
              </span>
            </div>
            <h3 className="flagship-title" data-build="text">
              SAAI — 7-Layer Autonomous AI Ecosystem
            </h3>
            <p className="flagship-sub" data-build="text">
              A persistent, self-evolving autonomous intelligence operating 24/7
              on local silicon. Engineered without external startup frameworks,
              featuring 478 custom tools across 14 MCP servers, 4-tier
              redundant memory, and a continuous reflection loop.
            </p>

            <div className="metrics-grid">
              <div
                className="metric-card"
                data-build="box"
                data-red="true"
                data-dim="260 × 84"
              >
                <div className="num">478</div>
                <div className="lbl">MCP Tools</div>
              </div>
              <div className="metric-card" data-build="box" data-red="true" data-dim="260 × 84">
                <div className="num">14</div>
                <div className="lbl">MCP Servers</div>
              </div>
              <div className="metric-card" data-build="box" data-red="true" data-dim="260 × 84">
                <div className="num">15m</div>
                <div className="lbl">Cycle Loop</div>
              </div>
              <div
                className="metric-card"
                data-build="box"
                data-red="true"
                data-dim="260 × 84"
              >
                <div className="num">Multi-LLM</div>
                <div className="lbl">Model Routing</div>
              </div>
            </div>

            <div className="stack-label" data-build="text">
              7-LAYER CONSTITUTIONAL STACK
            </div>
            <div className="stack-sublabel" data-build="text">
              Click layer to inspect implementation
            </div>

            <div className="layer-pills">
              {[
                "L1: Uncensored Core",
                "L2: Dynamic Tone",
                "L3: Voice Synthesis",
                "L4: Autonomous Loop",
                "L5: 4-Tier Memory",
                "L6: Proactive Brain",
                "L7: Self-Evolution",
              ].map((label, idx) => (
                <button
                  key={label}
                  onClick={() => setActiveLayer(idx)}
                  className={`layer-pill ${activeLayer === idx ? "active" : ""}`}
                  data-build="box"
                  data-red={idx === 0 ? "true" : "false"}
                  data-dim="138 × 32"
                >
                  {label}
                </button>
              ))}
            </div>

            <div
              className="layer-detail-panel"
              data-build="box"
              data-dim="1112 × 135"
            >
              <div className="layer-detail-kicker">
                {LAYER_DATA[activeLayer].kicker}
              </div>
              <div className="layer-detail-title" data-build="text">
                {LAYER_DATA[activeLayer].title}
              </div>
              <div className="layer-detail-desc" data-build="text">
                {LAYER_DATA[activeLayer].desc}
              </div>
              <div className="tech-tags">
                {LAYER_DATA[activeLayer].tags.map((t) => (
                  <span key={t} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 3 Sub-Deployments */}
          <div className="sub-deployments">
            <div className="deploy-card" data-build="box" data-dim="378 × 310">
              <div>
                <span className="badge-red">DEFI // HIGH-FREQUENCY</span>
                <h3 data-build="text">
                  Flash_Lab — Arbitrage &amp; Liquidation Engine
                </h3>
                <p data-build="text">
                  Production flash loan arbitrage and Aave V3 liquidation engine
                  deployed on Polygon Mainnet. Custom Solidity contract with
                  asynchronous multi-hop routing.
                </p>
                <ul className="deploy-bullets">
                  <li data-build="text">
                    Polygon Mainnet (Aave V3 Flash Loans)
                  </li>
                  <li data-build="text">
                    Uniswap V3, QuickSwap &amp; Curve Liquidity
                  </li>
                  <li data-build="text">
                    2,169 LOC Async WebSocket Engine
                  </li>
                </ul>
              </div>
              <div className="tech-tags">
                <span className="tech-tag">Solidity</span>
                <span className="tech-tag">Aave V3</span>
                <span className="tech-tag">Rust / Web3</span>
              </div>
            </div>

            <div className="deploy-card" data-build="box" data-dim="378 × 310">
              <div>
                <span className="badge-red">SAAS // COMMERCIAL PRODUCT</span>
                <h3 data-build="text">
                  Bilar — Offline-First Invoicing System
                </h3>
                <p data-build="text">
                  Commercial desktop/mobile POS and GST billing engine
                  engineered for zero-latency local SQLite storage and zero
                  cloud dependency.
                </p>
                <ul className="deploy-bullets">
                  <li data-build="text">
                    Sub-5ms Local SQLite Query Execution
                  </li>
                  <li data-build="text">
                    Custom Thermal Receipt &amp; PDF Generator
                  </li>
                  <li data-build="text">
                    Zero-Latency Inventory State Machine
                  </li>
                </ul>
              </div>
              <div className="tech-tags">
                <span className="tech-tag">Flutter</span>
                <span className="tech-tag">Offline SQLite</span>
              </div>
            </div>

            <div className="deploy-card" data-build="box" data-dim="378 × 310">
              <div>
                <span className="badge-red">QUANT // ALGORITHMIC EXECUTION</span>
                <h3 data-build="text">
                  Quantitative XAUUSD &amp; Forex Engine
                </h3>
                <p data-build="text">
                  Institutional-grade algorithmic execution system blending
                  multi-timeframe liquidity sweep detection and automated
                  drawdown protection.
                </p>
                <ul className="deploy-bullets">
                  <li data-build="text">Sub-50ms MT5 Execution Bridge</li>
                  <li data-build="text">
                    Dynamic Volatility Position Sizing
                  </li>
                  <li data-build="text">
                    Automated Kill-Switch &amp; Drawdown Guard
                  </li>
                </ul>
              </div>
              <div className="tech-tags">
                <span className="tech-tag">MQL5 / Python</span>
                <span className="tech-tag">Zero-Latency</span>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== 03. THE SYSTEMS MATRIX ==================== */}
        <div className="sec-divider" id="matrix" data-build="text">
          <span>// 03.00 SEC_MATRIX</span>
          <span>INDEX [03 / 05]</span>
        </div>

        <section>
          <div className="sec-kicker" data-build="text">
            ENGINEERING INDEX
          </div>
          <h2 className="sec-title" data-build="text">
            The Systems Matrix
          </h2>
          <p className="sec-desc" data-build="text">
            Specialized architectures spanning multi-LLM cognitive assemblies,
            deep learning latent models, and GPU cryptography.
          </p>

          <div className="matrix-filters">
            {[
              "All Systems",
              "Autonomous AI",
              "Quant & FinTech",
              "Core Engineering",
            ].map((tab, idx) => (
              <button
                key={tab}
                onClick={() => setMatrixFilter(tab)}
                className={`layer-pill ${matrixFilter === tab ? "active" : ""}`}
                data-build="box"
                data-red={idx === 0 ? "true" : "false"}
                data-dim="114 × 32"
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="matrix-grid">
            {filteredMatrix.map((item) => (
              <div
                key={item.id}
                className="matrix-card"
                data-build="box"
                data-dim="378 × 220"
              >
                <div className="matrix-card-top">
                  <span>{item.type}</span>
                  <span>{item.id}</span>
                </div>
                <h4 data-build="text">{item.title}</h4>
                <p data-build="text">{item.desc}</p>
                <div className="tech-tags">
                  {item.tags.map((t) => (
                    <span key={t} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================== 04. DIRECT CONNECT ==================== */}
        <section id="contact">
          <div
            className="contact-card"
            ref={contactCardRef}
            data-build="box"
            data-dim="760 × 340"
          >
            <div className="sec-kicker" data-build="text">
              DIRECT CONNECT
            </div>
            <h2 className="contact-title" data-build="text">
              Let&apos;s Architect Something Extraordinary.
            </h2>
            <p className="contact-sub" data-build="text">
              Available for production autonomous AI system design,
              institutional trading infrastructure, and sovereign technical
              advisory worldwide.
            </p>
            <div className="email-row">
              <div className="email-box" data-build="text">
                {CONTACT_EMAIL}
              </div>
              <button
                className="copy-btn"
                onClick={handleCopyEmail}
                data-build="box"
                data-red="true"
                data-dim="158 × 38"
              >
                {copied ? "Copied ✓" : "Copy Email Address"}
              </button>
            </div>
            <div className="social-row">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                  data-build="box"
                  data-dim="148 × 28"
                >
                  <span>{s.icon}</span> {s.label}
                </a>
              ))}
            </div>
            <div className="footer-note" data-build="text">
              © 2026 Aditya Kumar. Designed with Noir &amp; Crimson Op-Art.
              <br />
              Built from first principles. Zero corporate fluff.
            </div>
          </div>
        </section>
      </div>

      {/* BOTTOM HUD BAR */}
      <div className="hud-wrap">
        {!isComplete ? (
          <div className="hud-bar">
            <div className="hud-dots">
              <span className="hud-dot" style={{ background: "#ef4444" }} />
              <span className="hud-dot" style={{ background: "#3b82f6" }} />
              <span className="hud-dot" style={{ background: "#10b981" }} />
              <span className="hud-dot" style={{ background: "#f59e0b" }} />
              <span className="hud-dot" style={{ background: "#a855f7" }} />
            </div>
            <span>
              <strong>44</strong> agents &nbsp;{layerCount} / 254 layers
            </span>
            <div className="hud-progress-track">
              <div
                className="hud-progress-fill"
                style={{ width: `${(layerCount / 254) * 100}%` }}
              />
            </div>
            <button
              className="hud-btn"
              onClick={() => setTouring((prev) => !prev)}
            >
              {touring ? "Touring" : "Manual"}
            </button>
            <button
              className="hud-btn"
              onClick={() => setSpeed((prev) => (prev === 1 ? 2.5 : 1))}
            >
              {speed}x
            </button>
            <button
              className={`hud-btn ${!soundOn ? "primary" : ""}`}
              onClick={unlockAudio}
            >
              {soundOn ? "🔊 Sound ON" : "🔊 Tap for sound"}
            </button>
          </div>
        ) : (
          <div className="hud-bar">
            <div className="hud-dots">
              <span className="hud-dot" style={{ background: "#ef4444" }} />
              <span className="hud-dot" style={{ background: "#3b82f6" }} />
              <span className="hud-dot" style={{ background: "#10b981" }} />
            </div>
            <span>
              Rebuilt by <strong>44 agents</strong> in <strong>30.0s</strong>
            </span>
            <button
              className="hud-btn primary"
              onClick={() => setIsLiveMode((prev) => !prev)}
            >
              {isLiveMode ? "Swarm ON" : "Go live"}
            </button>
            <button
              className="hud-btn"
              onClick={() => window.location.reload()}
            >
              Replay
            </button>
          </div>
        )}
      </div>
    </div>
  );
}