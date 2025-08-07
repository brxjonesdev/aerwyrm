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

  const [position, setPosition] = useState({ x: 500, y: 250 });
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const osc = new Tone.Oscillator({
      frequency: 440,
      type: "sine",
    });

    const gain = new Tone.Gain(0).toDestination(); // start silent
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

  const handleMouseDown = async (e: React.MouseEvent) => {
    await Tone.start(); // Ensure audio context is started
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.min(Math.max(e.clientX - rect.left, 0), rect.width);
    const y = Math.min(Math.max(e.clientY - rect.top, 0), rect.height);

    setPosition({ x, y });
    updateAudioParams(x, y);
  };

  

  const handleMouseLeave = () => {
    if (gainRef.current) {
      const now = Tone.now();
      gainRef.current.gain.cancelScheduledValues(now);
      gainRef.current.gain.setValueAtTime(gainRef.current.gain.value, now);
      gainRef.current.gain.linearRampToValueAtTime(0, now + 0.5);
    }
    setIsDragging(false);
  };

  return (
    <Card className="flex-1 h-full">
      <CardHeader>
        <CardDescription className="flex flex-row gap-2">
          <span className="flex items-center">
            <span className="flex">
              <ArrowUp className="h-4" />
              <ArrowDown className="h-4" />
            </span>{" "}
            controls volume.
          </span>
          <span className="flex items-center">
            <span className="flex">
              <ArrowLeft className="h-4" />
              <ArrowRight className="h-4" />
            </span>{" "}
            controls pitch.
          </span>
        </CardDescription>
      </CardHeader>

      <CardContent
        ref={containerRef}
        className="flex-1 min-h-96 relative bg-white/5 cursor-crosshair select-none "
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {/* Info Text */}
        {!isDragging && (
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center text-xs text-muted-foreground">
            Move the circle to play.
          </div>
        )}

        {/* Draggable Circle */}
        <div
          className="absolute w-6 h-6 rounded-full bg-cyan-300 shadow-lg border border-cyan-400 cursor-grab active:cursor-grabbing"
          style={{
            left: position.x - 12,
            top: position.y - 12,
            transition: isDragging ? "none" : "transform 0.1s ease",
          }}
          onMouseDown={handleMouseDown}
        />
      </CardContent>

      <CardFooter className="flex flex-col gap-2 items-start">
        <p className="text-sm text-muted-foreground">
  The Theremin lets you control pitch (frequency) and volume (amplitude) with hand movement — the two core elements of sound synthesis that shape every sound we hear.
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
