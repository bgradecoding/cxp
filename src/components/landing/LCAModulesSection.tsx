import { ComponentProps } from "@/types";
import { lcaModules } from "@/data";

type LCAModulesSectionProps = ComponentProps;

export default function LCAModulesSection({ className = "" }: LCAModulesSectionProps) {
  return (
    <section
      id="modules"
      className={`py-20 bg-primary-50 dark:bg-secondary-950 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
            LCA Assessment Modules
          </h2>
          <p className="text-xl text-secondary-600 dark:text-secondary-300">
            전문적인 LCA 평가를 위한 모듈별 솔루션
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {lcaModules.map((module, index) => (
            <div key={index} className="bg-white dark:bg-secondary-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">
                {module.title}
              </h3>
              <p className="text-secondary-600 dark:text-secondary-300 text-sm">
                {module.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}