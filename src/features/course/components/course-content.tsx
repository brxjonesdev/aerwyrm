'use server';

import React from 'react';
import SectionCard from './section-card';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

function getCourseStructure(baseDir: string) {
  const sections = fs
    .readdirSync(baseDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory() && dirent.name !== '.obsidian')
    .map((sectionDir) => {
      const sectionPath = path.join(baseDir, sectionDir.name);
      const files = fs
        .readdirSync(sectionPath)
        .filter((file) => file.endsWith('.mdx'));

      const chapters = files.map((file) => {
        const filePath = path.join(sectionPath, file);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContent);

        const slug = file.replace(/\.mdx$/, '');
        const title =
          data.title ||
          slug
            .replace(/-/g, ' ')
            .replace(/\b\w/g, (c: string) => c.toUpperCase());
        const order = Number(data.order) || 0; // Default to 0 if order is not specified

        return { title, slug, order };
      });

      return {
        title: sectionDir.name
          .replace(/-/g, ' ')
          .replace(/\b\w/g, (c: string) => c.toUpperCase()),
        slug: sectionDir.name,
        chapters,
      };
    })
    // re order them based on my ordering
    .sort((a, b) => {
      const order = ['synth-basics', 'subtractive', 'advanced-topics'];
      const aIndex = order.indexOf(a.slug);
      const bIndex = order.indexOf(b.slug);
      if (aIndex === -1 && bIndex === -1) return 0; //
      if (aIndex === -1) return 1; // a comes after b
      if (bIndex === -1) return -1; // b comes after a

      return aIndex - bIndex;
    });
  return sections;
}

export default async function CourseContent() {
  const baseDir = path.join(
    process.cwd(),
    'src/features/course/course-content',
  );
  const sections = getCourseStructure(baseDir);

  return (
    <div className='flex flex-col gap-4'>
      {sections.map((section) => (
        <SectionCard
          key={section.slug}
          title={section.title}
          chapters={section.chapters}
          slug={section.slug}
        />
      ))}
    </div>
  );
}
