import ContentDisplay from "@/features/course/components/content-display";
import ContentHeader from "@/features/course/components/content-header";




export default function Home() {
  return (
    <section className='px-6 font-sans w-full max-w-5xl mx-auto flex flex-col gap-2'>
      <ContentHeader/> 
      <ContentDisplay/>
    </section>
  );
}
