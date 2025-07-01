import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"
import { Blog } from "@/lib/types"



interface DynamicHeroProps {
  variant?: "magazine" | "interview" | "full-article" | "minimal" | "centered"
  post: Blog
}

export default function DynamicHero({
  variant = "magazine",
  post,
}: DynamicHeroProps) {
  const formattedDate = new Date(post.date).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  })

  // Magazine Hero Layout
  if (variant === "magazine") {
    return (
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-2">
              <div className="h-6 w-6 rotate-45 bg-black"></div>
            </div>

            <div className="space-y-6">
              <h1 className="font-serif text-4xl font-light leading-tight lg:text-5xl">{post.title}</h1>
              <p className="text-lg leading-relaxed text-gray-700">{post.description}</p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {post.category && (
                <Badge variant="outline" className="rounded-full">
                  {post.category}
                </Badge>
              )}
              {post.tags?.map((tag) => (
                <Badge key={tag} variant="outline" className="rounded-full">
                  {tag}
                </Badge>
              ))}
              <div className="flex items-center space-x-1 text-sm text-gray-600">
                <Calendar className="h-4 w-4" />
                <span>{formattedDate}</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden rounded-lg">
              <Image
                src={post.image || "/placeholder.svg?height=800&width=600"}
                alt={post.title}
                width={600}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Interview Layout
  if (variant === "interview") {
    return (
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden rounded-lg bg-gradient-to-br from-blue-100 to-purple-100">
              <Image
                src={post.image || "/placeholder.svg?height=800&width=600"}
                alt={post.title}
                width={600}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border border-gray-200"></div>
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-gray-200"></div>
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-gray-200"></div>
          </div>

          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold leading-tight lg:text-5xl">{post.title}</h1>
              <p className="text-lg leading-relaxed text-gray-700">{post.description}</p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {post.category && (
                <Badge variant="outline" className="rounded-full">
                  {post.category}
                </Badge>
              )}
              {post.tags?.map((tag) => (
                <Badge key={tag} variant="outline" className="rounded-full">
                  {tag}
                </Badge>
              ))}
              <div className="flex items-center space-x-1 text-sm text-gray-600">
                <Clock className="h-4 w-4" />
                <span>{post.timeToRead} min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Full Article Layout
  if (variant === "full-article") {
    return (
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="flex flex-col justify-center space-y-6">
            <div className="h-6 w-6 rotate-45 bg-black"></div>
            <h1 className="font-serif text-4xl font-light leading-tight lg:text-5xl">{post.title}</h1>
            <p className="text-lg leading-relaxed text-gray-700">{post.description}</p>

            <div className="flex flex-wrap items-center gap-3">
              {post.category && (
                <Badge variant="outline" className="rounded-full">
                  {post.category}
                </Badge>
              )}
              {post.tags?.map((tag) => (
                <Badge key={tag} variant="outline" className="rounded-full">
                  {tag}
                </Badge>
              ))}
              <Badge variant="outline" className="rounded-full">
                {formattedDate}
              </Badge>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-lg">
              <Image
                src={post.image || "/placeholder.svg?height=800&width=640"}
                alt={post.title}
                width={640}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Minimal Layout
  if (variant === "minimal") {
    return (
      <div className="mx-auto max-w-4xl px-6 py-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            {post.category && (
              <Badge variant="outline" className="rounded-full">
                {post.category}
              </Badge>
            )}
            <h1 className="text-4xl font-bold leading-tight lg:text-6xl">{post.title}</h1>
            <p className="mx-auto max-w-2xl text-xl leading-relaxed text-gray-600">{post.description}</p>
          </div>

          
        </div>
      </div>
    )
  }

  // Centered Layout (Default Fallback)
  return (
    <div className="relative">
      <div className="aspect-[21/9] overflow-hidden">
        <Image
          src={post.image || "/placeholder.svg?height=600&width=1400"}
          alt={post.title}
          width={1400}
          height={600}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-4xl px-6 text-center text-white">
          {post.category && (
            <Badge variant="secondary" className="mb-4 rounded-full">
              {post.category}
            </Badge>
          )}
          <h1 className="mb-6 text-4xl font-bold leading-tight lg:text-6xl">{post.title}</h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl leading-relaxed opacity-90">{post.description}</p>

          <div className="flex items-center justify-center space-x-6 text-sm opacity-80">
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{post.timeToRead} min read</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
