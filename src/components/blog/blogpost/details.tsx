import Link from 'next/link';
import React from 'react'
export interface DetailsProps {
    references: Reference[];
    headings: string[];
}

type Reference = {
    type: 'song' | 'artist' | 'concept';
    title: string;
    url?: string;
}
export default function Details({ references , headings }: DetailsProps) {
  return (
    <div>
      <h2>Headings</h2>
      {headings.length > 0 ? (
        <ul className="list-disc pl-5">
          {headings.map((heading, index) => (
            <Link key={index} href={`#${heading.toLowerCase().replace(/\s+/g, '-')}`}>
              <li className="text-blue-600 hover:underline cursor-pointer">{heading}</li>
            </Link>
          ))}
        </ul>
      ) : (
        <p>No headings found.</p>
      )}
    </div>
  )
}
