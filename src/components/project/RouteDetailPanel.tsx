"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Cross2Icon, Pencil1Icon, UpdateIcon } from "@radix-ui/react-icons";

interface RouteDetail {
  id: number;
  departure: string;
  arrival: string;
  transportMode: string;
  segments: RouteSegment[];
}

interface RouteSegment {
  id: number;
  departure: string;
  arrival: string;
  mode: string;
  distance: string;
  status: "완료" | "대기중" | "처리중";
}

interface RouteDetailPanelProps {
  selectedRoute: RouteDetail | null;
  onClose: () => void;
}

export default function RouteDetailPanel({
  selectedRoute,
  onClose,
}: RouteDetailPanelProps) {
  const [searchType, setSearchType] = useState<"kakao" | "google">("kakao");

  if (!selectedRoute) return null;

  const mockSegments: RouteSegment[] = [
    {
      id: 1,
      departure: selectedRoute.departure,
      arrival: "인천국제공항",
      mode: "driving",
      distance: "98km",
      status: "완료",
    },
    {
      id: 2,
      departure: "인천국제공항",
      arrival: "뉴욕 JFK공항",
      mode: "flying",
      distance: "10,850km",
      status: "처리중",
    },
    {
      id: 3,
      departure: "뉴욕 JFK공항",
      arrival: selectedRoute.arrival,
      mode: "driving",
      distance: "0km",
      status: "대기중",
    },
  ];

  return (
    <div className="fixed inset-y-0 right-0 w-96 bg-white border-l border-secondary-200 shadow-xl z-50 overflow-y-auto">
      {/* 헤더 */}
      <div className="sticky top-0 bg-white border-b border-secondary-200 p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-secondary-900">
            데이터 검토 및 수정
          </h2>
          <Button variant="outline" size="sm" onClick={onClose}>
            <Cross2Icon className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* 주소 데이터 검토 섹션 */}
      <div className="p-4 border-b border-secondary-200">
        <h3 className="text-sm font-semibold text-secondary-900 mb-3">
          주소 데이터 검토
          <span className="ml-2 text-xs text-secondary-500">
            총 3개 주소 생성
          </span>
        </h3>

        <div className="space-y-3">
          {mockSegments.map((segment, index) => (
            <div
              key={segment.id}
              className="flex items-center gap-3 p-3 bg-secondary-50 rounded-lg"
            >
              <div className="flex-shrink-0 w-6 h-6 bg-secondary-200 rounded-full flex items-center justify-center text-xs font-medium">
                {index + 1}
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  {index === 0 && (
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  )}
                  {index === mockSegments.length - 1 && (
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  )}
                  {index > 0 && index < mockSegments.length - 1 && (
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  )}
                  <span className="text-sm text-secondary-700">
                    {index === 0
                      ? "출발지"
                      : index === mockSegments.length - 1
                      ? "도착지"
                      : "경유지"}
                  </span>
                </div>
                <div className="text-sm font-medium text-secondary-900">
                  {index === 0 ? segment.departure : segment.arrival}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-secondary-500">
                    {segment.mode === "driving" ? "🚗 driving" : "✈️ flying"}
                  </span>
                  <Badge
                    variant={
                      segment.status === "완료"
                        ? "success"
                        : segment.status === "처리중"
                        ? "warning"
                        : "secondary"
                    }
                  >
                    {segment.status}
                  </Badge>
                  <Button variant="outline" size="sm" className="h-6 px-2">
                    <Pencil1Icon className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 경고 메시지 */}
        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
          <div className="flex items-start gap-2">
            <div className="text-yellow-600 mt-0.5">⚠️</div>
            <div className="text-sm text-yellow-800">
              <div className="font-medium mb-1">
                검토가 필요한 주소가 있습니다
              </div>
              <div className="text-xs">
                노란색으로 표시된 주소 신뢰도가 낮아 검토가 필요합니다. 수정
                버튼을 클릭하여 주소를 수정하거나, 웹을 클릭하여 지도에서 직접
                확인하세요.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          <Button variant="outline" size="sm" className="flex-1">
            다시 업로드
          </Button>
          <Button
            variant="default"
            size="sm"
            className="bg-secondary-900 hover:bg-secondary-800"
          >
            전체 처리 시작
          </Button>
        </div>
      </div>

      {/* 경로 확인 및 수정 섹션 */}
      <div className="p-4">
        <h3 className="text-sm font-semibold text-secondary-900 mb-3">
          경로 확인 및 수정
        </h3>

        {/* 출발지/도착지 */}
        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <div>
              <div className="text-xs text-secondary-500">출발지</div>
              <div className="text-sm font-medium text-secondary-900">
                {selectedRoute.departure}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <div>
              <div className="text-xs text-secondary-500">도착지</div>
              <div className="text-sm font-medium text-secondary-900">
                {selectedRoute.arrival}
              </div>
            </div>
          </div>
        </div>

        {/* 검색 옵션 */}
        <div className="mb-4">
          <div className="flex gap-2 mb-3">
            <Button
              variant={searchType === "kakao" ? "default" : "outline"}
              size="sm"
              onClick={() => setSearchType("kakao")}
              className="flex-1"
            >
              카카오맵
            </Button>
            <Button
              variant={searchType === "google" ? "default" : "outline"}
              size="sm"
              onClick={() => setSearchType("google")}
              className="flex-1"
            >
              구글맵
            </Button>
          </div>

          <Button className="w-full bg-secondary-900 hover:bg-secondary-800 text-white">
            <span className="mr-2">🔍</span>
            경로 검색
          </Button>
          <Button variant="outline" size="sm" className="w-full mt-2">
            <UpdateIcon className="w-4 h-4 mr-2" />
          </Button>
        </div>

        {/* 지도 영역 (placeholder) */}
        <div className="h-64 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
          <div className="text-center text-secondary-500">
            <div className="text-2xl mb-2">🗺️</div>
            <div className="text-sm">경로 캡쳐</div>
          </div>
        </div>
      </div>
    </div>
  );
}
