
import BlogGrid from '@/components/blog/homepage/blog-grid';
import SidebarMenu from '@/components/blog/homepage/sidebar-menu';

export default function Home() {
  return (
    <main className="flex h-screen flex-col ">
      <section className="mx-auto w-full max-w-[90rem] flex-1 px-6 py-2 lg:px-8 flex flex-col gap-2 overflow-y-hidden">
        <section className="border-b border-gray-200 py-6">
          <h2 className="font-heading max-w-3xl text-3xl leading-tight font-bold lg:text-5xl">
            Welcome to Aerwyrm.
          </h2>
          <p className="mt-1 px-1 max-w-2xl text-base tracking-wide text-gray-700 lg:text-lg">
            Documenting my creative process, translating sound theory into code, and exploring the
            intersection of music and technology.
          </p>
        </section>

        <div className="flex gap-8 overflow-y-hidden mt-4">
          <SidebarMenu />
          <BlogGrid />
        </div>
      </section>
    </main>
  );
}
