import { cn } from "@/lib/utils"
import { ReactNode } from "react"
import { Construction, Rocket,  Zap, Code, Sparkles, Bell, Calendar, Users } from 'lucide-react'
import { Button } from "@/shared/ui/button"
import { Badge } from "@/shared/ui/badge"
import { Card, CardContent } from "@/shared/ui/card"

interface DevPlaceholderProps {
  variant?: "card" | "inline" | "fullscreen" | "banner"
  status?: "planning" | "development" | "testing" | "coming-soon" | "beta"
  title?: string
  description?: string
  estimatedDate?: string
  progress?: number
  showNotifyButton?: boolean
  showProgress?: boolean
  className?: string
  children?: ReactNode
  onNotifyClick?: () => void
  features?: string[]
}

const statusConfig = {
  planning: {
    icon: Code,
    label: "In Planning",
    color: "bg-blue-500",
    badgeVariant: "secondary" as const,
    message: "We're designing this feature"
  },
  development: {
    icon: Construction,
    label: "In Development", 
    color: "bg-orange-500",
    badgeVariant: "default" as const,
    message: "Our team is building this feature"
  },
  testing: {
    icon: Zap,
    label: "In Testing",
    color: "bg-purple-500", 
    badgeVariant: "secondary" as const,
    message: "Almost ready! We're testing everything"
  },
  "coming-soon": {
    icon: Rocket,
    label: "Coming Soon",
    color: "bg-green-500",
    badgeVariant: "default" as const,
    message: "This feature will be available soon"
  },
  beta: {
    icon: Sparkles,
    label: "Beta",
    color: "bg-yellow-500",
    badgeVariant: "outline" as const,
    message: "Available in beta - try it out!"
  }
}

export function Placeholder({
  variant = "card",
  status = "development",
  title = "New Feature",
  description,
  estimatedDate,
  progress,
  showNotifyButton = true,
  showProgress = false,
  className,
  children,
  onNotifyClick,
  features = []
}: DevPlaceholderProps) {
  const config = statusConfig[status]
  const Icon = config.icon

  const content = (
    <div className="text-center space-y-4">
      {/* Icon and Status */}
      <div className="flex flex-col items-center space-y-3">
        <div className={cn(
          "w-16 h-16 rounded-full flex items-center justify-center",
          config.color,
          "bg-opacity-10"
        )}>
          <Icon className={cn("w-8 h-8", config.color.replace('bg-', 'text-'))} />
        </div>
        <Badge variant={config.badgeVariant}>{config.label}</Badge>
      </div>

      {/* Title and Description */}
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground">
          {description || config.message}
        </p>
      </div>

      {/* Progress Bar */}
      {showProgress && progress !== undefined && (
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className={cn("h-2 rounded-full transition-all duration-300", config.color)}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {/* Features List */}
      {features.length > 0 && (
        <div className="space-y-2">
          <h4 className="font-medium text-sm">What&apos;s coming:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-current opacity-50" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Estimated Date */}
      {estimatedDate && (
        <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4" />
          <span>Expected: {estimatedDate}</span>
        </div>
      )}

      {/* Action Buttons */}
      {showNotifyButton && (
        <div className="flex flex-col sm:flex-row gap-2 justify-center">
          <Button 
            variant="outline" 
            size="sm"
            onClick={onNotifyClick}
            className="flex items-center space-x-2"
          >
            <Bell className="w-4 h-4" />
            <span>Notify me when ready</span>
          </Button>
          {status === "beta" && (
            <Button size="sm" className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>Join Beta</span>
            </Button>
          )}
        </div>
      )}

      {children}
    </div>
  )

  // Render based on variant
  switch (variant) {
    case "fullscreen":
      return (
        <div className={cn(
          "min-h-[60vh] flex items-center justify-center p-8",
          className
        )}>
          <div className="max-w-md w-full">
            {content}
          </div>
        </div>
      )

    case "banner":
      return (
        <div className={cn(
          "w-full p-6 border rounded-lg bg-muted/30",
          className
        )}>
          {content}
        </div>
      )

    case "inline":
      return (
        <div className={cn(
          "flex items-center space-x-4 p-4 border rounded-lg bg-muted/30",
          className
        )}>
          <div className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0",
            config.color,
            "bg-opacity-10"
          )}>
            <Icon className={cn("w-5 h-5", config.color.replace('bg-', 'text-'))} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-1">
              <h4 className="font-medium truncate">{title}</h4>
              <Badge variant={config.badgeVariant} className="text-xs">
                {config.label}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              {description || config.message}
            </p>
          </div>
          {showNotifyButton && (
            <Button variant="outline" size="sm" onClick={onNotifyClick}>
              <Bell className="w-4 h-4" />
            </Button>
          )}
        </div>
      )

    case "card":
    default:
      return (
        <Card className={cn("w-full", className)}>
          <CardContent className="p-6">
            {content}
          </CardContent>
        </Card>
      )
  }
}
