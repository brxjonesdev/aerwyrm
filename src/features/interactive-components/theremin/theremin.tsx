"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/shared/ui/card";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import * as Tone from "tone";

export default function Theremin() {
  const oscillatorRef = useRef<Tone.Oscillator | null>(null);
  const gainRef = useRef<Tone.Gain | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState({ x: 200, y: 150 });
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const osc = new Tone.Oscillator({
      frequency: 440,
      type: "sine",
    });

    const gain = new Tone.Gain(0).toDestination(); // Start silent
    osc.connect(gain);
    osc.start();

    oscillatorRef.current = osc;
    gainRef.current = gain;

    return () => {
      osc.stop();
      osc.disconnect();
    };
  }, []);

  const updateAudioParams = (x: number, y: number) => {
    const container = containerRef.current;
    if (!container) return;

    const { width, height } = container.getBoundingClientRect();

    const pitchHz = 200 + (x / width) * 1000; // 200 Hz to 1200 Hz
    const volumeGain = Math.max(0, Math.min(1, 1 - y / height)) / 10;

    if (oscillatorRef.current) {
      oscillatorRef.current.frequency.value = pitchHz;
    }

    if (gainRef.current) {
      gainRef.current.gain.value = volumeGain;
    }
  };

  const getRelativeCoords = (clientX: number, clientY: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return { x: 0, y: 0 };

    const radius = 12; // Half of circle diameter
    const x = Math.min(Math.max(clientX - rect.left, radius), rect.width - radius);
    const y = Math.min(Math.max(clientY - rect.top, radius), rect.height - radius);

    return { x, y };
  };

  // Mouse events
  const handleMouseDown = async () => {
    await Tone.start();
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const { x, y } = getRelativeCoords(e.clientX, e.clientY);
    setPosition({ x, y });
    updateAudioParams(x, y);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    fadeOutSound();
    setIsDragging(false);
  };

  // Touch events
  const handleTouchStart = async (e: React.TouchEvent) => {
    await Tone.start();
    setIsDragging(true);
    const touch = e.touches[0];
    const { x, y } = getRelativeCoords(touch.clientX, touch.clientY);
    setPosition({ x, y });
    updateAudioParams(x, y);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const { x, y } = getRelativeCoords(touch.clientX, touch.clientY);
    setPosition({ x, y });
    updateAudioParams(x, y);
  };

  const handleTouchEnd = () => {
    fadeOutSound();
    setIsDragging(false);
  };

  const fadeOutSound = () => {
    if (gainRef.current) {
      const now = Tone.now();
      gainRef.current.gain.cancelScheduledValues(now);
      gainRef.current.gain.setValueAtTime(gainRef.current.gain.value, now);
      gainRef.current.gain.linearRampToValueAtTime(0, now + 0.5);
    }
  };

  return (
    <Card className="flex flex-col flex-1 h-full">
      <CardHeader>
        <CardDescription className="flex flex-row gap-2 flex-wrap text-sm">
          <span className="flex items-center gap-1">
            <ArrowUp className="h-4" />
            <ArrowDown className="h-4" />
            controls volume.
          </span>
          <span className="flex items-center gap-1">
            <ArrowLeft className="h-4" />
            <ArrowRight className="h-4" />
            controls pitch.
          </span>
        </CardDescription>
      </CardHeader>

      <CardContent
        ref={containerRef}
        className="relative flex-1 min-h-[60vh] sm:min-h-96 bg-white/5 cursor-crosshair select-none touch-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {!isDragging && (
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center text-xs text-muted-foreground">
            Move the circle to play.
          </div>
        )}

        <div
          className="absolute w-6 h-6 rounded-full bg-cyan-300 shadow-lg border border-cyan-400 cursor-grab active:cursor-grabbing touch-none"
          style={{
            left: position.x - 12,
            top: position.y - 12,
            transition: isDragging ? "none" : "transform 0.1s ease",
          }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        />
      </CardContent>

      <CardFooter className="flex flex-col gap-2 items-start">
        <p className="text-sm text-muted-foreground">
          The Theremin lets you control pitch (frequency) and volume (amplitude)
          with hand movement — the two core elements of sound synthesis that
          shape every sound we hear.
        </p>
        <Link
          href="https://www.youtube.com/watch?v=-QgTF8p-284"
          className="text-sm text-muted-foreground underline underline-offset-4 hover:text-cyan-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more about the Theremin
        </Link>
      </CardFooter>
    </Card>
  );
}
