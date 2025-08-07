'use client';
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { Placeholder } from '@/shared/ui/placeholder';

export default function page() {
  return (
    <section className='px-4 w-full max-w-[90rem] mx-auto flex flex-col gap-4 flex-1 my-4 font-sans'>
      <Card className='w-full flex-1'>
        <CardHeader className='flex justify-between items-center flex-col md:flex-row '>
          <div className='space-y-2'>
            <CardTitle>Community Patches</CardTitle>
            <CardDescription className='font-body'>
              Explore and share synth recipes, presets, and patch ideas. Discover what others are building — or upload your own creations.
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className='flex-1'>
          <Placeholder
            showNotifyButton={false}
            variant='fullscreen'
            title="Community is coming soon"
            description="We’re building a space for creators to connect and share patches. Check back soon!"
 
          />
        </CardContent>
      </Card>
    </section>
  );
}
