/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Badge } from '../../../../badge';
import Link from 'next/link';
export interface BlogCardProps {
    id: number;
    title: string;
    description: string;
    slug: string;
    date: string;
    category: "Development" | "MusicTech" | "Creative";
    featured?: boolean;
    image?: string;
    timeToRead?: number;
    tags?: string[];
}
export default function BlogCard({ title, description, date, featured, image, timeToRead, tags, slug }: BlogCardProps) {
  return (
    <Link href={`/post/${slug}`} className={`no-underline w-full ${featured ? "lg:col-span-2 " : ""} h-full`} >
    <article className={`h-full group cursor-pointer overflow-hidden ${featured ? "lg:col-span-2 " : ""}  border hover:bg-primary/20 transition-colors duration-300 rounded-xl p-2`}>
      <div className={`relative ${featured ? "h-full" : ""} flex flex-col gap-2`}>
        {image ? (
          <div className={` overflow-hidden bg-gray-100 rounded-xl aspect-[14/10] ${featured ? "lg:max-h-[166px] w-full" : ""} `}>
            <img
              src={image || "/placeholder.svg"}
              alt={title}
              className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 `}
            />
          </div>
        ): (
          <div className="aspect-[14/10]  flex items-center justify-center bg-gradient-to-r from-blue-200 to-cyan-200 rounded-xl">
            
            </div>
            )}
        <div className="p-2 space-y-4 flex-1 flex flex-col">
          <div className="space-y-2">
            <h3 className="text-lg font-medium text-black group-hover:text-accent transition-colors">{title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
          </div>
          <div className="flex items-center justify-between text-xs text-gray-400">
            <time>{new Date(date).toLocaleDateString()}</time>
            {timeToRead && <span>{timeToRead} min read</span>}
          </div>
          {tags && tags.length > 0 && (
            <div className="flex gap-2 flex-wrap self-end mt-auto">
              {tags.slice(0, 3).map((tag, index) => (
                <Badge
                  key={index}
                  className="bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
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
  )
}
