import Link from "next/link";
import StatsCards from "@/components/dashboard/StatsCards";
import ProjectsTable from "@/components/dashboard/ProjectsTable";
import { Button } from "@/components/ui/Button";

export default function TransportTrackingDashboard() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="mb-8 flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-secondary-900 dark:text-white mb-2">
            운송 증적 수집 대시보드
          </h1>
          <p className="text-secondary-600 dark:text-secondary-300">
            LCA 운송 데이터 수집 및 분석 현황을 확인하세요
          </p>
        </div>
      </div>

      {/* Statistics Cards */}
      <StatsCards />

      {/* Projects Table */}
      <ProjectsTable />
    </div>
  );
}
