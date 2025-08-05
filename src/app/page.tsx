import Theremin from '@/features/interactive-components/theremin/theremin';
import React from 'react';

export default function page() {
  return (
    <section className='px-4 lg:px-6 font-sans w-full max-w-7xl mx-auto flex flex-col gap-4 flex-1 mt-4 '>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 gap-8 items-center lg:grid-cols-2'>
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
    </section>
  );
}
