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
  // const tabs: TabItemType[] = [
  //   { id: "subtractive", label: "Subtractive" },
  //   { id: "additive", label: "Additive" },
  //   { id: "fm", label: "FM" },
  //   { id: "wavetable", label: "Wavetable" },
  //   { id: "granular", label: "Granular" },
  //   { id: "sampler", label: "Sampler" },
  // ]
  return (
  <section className='px-4 w-full max-w-[90rem] mx-auto flex flex-col gap-4 flex-1 my-4 font-sans'>
    <Card className='w-full flex-1'>
      <CardHeader className='flex justify-between items-center flex-col md:flex-row '>
        <div className='space-y-2'>
        <CardTitle>Playground</CardTitle>
        <CardDescription className='font-body'>Experiment with synthesis techniques and shape a new sound.</CardDescription>
        </div>
      </CardHeader>
      <CardContent className='flex-1'>
        <Placeholder
        showNotifyButton={false}
        variant='fullscreen'
        title="Playground is under construction"
        description="This feature is currently being developed. Stay tuned for updates!"
        progress={0.3}
        showProgress={true}
        estimatedDate='After Section 1 is released'
        />
        
      </CardContent>
    </Card>
    
  </section>
  );
}
