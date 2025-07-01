import React from 'react'

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  // This layout can be used to wrap the
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
        {children}
    </main>
  )
}
