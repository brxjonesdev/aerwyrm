import Theremin from '@/features/interactive-components/theremin/theremin';
import { Badge } from 'lucide-react';
import React from 'react';

export default function page() {

  const features: Array<{
  title: string;
  description: string;
}> = [
  {
    title: 'Learn Modern Synthesis Techniques',
    description: 'Start with the basics and level up to advanced synthesis methods like subtractive, FM, wavetable, and more. Aerwyrm guides you with clear, hands-on lessons that connect theory to sound.'
  },
  {
    title: 'Interactive Sound Playground',
    description: 'Sound design starts with play. Aerwyrm includes an interactive synth playground where you can experiment freely, tweak parameters in real time, and learn by doing.'
  },
  {
    title: 'Growing Library of Presets & Sounds',
    description: 'Explore and reverse-engineer presets for popular synths. Our expanding sound library helps you understand how great patches are made—while also giving you inspiration for your own creations.'
  }
];

  return (
    <section className='px-4 lg:px-6 font-sans w-full max-w-[90rem] mx-auto flex flex-col gap-4 flex-1 mt-4 '>      <div className='container mx-auto w-full'>
        <div className='grid grid-cols-1 gap-8 items-center lg:grid-cols-2 flex-1'>
          <div className='flex gap-4 flex-col'>
            <h1 className='text-3xl md:text-5xl font-bold tracking-tight'>
              Learn modern synthesis techniques and create your own sound with
              Aerwyrm.
            </h1>
            <p className='text-sm md:text-lg text-muted-foreground'>
              Aerwyrm is a platform for learning and experimenting with
              synthesis. While this is geared towards beginners, it is also
              useful for anyone looking to expand their knowledge of synthesis
              and sound design. The platform features interactive components,
              tutorials, and a playground for experimenting.
            </p>
          </div>
          <Theremin />
        </div>
      </div>


      <div className="container mx-auto flex-1">
      <div className="flex gap-4 flex-col items-start">
    
        <div className="flex  flex-col">
          <h2 className="text-3xl md:text-4xl tracking-tighter lg:max-w-xl font-semibold">
            What could Aerwyrm do for you?
          </h2>
        </div>
        <div className="flex gap-10 pt-4 flex-col w-full">
          <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div className="flex flex-row gap-6 items-start" key={index}>
                <div className="flex flex-col gap-1">
                  <p>{feature.title}</p>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
