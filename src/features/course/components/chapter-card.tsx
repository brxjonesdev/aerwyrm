import Link from 'next/link';
import React from 'react';

export default function ChapterCard({
  title,
  slug,
  parentSlug,
}: {
  title: string;
  slug?: string;
  parentSlug?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={`/course/?chapter=${slug}&section=${parentSlug}`}
      className='hover:bg-gray-100/10 transition-colors duration-200 ease-in-out rounded-r-xl'
    >
      <div className='border-l-2  p-2'>
        <h3 className='text-md'>{title}</h3>
      </div>
    </Link>
  );
}
