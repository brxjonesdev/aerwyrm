
'use client'
import React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation'


export default function SidebarMenu() {
  const searchParams = useSearchParams()
  const category = searchParams.get("category")
  const categories = [
    { name: "All", slug: "/" },
    { name: "Development", slug: "/?category=development" },
    { name: "Music Tech & DSP", slug: "/?category=music-tech-dsp" },
    { name: "Creative Process", slug: "/?category=creative" },
  ]

  return (
    <aside className="hidden w-64 h-fit md:flex flex-col border-l border-gray-200">
      <div className="flex flex-col space-y-2"> 
        {categories.map((cat, index) => (
          <Link key={index} href={`${cat.slug}`} className="w-full">
            <div
              className={`flex items-center gap-3 px-4 py-2 text-sm transition-all cursor-pointer font-medium tracking-wide ${
                category === cat.slug ? "text-black" : "text-gray-500 hover:text-gray-800"
              }`}
            >
              <div
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  category === cat.slug ? "bg-primary" : "bg-transparent"
                }`}
              />
              {cat.name}
            </div>
          </Link>
        ))}
      </div>
    </aside>
  )
}
