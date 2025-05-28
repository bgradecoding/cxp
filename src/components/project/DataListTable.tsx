"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import RouteDetailPanel from "./RouteDetailPanel";

interface DataItem {
  id: number;
  departure: string;
  arrival: string;
  transportMode: string;
  route: string;
  status: "완료" | "처리 실패";
}

interface RouteDetail {
  id: number;
  departure: string;
  arrival: string;
  transportMode: string;
  segments: any[];
}

export default function DataListTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRoute, setSelectedRoute] = useState<RouteDetail | null>(null);
  const itemsPerPage = 15;

  const dataItems: DataItem[] = [
    {
      id: 1,
      departure: "대구",
      arrival: "뉴욕",
      transportMode: "복합",
      route: "대구 (자동차, 98km) → 대구국제공항 (항공, 0km) → 뉴욕 (자동차, 0km)",
      status: "처리 실패",
    },
    {
      id: 2,
      departure: "청주",
      arrival: "상하이",
      transportMode: "복합",
      route: "청주 (자동차, 90km) → 청주국제공항 (항공, 4,794km) → 푸동국제공항 → 상하이 (자동차, 138km)",
      status: "완료",
    },
    {
      id: 3,
      departure: "청주",
      arrival: "자카르타",
      transportMode: "복합",
      route: "청주 (자동차, 122km) → 청주국제공항 (항공, 2,696km) → 수카르노 하타국제공항 → 자카르타 (자동차, 107km)",
      status: "완료",
    },
    {
      id: 4,
      departure: "광주",
      arrival: "상하이",
      transportMode: "복합",
      route: "광주 (자동차, 98km) → 무안국제공항 (항공, 2,858km) → 푸동국제공항 → 상하이 (자동차, 71km)",
      status: "완료",
    },
    {
      id: 5,
      departure: "대전",
      arrival: "오클랜드",
      transportMode: "복합",
      route: "대전 (자동차, 110km) → 청주국제공항 (항공, 2,576km) → 오클랜드국제공항 → 오클랜드 (자동차, 67km)",
      status: "완료",
    },
    {
      id: 6,
      departure: "청주",
      arrival: "홍콩",
      transportMode: "복합",
      route: "청주 (자동차, 135km) → 청주국제공항 (항공, 0km) → 홍콩 (자동차, 0km)",
      status: "처리 실패",
    },
    {
      id: 7,
      departure: "대전",
      arrival: "뉴욕",
      transportMode: "복합",
      route: "대전 (자동차, 96km) → 청주국제공항 (항공, 5,273km) → JFK → 뉴욕 (자동차, 82km)",
      status: "완료",
    },
    {
      id: 8,
      departure: "광주",
      arrival: "도쿄",
      transportMode: "복합",
      route: "광주 (자동차, 87km) → 무안국제공항 (항공, 2,454km) → 나리타국제공항 → 도쿄 (자동차, 123km)",
      status: "완료",
    },
    {
      id: 9,
      departure: "인천",
      arrival: "멜버른",
      transportMode: "복합",
      route: "인천 (자동차, 69km) → 인천국제공항 (항공, 1,710km) → 멜버른공항 → 멜버른 (자동차, 97km)",
      status: "완료",
    },
    {
      id: 10,
      departure: "고양",
      arrival: "멜버른",
      transportMode: "복합",
      route: "고양 (자동차, 108km) → 인천국제공항 (항공, 1,730km) → 멜버른공항 → 멜버른 (자동차, 82km)",
      status: "완료",
    },
    {
      id: 11,
      departure: "광주",
      arrival: "시드니",
      transportMode: "복합",
      route: "광주 (자동차, 54km) → 무안국제공항 (항공, 4,185km) → 킹스포드 스미스공항 → 시드니 (자동차, 57km)",
      status: "완료",
    },
    {
      id: 12,
      departure: "대구",
      arrival: "쿠알라룸푸르",
      transportMode: "복합",
      route: "대구 (자동차, 67km) → 대구국제공항 (항공, 0km) → 쿠알라룸푸르 (자동차, 0km)",
      status: "처리 실패",
    },
    {
      id: 13,
      departure: "인천",
      arrival: "자카르타",
      transportMode: "복합",
      route: "인천 (자동차, 97km) → 인천국제공항 (항공, 0km) → 자카르타 (자동차, 0km)",
      status: "처리 실패",
    },
    {
      id: 14,
      departure: "대전",
      arrival: "멜버른",
      transportMode: "복합",
      route: "대전 (자동차, 130km) → 청주국제공항 (항공, 4,187km) → 멜버른공항 → 멜버른 (자동차, 59km)",
      status: "완료",
    },
  ];

  const totalPages = Math.ceil(dataItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = dataItems.slice(startIndex, startIndex + itemsPerPage);

  const handleRowClick = (item: DataItem) => {
    const routeDetail: RouteDetail = {
      id: item.id,
      departure: item.departure,
      arrival: item.arrival,
      transportMode: item.transportMode,
      segments: [],
    };
    setSelectedRoute(routeDetail);
  };

  const handleClosePanel = () => {
    setSelectedRoute(null);
  };

  return (
    <div className="bg-white rounded-lg border border-secondary-200 overflow-hidden">
      {/* 테이블 헤더 */}
      <div className="flex justify-between items-center p-6 border-b border-secondary-200">
        <h2 className="text-xl font-bold text-secondary-900">상세 경로 데이터</h2>
        <div className="flex gap-3">
          <select className="px-3 py-2 border border-secondary-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option value="all">전체</option>
            <option value="completed">완료</option>
            <option value="failed">처리 실패</option>
          </select>
          <Button variant="secondary" size="sm">
            📥 엑셀 저장
          </Button>
          <Button variant="primary" size="sm">
            🔽 프로젝트 저장
          </Button>
        </div>
      </div>

      {/* 테이블 */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-secondary-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-secondary-900 border-r border-secondary-200">
                No.
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-secondary-900 border-r border-secondary-200">
                출발지
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-secondary-900 border-r border-secondary-200">
                도착지
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-secondary-900 border-r border-secondary-200">
                운송수단
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-secondary-900 border-r border-secondary-200">
                요약
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-secondary-900">
                상태
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr
                key={item.id}
                onClick={() => handleRowClick(item)}
                className={`border-b border-secondary-100 hover:bg-primary-50 cursor-pointer transition-colors ${
                  index % 2 === 0 ? "bg-white" : "bg-secondary-25"
                } ${selectedRoute?.id === item.id ? "bg-primary-100" : ""}`}
              >
                <td className="px-4 py-4 text-sm text-secondary-700 border-r border-secondary-200">
                  {startIndex + index + 1}
                </td>
                <td className="px-4 py-4 text-sm text-secondary-900 font-medium border-r border-secondary-200">
                  {item.departure}
                </td>
                <td className="px-4 py-4 text-sm text-secondary-900 font-medium border-r border-secondary-200">
                  {item.arrival}
                </td>
                <td className="px-4 py-4 text-sm text-secondary-700 border-r border-secondary-200">
                  {item.transportMode}
                </td>
                <td className="px-4 py-4 text-sm text-secondary-700 border-r border-secondary-200 max-w-md">
                  <div className="truncate" title={item.route}>
                    {item.route}
                  </div>
                </td>
                <td className="px-4 py-4">
                  <Badge variant={item.status === "완료" ? "success" : "destructive"}>
                    {item.status}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 페이지네이션 */}
      <div className="flex justify-between items-center px-6 py-4 border-t border-secondary-200">
        <div className="text-sm text-secondary-600">
          총 {dataItems.length}개 항목 중 {startIndex + 1}-{Math.min(startIndex + itemsPerPage, dataItems.length)}개 표시
        </div>
        <div className="flex gap-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            이전
          </Button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "primary" : "secondary"}
              size="sm"
              onClick={() => setCurrentPage(page)}
              className="min-w-[40px]"
            >
              {page}
            </Button>
          ))}
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            다음
          </Button>
        </div>
      </div>

      {/* 사이드 디테일 패널 */}
      {selectedRoute && (
        <RouteDetailPanel
          selectedRoute={selectedRoute}
          onClose={handleClosePanel}
        />
      )}
    </div>
  );
}