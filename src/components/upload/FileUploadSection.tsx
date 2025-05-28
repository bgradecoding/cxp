"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

interface UploadedFile {
  id: string;
  name: string;
  size: string;
  uploadDate: string;
  rowCount: number;
}

export default function FileUploadSection() {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([
    {
      id: "1",
      name: "2024년_1분기_운송데이터.xlsx",
      size: "2.3MB",
      uploadDate: "2024-03-25 14:30",
      rowCount: 487,
    },
  ]);

  const handleFileDelete = (fileId: string) => {
    setUploadedFiles((files) => files.filter((file) => file.id !== fileId));
  };

  return (
    <div className="bg-white border-2 border-secondary-700 rounded-lg p-8 mb-8">
      <h2 className="text-lg font-bold text-secondary-900 mb-5 pb-3 border-b border-secondary-200">
        1. 파일 업로드
      </h2>

      {/* 템플릿 안내 */}
      <div className="bg-primary-50 border border-primary-200 rounded-lg p-5 mb-5">
        <div className="font-bold text-secondary-900 mb-3">
          📋 업로드 파일 형식 안내
        </div>
        <ul className="text-sm text-secondary-700 mb-4 ml-5 space-y-1">
          <li>지원 형식: Excel (.xlsx, .xls), CSV (.csv)</li>
          <li>최대 파일 크기: 10MB</li>
          <li>최대 데이터 행: 1,000개</li>
        </ul>
        <Button variant="secondary" size="sm">
          📥 템플릿 다운로드
        </Button>
      </div>

      {/* 드래그 앤 드롭 영역 */}
      <div className="border-3 border-dashed border-primary-600 bg-primary-50 rounded-lg p-12 text-center mb-5 cursor-pointer hover:bg-primary-100 transition-colors">
        <div className="text-5xl text-primary-600 mb-4">📁</div>
        <div className="text-base text-secondary-900 mb-2">
          파일을 드래그하여 놓거나 클릭하여 선택하세요
        </div>
        <div className="text-sm text-secondary-600">
          Excel 또는 CSV 파일만 업로드 가능합니다
        </div>
      </div>

      {/* 파일 선택 버튼 */}
      <div className="flex gap-4 mb-5">
        <Button variant="default">파일 선택</Button>
        <Button variant="secondary">샘플 데이터 로드</Button>
      </div>

      {/* 업로드된 파일 목록 */}
      {uploadedFiles.length > 0 && (
        <div className="space-y-3">
          {uploadedFiles.map((file) => (
            <div
              key={file.id}
              className="flex items-center p-4 border border-secondary-200 rounded-lg bg-white"
            >
              <div className="text-2xl text-green-600 mr-4">📊</div>
              <div className="flex-1">
                <div className="font-bold text-secondary-900 mb-1">
                  {file.name}
                </div>
                <div className="text-sm text-secondary-600">
                  크기: {file.size} | 업로드: {file.uploadDate} | 행 수:{" "}
                  {file.rowCount}개
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="default" size="sm">
                  미리보기
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => handleFileDelete(file.id)}
                >
                  삭제
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
