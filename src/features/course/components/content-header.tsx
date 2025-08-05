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
import React from 'react';
import CourseContent from './course-content';
import { redirect } from 'next/navigation';

export default function ContentHeader({
  section,
  chapter,
}: {
  section?: string;
  chapter?: string;
}) {
  const formatSectionName = (name: string) => {
    return name
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (c: string) => c.toUpperCase());
  };

  return (
    <div className='flex gap-2'>
      <Sheet>
        <SheetTrigger className='cursor-pointer'>
          <div className='h-4 w-4 bg-white rounded-full' />
        </SheetTrigger>
        {section && chapter ? (
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbSeparator />
              <BreadcrumbItem>{formatSectionName(section)}</BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>{formatSectionName(chapter)}</BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        ) : null}
        <SheetContent className='font-sans gap-0' side='left'>
          <SheetHeader>
            <SheetTitle>
              <Logo />
            </SheetTitle>
          </SheetHeader>
          <CourseContent />
        </SheetContent>
      </Sheet>
    </div>
  );
}
