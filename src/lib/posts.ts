import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Blog } from './types';

const postsDir = path.join(process.cwd(), '/src/posts');

export function getPostSlugs() {
  return fs.readdirSync(postsDir).filter((file) => file.endsWith('.mdx'));
}

export function getPostBySlug(slug: string): Blog {
  const realSlug = slug.replace(/\.mdx$/, '');
  const filePath = path.join(postsDir, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(filePath, 'utf8');

  const { content, data } = matter(fileContents);
  return {
    id: realSlug,
    title: data.title,
    description: data.description,
    slug: realSlug,
    date: data.date,
    category: data.category,
    featured: data.featured,
    image: data.image,
    timeToRead: data.timeToRead,
    tags: data.tags,
    content,
  };
}

export function getAllPosts(): Blog[] {
  return getPostSlugs().map((slug) => getPostBySlug(slug));
}
