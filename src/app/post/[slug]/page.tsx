import Details from '@/components/blog/blogpost/details';
import DynamicHero from '@/components/blog/blogpost/dynamic-hero';
import { getPostBySlug, getPostSlugs } from '@/lib/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({
    slug: slug.replace(/\.mdx$/, ''),
  }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  

  if (!post) return notFound();

  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
      <section className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-4 px-4 py-6 md:px-8">
        <DynamicHero/>
        <div className='flex'>
          <Details references={[]} headings={[]}/>
          <article className="prose prose-headings:font-heading prose-a:text-accent prose-a:underline-offset-2 dark:prose-invert max-w-none overflow-y-auto">
          <h1 className="font-heading text-primary">{post.title}</h1>
          <MDXRemote source={post.content} />
        </article>
        </div>
      </section>
    </main>
  );
}
