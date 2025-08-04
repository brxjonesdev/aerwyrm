"use client";
import Logo from '@/features/navbar/components/logo';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/shared/ui/breadcrumb';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shared/ui/sheet';
import { Section } from 'lucide-react';
import React from 'react';
import Sections from './sections';
import SectionCard from './sections';

export default function ContentHeader() {
  const [open, setOpen] = React.useState(false);
  const closeSheet = () => setOpen(false);
  return (
    <div className='flex gap-2'>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className='cursor-pointer'>
          <div className='h-4 w-4 bg-white rounded-full' />
        </SheetTrigger>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbSeparator />
            <BreadcrumbItem>Section</BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>Chapter</BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <SheetContent className='font-sans' side='left'>
          <SheetHeader>
            <SheetTitle>
              <Logo />
            </SheetTitle>
          </SheetHeader>
          <div>
            <SectionCard
              title="Synthesis and Synth Basics"
              description="What is synthesis? How does it work? What even is a synth?"
              chapters={[
                { title: "Introduction to Synthesis", slug: "intro-to-synthesis" },
                { title: "Types of Synthesis", slug: "types-of-synthesis" },
                { title: "Applications of Synthesis", slug: "applications-of-synthesis" },
              ]}
              slug='synthesis-and-synth-basics'
              onClick={closeSheet}
            />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
