import Content from '@/components/blog/blogpost/content'
import Details from '@/components/blog/blogpost/details'
import DynamicHero from '@/components/blog/blogpost/dynamic-hero'
import React from 'react'

export default function BlogPostPage() {
  return (
    <main className="flex h-screen flex-col ">
      <section className="mx-auto w-full max-w-[90rem]">
      <DynamicHero/>
      <div>
        <Details references={[]} headings={[]} />
        <Content/>
      </div>
      </section>
    </main>
  )
}
