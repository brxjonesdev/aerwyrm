import Logo from '@/features/navbar/components/logo'
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from '@/shared/ui/breadcrumb'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/shared/ui/sheet'
import React from 'react'

export default function ContentHeader() {
  return (
    <div className='flex gap-2'>
      <Sheet>
        <SheetTrigger className='cursor-pointer'>
          <div className='h-4 w-4 bg-white rounded-full'/>
        </SheetTrigger>
        <Breadcrumb>
        <BreadcrumbList>
        <BreadcrumbSeparator/>
        <BreadcrumbItem>
          Section
        </BreadcrumbItem>
        <BreadcrumbSeparator/>
        <BreadcrumbItem>
          Chapter
        </BreadcrumbItem>
        </BreadcrumbList>
        </Breadcrumb>
        <SheetContent className='font-sans' side='left'>
          <SheetHeader>
            <SheetTitle>
              <Logo/>
            </SheetTitle>
          </SheetHeader>
          <section>
            {/* Sections */}  
          </section>
        </SheetContent>
      </Sheet>
    </div>
  )
}
