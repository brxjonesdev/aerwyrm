"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type TabItemType = {
  id: string;
  label: string;
};

type PillTabsProps = {
  tabs?: TabItemType[];
  defaultActiveId?: string;
  onTabChange?: (id: string) => void;
  className?: string;
};

const MOCK_TABS: TabItemType[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

const PillTabs = React.forwardRef<HTMLDivElement, PillTabsProps>(
  (props, ref) => {
    const {
      tabs = MOCK_TABS,
      defaultActiveId = tabs[0]?.id,
      onTabChange,
      className,
    } = props;

    const [activeTab, setActiveTab] = React.useState(defaultActiveId);

    const handleClick = React.useCallback(
      (id: string) => {
        setActiveTab(id);
        onTabChange?.(id);
      },
      [onTabChange]
    );

    return (
      <div
        ref={ref}
        className={cn(
          // Base styles
          "flex items-center gap-1 p-1 bg-background border",
          // Mobile styles - vertical layout, full width, square corners
          "flex-col w-full rounded-xl",
          // Tablet and up - horizontal layout, fit content, rounded
          "sm:flex-row sm:w-fit sm:rounded-full",
          // Large screens - slightly more padding
          "lg:gap-2 lg:p-2",
          className
        )}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => handleClick(tab.id)}
            className={cn(
              "relative transition touch-none",
              // Mobile styles - full width, more padding, larger text
              "w-full px-4 py-3 rounded-lg text-base font-medium",
              // Tablet and up - fit content, less padding, smaller text
              "sm:w-auto sm:px-4 sm:py-2 sm:rounded-full sm:text-sm",
              // Large screens - slightly more padding
              "lg:px-6 lg:py-2.5",
              // Color states
              activeTab === tab.id
                ? "text-cyan-800"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="pill-tabs-active-pill"
                className={cn(
                  "absolute inset-0 bg-cyan-300",
                  // Mobile - rounded corners to match button
                  "rounded-lg",
                  // Tablet and up - fully rounded
                  "sm:rounded-full"
                )}
                transition={{ type: "spring", duration: 0.5 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>
    );
  }
);

PillTabs.displayName = "PillTabs";

export default PillTabs;
