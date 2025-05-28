import StepIndicator from "@/components/upload/StepIndicator";
import FileUploadSection from "@/components/upload/FileUploadSection";
import DataValidationSection from "@/components/upload/DataValidationSection";
import ProjectConfigSection from "@/components/upload/ProjectConfigSection";

export default function UploadPage() {
  const steps = [
    { number: 1, title: "파일 업로드", status: "active" as const },
    { number: 2, title: "데이터 검증", status: "pending" as const },
    { number: 3, title: "프로젝트 설정", status: "pending" as const },
    { number: 4, title: "처리 시작", status: "pending" as const },
  ];

  return (
    <div className="space-y-6">
      {/* 페이지 헤더 */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-secondary-900 dark:text-white mb-2">
          새 프로젝트 생성
        </h1>
        <div className="text-sm text-secondary-600 dark:text-secondary-300">
          대시보드 &gt; 새 프로젝트 생성
        </div>
      </div>

      {/* 단계 표시기 */}
      <StepIndicator currentStep={1} steps={steps} />

      {/* 파일 업로드 섹션 */}
      <FileUploadSection />

      {/* 데이터 검증 섹션 */}
      <DataValidationSection />

      {/* 프로젝트 설정 섹션 */}
      <ProjectConfigSection />
    </div>
  );
}
