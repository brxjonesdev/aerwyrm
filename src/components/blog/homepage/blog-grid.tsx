"use client";
import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area"
import BlogCard, { BlogCardProps } from '@/components/blog/homepage/blog-card';
import { useSearchParams } from 'next/navigation';
export default function BlogGrid() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category') || 'all';
  const blogPosts: BlogCardProps[] = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `Blog Post ${i + 1}`,
    description: `This is a brief description of blog post ${i + 1}. It provides an overview of the content.`,
    slug: `blog-post-${i + 1}`,
    date: new Date().toISOString(),
    category: ["Development", "MusicTech", "Creative"][Math.floor(Math.random() * 3)] as "Development" | "MusicTech" | "Creative", // Randomly assign categories
    featured: i === 0 , // First two posts are featured
    image: i % 2 === 0 ? 'https://wallpapers.com/images/high/red-velvet-beautiful-irene-1z38jks1uo8i5rwk.webp' : undefined, // Alternate images
    timeToRead: Math.floor(Math.random() * 10) + 1, // Random time to read between 1 and 10 minutes
    tags: ['tag1', 'tag2', 'tag3'],
  }));
  return (
    <ScrollArea className="flex-1 overflow-scroll pr-4">
    <section className="grid gap-6 sm:grid-cols-1 lg:grid-cols-4 w-full h-full">  
      {blogPosts
      .filter((post) => category === 'all' || post.category === category)
      .sort((a, b) => {
        if (a.featured && !b.featured) return -1; // Featured posts
        if (!a.featured && b.featured) return 1; // Non-featured posts
        return new Date(b.date).getTime() - new Date(a.date).getTime(); // Sort by date
      })
      .length === 0 ? (
          <section className='w-full h-full flex items-center justify-center text-gray-500 col-span-full'>
        No blog posts found for this category.
          </section>
        ) : (
          blogPosts
        .filter((post) => category === 'all' || post.category === category)
        .sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        })
        .map((post) => (
          <BlogCard key={post.id} {...post} />
        ))
        )
      }
    </section>
    </ScrollArea>
  );
}
