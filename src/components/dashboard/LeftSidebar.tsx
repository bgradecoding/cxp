"use client";

import { useState } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ActivityLogIcon,
} from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

interface SidebarItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href: string;
}

interface LeftSidebarProps {
  className?: string;
  onToggle?: (collapsed: boolean) => void;
}

const menuItems: SidebarItem[] = [
  {
    id: "transport-tracking",
    label: "운송 증적 수집",
    icon: <ActivityLogIcon className="w-5 h-5" />,
    href: "/dashboard/transport-tracking",
  },
];

export default function LeftSidebar({
  className = "",
  onToggle,
}: LeftSidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    const newCollapsed = !isCollapsed;
    setIsCollapsed(newCollapsed);
    onToggle?.(newCollapsed);
  };

  return (
    <div
      className={cn(
        "bg-white dark:bg-secondary-800 border-r border-primary-100 dark:border-secondary-700 transition-all duration-300 flex flex-col min-h-screen",
        isCollapsed ? "w-16" : "w-64",
        "md:relative md:block",
        className
      )}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-4 border-b border-primary-100 dark:border-secondary-700">
        {!isCollapsed && (
          <h2 className="text-lg font-semibold text-secondary-900 dark:text-white">
            메뉴
          </h2>
        )}
        <button
          onClick={toggleSidebar}
          className={cn(
            "p-2 rounded-lg hover:bg-primary-50 dark:hover:bg-secondary-700 transition-colors",
            "text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400",
            isCollapsed && "mx-auto"
          )}
        >
          {isCollapsed ? (
            <ChevronRightIcon className="w-4 h-4" />
          ) : (
            <ChevronLeftIcon className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-2">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-3 rounded-lg transition-colors",
                  "text-secondary-700 dark:text-secondary-300",
                  "hover:bg-primary-50 dark:hover:bg-secondary-700",
                  "hover:text-primary-700 dark:hover:text-primary-400",
                  "group relative"
                )}
                title={isCollapsed ? item.label : undefined}
              >
                <div className="flex-shrink-0 text-secondary-500 dark:text-secondary-400 group-hover:text-primary-600 dark:group-hover:text-primary-400">
                  {item.icon}
                </div>
                {!isCollapsed && (
                  <span className="font-medium text-sm truncate">
                    {item.label}
                  </span>
                )}

                {/* Tooltip for collapsed state */}
                {isCollapsed && (
                  <div className="absolute left-full ml-2 px-2 py-1 bg-secondary-900 dark:bg-secondary-100 text-white dark:text-secondary-900 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                    {item.label}
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-secondary-900 dark:border-r-secondary-100"></div>
                  </div>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Sidebar Footer */}
      <div className="p-4 border-t border-primary-100 dark:border-secondary-700">
        {!isCollapsed ? (
          <div className="text-xs text-secondary-500 dark:text-secondary-400">
            CXP Dashboard v1.0
          </div>
        ) : (
          <div className="w-2 h-2 bg-primary-500 rounded-full mx-auto"></div>
        )}
      </div>
    </div>
  );
}
