import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card';
import {
  Disclosure,
  DisclosureContent,
  DisclosureTrigger,
} from '@/shared/ui/disclosure';
import React from 'react';
import ChapterCard from './chapter-card';
import { SheetClose } from '@/shared/ui/sheet';

interface SectionCardProps {
  title: string;
  chapters: Chapter[];
  slug?: string;
  onClick?: () => void;
}

type Chapter = {
  title: string;
  slug: string;
  order: number;
};
export default function SectionCard({
  title,
  chapters,
  slug,
}: SectionCardProps) {
  return (
    <section className='px-4'>
      <Card className='gap-0'>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
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
          <Disclosure className=''>
            <DisclosureTrigger>
              <button
                className='w-full  text-right text-sm cursor-pointer'
                type='button'
              >
                Toggle Chapters
              </button>
            </DisclosureTrigger>
            <DisclosureContent>
              <div className='w-full h-0.5 bg-gray-200 my-2' />
              <div className='flex flex-col gap-2'>
                {chapters
                  // sort by order
                  .sort((a, b) => {
                    const orderA = a.order || 0;
                    const orderB = b.order || 0;
                    return orderA - orderB;
                  })
                  .map((chapter, index) => (
                    <SheetClose key={index} asChild>
                      <ChapterCard
                        title={chapter.title}
                        slug={chapter.slug}
                        parentSlug={slug}
                      />
                    </SheetClose>
                  ))}
              </div>
            </DisclosureContent>
          </Disclosure>
        </CardContent>
      </Card>
    </section>
  );
}
