import ContentDisplay from '@/features/course/components/content-display';
import ContentHeader from '@/features/course/components/content-header';

export default async function Home({searchParams}: { searchParams: { section?: string, chapter?: string } }) {
  const section = (await searchParams).section
  const chapter = (await searchParams).chapter
  return (
    <section className='px-4 lg:px-6 font-sans w-full max-w-7xl mx-auto flex flex-col gap-4 flex-1 '>
      <ContentHeader 
       section={section}
       chapter={chapter}
      />
      <ContentDisplay
        section={section}
        chapter={chapter}
      />
    </section>
  );
}
