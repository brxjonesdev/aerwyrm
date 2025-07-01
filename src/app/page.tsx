import BlogGrid from '@/components/blog/homepage/blog-grid';
import SidebarMenu from '@/components/blog/homepage/sidebar-menu';

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const category = (await searchParams).category;
  return (
    <main className="flex h-screen flex-col">
      <section className="mx-auto flex w-full max-w-[90rem] flex-1 flex-col gap-2 overflow-y-hidden px-6 py-2 lg:px-8">
        <section className="border-b border-gray-200 py-6">
          <h2 className="font-heading max-w-3xl text-3xl leading-tight font-bold lg:text-5xl">
            Welcome to Aerwyrm.
          </h2>
          <p className="mt-1 max-w-2xl px-1 text-base tracking-wide text-gray-700 lg:text-lg">
            Documenting my creative process, translating sound theory into code, and exploring the
            intersection of music and technology.
          </p>
        </section>

        <div className="mt-4 flex gap-8 overflow-y-hidden">
          <SidebarMenu />
          <BlogGrid category={category as string} />
        </div>
      </section>
    </main>
  );
}
