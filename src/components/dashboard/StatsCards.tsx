"use client";

import { Card, CardContent } from "@/components/ui/Card";

interface StatCard {
  id: string;
  label: string;
  value: number;
  color: "primary" | "warning" | "success" | "danger";
}

const statsData: StatCard[] = [
  {
    id: "total",
    label: "총 프로젝트",
    value: 12,
    color: "primary"
  },
  {
    id: "processing",
    label: "처리 중",
    value: 3,
    color: "warning"
  },
  {
    id: "completed",
    label: "완료",
    value: 8,
    color: "success"
  },
  {
    id: "failed",
    label: "실패",
    value: 1,
    color: "danger"
  }
];

const getColorClasses = (color: StatCard["color"]) => {
  switch (color) {
    case "primary":
      return "border-primary-200 dark:border-primary-800 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-950 dark:to-primary-900";
    case "warning":
      return "border-yellow-200 dark:border-yellow-800 bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-950 dark:to-yellow-900";
    case "success":
      return "border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900";
    case "danger":
      return "border-red-200 dark:border-red-800 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950 dark:to-red-900";
    default:
      return "border-secondary-200 dark:border-secondary-800";
  }
};

const getTextColorClasses = (color: StatCard["color"]) => {
  switch (color) {
    case "primary":
      return "text-primary-600 dark:text-primary-400";
    case "warning":
      return "text-yellow-600 dark:text-yellow-400";
    case "success":
      return "text-green-600 dark:text-green-400";
    case "danger":
      return "text-red-600 dark:text-red-400";
    default:
      return "text-secondary-600 dark:text-secondary-400";
  }
};

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statsData.map((stat) => (
        <Card 
          key={stat.id} 
          className={`transition-all duration-200 hover:shadow-md ${getColorClasses(stat.color)}`}
        >
          <CardContent className="p-6">
            <div className="text-center">
              <div className={`text-3xl font-bold mb-2 ${getTextColorClasses(stat.color)}`}>
                {stat.value}
              </div>
              <div className="text-sm font-medium text-secondary-700 dark:text-secondary-300">
                {stat.label}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}