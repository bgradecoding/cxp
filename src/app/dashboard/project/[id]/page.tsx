import Link from "next/link";
import DataListTable from "@/components/project/DataListTable";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function ProjectDetailPage({
  params,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any;
}) {
  // 프로젝트 ID를 기반으로 데이터를 가져올 수 있습니다
  const projectId = params.id;

  // 임시 프로젝트 데이터
  const projectName =
    projectId === "1" ? "2024년 1분기 운송 분석" : `프로젝트 ${projectId}`;

  return (
    <div className="space-y-6">
      {/* 브레드크럼 네비게이션 */}
      <div className="flex items-center text-sm text-secondary-600 dark:text-secondary-300">
        <Link href="/dashboard" className="hover:text-primary-600">
          대시보드 홈
        </Link>
        <span className="mx-2">&gt;</span>
        <Link
          href="/dashboard/transport-tracking"
          className="hover:text-primary-600"
        >
          운송 증적 수집
        </Link>
        <span className="mx-2">&gt;</span>
        <span className="text-primary-700 font-medium">{projectName}</span>
      </div>

      {/* 페이지 헤더 */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-secondary-900 dark:text-white mb-2">
          {projectName}
        </h1>
        <p className="text-secondary-600 dark:text-secondary-300">
          처리된 운송 경로 데이터를 확인하고 분석하세요
        </p>
      </div>

      {/* 데이터 목록 테이블 */}
      <DataListTable />
    </div>
  );
}
