"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export default function ProjectConfigSection() {
  const [projectName, setProjectName] = useState("2024년 1분기 운송 분석");
  const [analysisDate, setAnalysisDate] = useState("2024-03-25");
  const [priority, setPriority] = useState("보통");
  const [description, setDescription] = useState("");
  const [includeGoogleMaps, setIncludeGoogleMaps] = useState(true);
  const [includeKakaoMaps, setIncludeKakaoMaps] = useState(true);
  const [removeDuplicates, setRemoveDuplicates] = useState(false);

  return (
    <>
      {/* 프로젝트 설정 섹션 */}
      <div className="bg-white border-2 border-secondary-700 rounded-lg p-8 mb-8">
        <h2 className="text-lg font-bold text-secondary-900 mb-5 pb-3 border-b border-secondary-200">
          3. 프로젝트 설정
        </h2>

        <div className="space-y-5">
          {/* 프로젝트명 */}
          <div>
            <label className="block font-bold text-secondary-900 mb-2">프로젝트명 *</label>
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              placeholder="예: 2024년 1분기 운송 분석"
              className="w-full p-3 border border-secondary-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>

          {/* 분석 기준일과 우선순위 */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block font-bold text-secondary-900 mb-2">분석 기준일</label>
              <input
                type="date"
                value={analysisDate}
                onChange={(e) => setAnalysisDate(e.target.value)}
                className="w-full p-3 border border-secondary-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div className="flex-1">
              <label className="block font-bold text-secondary-900 mb-2">우선순위</label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-full p-3 border border-secondary-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="보통">보통</option>
                <option value="높음">높음</option>
                <option value="낮음">낮음</option>
              </select>
            </div>
          </div>

          {/* 설명 */}
          <div>
            <label className="block font-bold text-secondary-900 mb-2">설명</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="프로젝트에 대한 간단한 설명을 입력하세요"
              rows={3}
              className="w-full p-3 border border-secondary-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>

          {/* 처리 옵션 */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="font-bold text-secondary-900 mb-3">⚙️ 처리 옵션</div>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={includeGoogleMaps}
                  onChange={(e) => setIncludeGoogleMaps(e.target.checked)}
                  className="mr-2"
                />
                <span className="text-sm text-secondary-700">구글맵 경로 캡처 포함</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={includeKakaoMaps}
                  onChange={(e) => setIncludeKakaoMaps(e.target.checked)}
                  className="mr-2"
                />
                <span className="text-sm text-secondary-700">카카오맵 경로 캡처 포함</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={removeDuplicates}
                  onChange={(e) => setRemoveDuplicates(e.target.checked)}
                  className="mr-2"
                />
                <span className="text-sm text-secondary-700">중복 데이터 자동 제거</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* 하단 액션 버튼 */}
      <div className="flex justify-between items-center py-5 border-t border-secondary-200">
        <Button variant="secondary" size="lg">
          취소
        </Button>
        <div className="flex gap-3">
          <Button variant="secondary" size="lg">
            임시저장
          </Button>
          <Button variant="primary" size="lg">
            처리 시작
          </Button>
        </div>
      </div>

      {/* 주의사항 */}
      <div className="text-xs text-secondary-500 italic mt-3">
        * 처리 시작 후에는 프로젝트 설정을 변경할 수 없습니다. 모든 설정을 확인해주세요.
      </div>
    </>
  );
}