import { ComponentProps } from "@/types";
import { features } from "@/data";

type FeaturesSectionProps = ComponentProps;

export default function FeaturesSection({ className = "" }: FeaturesSectionProps) {
  return (
    <section id="features" className={`py-20 bg-white dark:bg-secondary-900 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
            Why Choose CXP?
          </h2>
          <p className="text-xl text-secondary-600 dark:text-secondary-300">
            정확하고 신뢰할 수 있는 LCA 분석을 위한 핵심 기능들
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-8 rounded-xl bg-primary-50 dark:bg-secondary-800">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-secondary-600 dark:text-secondary-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}