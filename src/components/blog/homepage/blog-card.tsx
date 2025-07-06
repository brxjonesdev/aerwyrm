/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Badge } from '../../../../badge';
import Link from 'next/link';
import { Blog } from '@/lib/types';
export default function BlogCard({
  title,
  date,
  featured,
  image,
  timeToRead,
  tags,
  slug,
  blurb,
}: Blog) {
  return (
    <Link
      href={`/post/${slug}`}
      className={`w-full no-underline ${featured ? 'lg:col-span-2 ' : ''}`}
    >
      <article
        className={`group h-full cursor-pointer overflow-hidden  hover:bg-primary/20 rounded-xl border p-2 transition-colors duration-300`}
      >
        <div className={`relative ${featured ? 'h-full flex-row' : ''} flex flex-col gap-2`}>
          {image ? (
            <div
              className={`aspect-[14/10] overflow-hidden rounded-xl bg-gray-100 ${featured ? 'w-full lg:max-h-[166px]' : ''} `}
            >
              <img
                src={image || '/placeholder.svg'}
                alt={title}
                className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105`}
              />
            </div>
          ) : (
            <div className="flex aspect-[16/10] items-center justify-center rounded-xl bg-gradient-to-r from-blue-200 to-cyan-200"></div>
          )}
          <div className={`flex flex-1 flex-col space-y-4 p-2 ${featured ? 'mt-auto' : ''}`}>
            <div className="space-y-2">
              <h3 className="group-hover:text-accent text-lg font-medium text-black transition-colors">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">{blurb}</p>
            </div>
            <div className="flex items-center justify-between text-xs text-gray-400">
              <time>{new Date(date).toLocaleDateString()}</time>
              {timeToRead && <span>{timeToRead} min read</span>}
            </div>
            {tags && tags.length > 0 && (
              <div className="mt-auto flex flex-wrap gap-2 self-end">
                {tags.slice(0, 3).map((tag, index) => (
                  <Badge
                    key={index}
                    className="bg-gray-200 text-gray-700 transition-colors hover:bg-gray-300"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}
