import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import BlogCard from '@/components/blog/homepage/blog-card';
import { getAllPosts } from '@/lib/posts';
import { Blog } from '@/lib/types';
export default function BlogGrid({ category = 'all' }: { category?: string }) {
  const blogPosts: Blog[] = getAllPosts();
  return (
    <ScrollArea className="flex-1 overflow-scroll pr-4">
      <section className="grid h-full w-full gap-6 sm:grid-cols-1 lg:grid-cols-4">
        {blogPosts
          .filter((post) => category === 'all' || post.category === category)
          .sort((a, b) => {
            if (a.featured && !b.featured) return -1; // Featured posts
            if (!a.featured && b.featured) return 1; // Non-featured posts
            return new Date(b.date).getTime() - new Date(a.date).getTime(); // Sort by date
          }).length === 0 ? (
          <section className="col-span-full flex h-full w-full items-center justify-center text-gray-500">
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
            .map((post) => <BlogCard key={post.id} {...post} />)
        )}
      </section>
    </ScrollArea>
  );
}
