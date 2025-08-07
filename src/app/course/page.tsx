import ContentDisplay from "@/features/course/components/content-display";
import ContentHeader from "@/features/course/components/content-header";
import { redirect } from "next/navigation";
import { PageProps } from "../../../.next/types/app/page";

export default async function Home({ searchParams }: PageProps) {
  const params = await searchParams;
  const section = params?.section;
  const chapter = params?.chapter;

  if (!section || !chapter) {
    redirect('/course/?chapter=what-is-synthesis&section=synth-basics');
  }

  return (
    <section className='px-4 lg:px-6 font-sans w-full max-w-7xl mx-auto flex flex-col gap-4 flex-1 mt-4'>
      <ContentHeader section={section} chapter={chapter} />
      <ContentDisplay section={section} chapter={chapter} />
    </section>
  );
}
