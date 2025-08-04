import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/ui/card'
import {
  Disclosure,
  DisclosureContent,
  DisclosureTrigger,
} from '@/shared/ui/disclosure'
import React from 'react'
import ChapterCard from './chapter-card';
import { SheetClose } from '@/shared/ui/sheet';

interface SectionCardProps {
  title: string;
  chapters: Chapter[]; // Assuming chapters are strings, adjust as necessary
  slug?: string; // Optional slug for the section
  onClick?: () => void; // Optional click handler for the section card
}

type Chapter = {
  title: string;
  slug: string; // Optional slug for the chapter
}; // Define the type for chapters, can be adjusted as needed
export default function SectionCard({
  title,
  chapters,
  slug,
// Default to an empty function if no handler is provided
}: SectionCardProps) {

  return (
    <section className='px-4'>
      <Card className='gap-0'>
        <CardHeader>
          <CardTitle >
          {title}
        </CardTitle>
        <CardDescription>
          {(() => {
            switch (slug) {
              case 'synth-basics':
                return 'Learn the basics of synthesis.';
              case 'subtractive':
                return 'Explore subtractive synthesis techniques.';
              case 'advanced-topics':
                return 'Dive into advanced synthesis topics.';
              default:
                return 'No description available.';
            }
          })()}
        </CardDescription>
        </CardHeader>
        <CardContent>
          <Disclosure className='' >
      <DisclosureTrigger>
        <button className='w-full  text-center text-sm cursor-pointer' type='button'>
          Toggle 
          Chapters
        </button>
      </DisclosureTrigger>
      <DisclosureContent>
        <div className='w-full h-0.5 bg-gray-200 my-2' />
       <div className='flex flex-col gap-2'>
         {chapters.map((chapter, index) => (
          <SheetClose key={index} asChild>
           <ChapterCard title={chapter.title} slug={chapter.slug} parentSlug={slug}  />
           </SheetClose>
         ))}
       </div>
      </DisclosureContent>
    </Disclosure>
        </CardContent>
      </Card>
        
    </section>
  )
}
