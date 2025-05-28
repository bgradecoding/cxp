import { ComponentProps } from "@/types";

type HeroSectionProps = ComponentProps;

export default function HeroSection({ className = "" }: HeroSectionProps) {
  return (
    <section className={`pt-20 pb-32 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-secondary-900 dark:text-white mb-6">
          Comprehensive <span className="text-primary-600">LCA Platform</span>
        </h1>
        <p className="text-xl text-secondary-600 dark:text-secondary-300 mb-8 max-w-3xl mx-auto">
          전 과정 평가(LCA)를 위한 통합 솔루션으로 환경 영향을 정확하게
          측정하고 지속가능한 미래를 위한 데이터 기반 의사결정을 지원합니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
            Get Started
          </button>
          <button className="border-2 border-primary-600 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-950 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}