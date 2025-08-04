import React from 'react';
import { promises as fs } from "fs"
import path from "path"
import { compileMDX } from "next-mdx-remote/rsc"

export default async function ContentDisplay({ section, chapter }: { section: string | undefined, chapter: string | undefined }) {
   const filePath = path.join(process.cwd(), "src/features/course/course-content", section || '', chapter ? `${chapter}.mdx` : '');
   try {
    const fileContent = await fs.readFile(filePath, "utf8")
    const { content, frontmatter } = await compileMDX<{
      title: string
      date: string
      subtitle: string
      readingTime: string
    }>({
      source: fileContent,
      options: { parseFrontmatter: true },
    })

    return (
      <div className="min-h-screen  text-white text-sm font-sans">
        <article className="max-w-5xl mx-auto lg:px-4">
          <header className="mb-4 font-sans">
            <h1 className="text-xl md:text-4xl font-bold mb-6 leading-tight">{frontmatter.title}</h1>
            <p className="text-md text-gray-300 leading-relaxed mb-6">{frontmatter.subtitle}</p>
           
          </header>
          <div className="prose prose-xs prose-invert w-full font-sans leading-7">{content}</div>
        </article>
      </div>
    )
  } catch (error) {
    console.error("Error reading blog post:", error, )
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <p className="text-lg">Content not found.</p>
      </div>
    )
  }
}
