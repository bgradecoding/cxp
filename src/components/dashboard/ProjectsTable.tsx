"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Progress } from "@/components/ui/Progress";
import {
  PlusIcon,
  EyeOpenIcon,
  DownloadIcon,
  PauseIcon,
  ReloadIcon,
  FileTextIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

interface Project {
  id: string;
  name: string;
  createdAt: string;
  dataCount: number;
  progress: number;
  status: "completed" | "processing" | "failed";
}

const projectsData: Project[] = [
  {
    id: "1",
    name: "2024년 1분기 운송 분석",
    createdAt: "2024-03-15",
    dataCount: 487,
    progress: 100,
    status: "completed",
  },
  {
    id: "2",
    name: "유럽 수입 제품 운송 평가",
    createdAt: "2024-03-20",
    dataCount: 324,
    progress: 75,
    status: "processing",
  },
  {
    id: "3",
    name: "동남아시아 원료 운송",
    createdAt: "2024-03-18",
    dataCount: 156,
    progress: 45,
    status: "processing",
  },
  {
    id: "4",
    name: "국내 물류 네트워크 분석",
    createdAt: "2024-03-12",
    dataCount: 643,
    progress: 0,
    status: "failed",
  },
  {
    id: "5",
    name: "북미 수출 운송 경로",
    createdAt: "2024-03-10",
    dataCount: 298,
    progress: 100,
    status: "completed",
  },
];

const getStatusVariant = (status: Project["status"]) => {
  switch (status) {
    case "completed":
      return "success";
    case "processing":
      return "warning";
    case "failed":
      return "destructive";
    default:
      return "secondary";
  }
};

const getStatusLabel = (status: Project["status"]) => {
  switch (status) {
    case "completed":
      return "완료";
    case "processing":
      return "처리중";
    case "failed":
      return "실패";
    default:
      return "알 수 없음";
  }
};

export default function ProjectsTable() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-secondary-900 dark:text-white">
              최근 프로젝트
            </h2>
            <p className="text-sm text-secondary-600 dark:text-secondary-400 mt-1">
              운송 증적 수집 프로젝트 현황을 확인하세요
            </p>
          </div>
          <Link href="/dashboard/upload">
            <Button className="gap-2">
              <PlusIcon className="w-4 h-4" />새 프로젝트 생성
            </Button>
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-secondary-200 dark:border-secondary-700">
                <th className="text-left py-3 px-4 font-medium text-secondary-900 dark:text-white">
                  프로젝트명
                </th>
                <th className="text-left py-3 px-4 font-medium text-secondary-900 dark:text-white">
                  생성일
                </th>
                <th className="text-left py-3 px-4 font-medium text-secondary-900 dark:text-white">
                  데이터 수
                </th>
                <th className="text-left py-3 px-4 font-medium text-secondary-900 dark:text-white">
                  진행률
                </th>
                <th className="text-left py-3 px-4 font-medium text-secondary-900 dark:text-white">
                  상태
                </th>
                <th className="text-left py-3 px-4 font-medium text-secondary-900 dark:text-white">
                  작업
                </th>
              </tr>
            </thead>
            <tbody>
              {projectsData.map((project) => (
                <tr
                  key={project.id}
                  className="border-b border-secondary-100 dark:border-secondary-800 hover:bg-secondary-50 dark:hover:bg-secondary-800/50 transition-colors"
                >
                  <td className="py-4 px-4">
                    <Link href={`/dashboard/project/${project.id}`}>
                      <div className="font-medium text-secondary-900 dark:text-white cursor-pointer hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                        {project.name}
                      </div>
                    </Link>
                  </td>
                  <td className="py-4 px-4 text-secondary-600 dark:text-secondary-400">
                    {project.createdAt}
                  </td>
                  <td className="py-4 px-4 text-secondary-600 dark:text-secondary-400">
                    {project.dataCount.toLocaleString()}개
                  </td>
                  <td className="py-4 px-4">
                    <div className="space-y-2">
                      <div className="text-sm text-secondary-600 dark:text-secondary-400">
                        {project.progress}%
                      </div>
                      <Progress value={project.progress} className="w-24" />
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <Badge variant={getStatusVariant(project.status)}>
                      {getStatusLabel(project.status)}
                    </Badge>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      {project.status === "completed" && (
                        <>
                          <Link href={`/dashboard/project/${project.id}`}>
                            <Button size="sm" variant="outline" className="gap-1">
                              <EyeOpenIcon className="w-3 h-3" />
                              결과보기
                            </Button>
                          </Link>
                          <Button size="sm" variant="outline" className="gap-1">
                            <DownloadIcon className="w-3 h-3" />
                            다운로드
                          </Button>
                        </>
                      )}
                      {project.status === "processing" && (
                        <>
                          <Button size="sm" variant="outline" className="gap-1">
                            <EyeOpenIcon className="w-3 h-3" />
                            모니터링
                          </Button>
                          <Button size="sm" variant="outline" className="gap-1">
                            <PauseIcon className="w-3 h-3" />
                            일시정지
                          </Button>
                        </>
                      )}
                      {project.status === "failed" && (
                        <>
                          <Button size="sm" variant="outline" className="gap-1">
                            <ReloadIcon className="w-3 h-3" />
                            재시작
                          </Button>
                          <Button size="sm" variant="outline" className="gap-1">
                            <FileTextIcon className="w-3 h-3" />
                            로그보기
                          </Button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 p-4 bg-secondary-50 dark:bg-secondary-800/50 rounded-lg">
          <p className="text-sm text-secondary-600 dark:text-secondary-400 italic">
            * 배치 처리는 약 5-10분 소요됩니다. 처리 중인 프로젝트는 실시간으로
            진행률이 업데이트됩니다.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
