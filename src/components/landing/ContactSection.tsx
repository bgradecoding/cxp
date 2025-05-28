import { ComponentProps } from "@/types";
import { contactInfo } from "@/data";

type ContactSectionProps = ComponentProps;

export default function ContactSection({ className = "" }: ContactSectionProps) {
  return (
    <section id="contact" className={`py-20 bg-white dark:bg-secondary-900 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
          Contact Us
        </h2>
        <p className="text-xl text-secondary-600 dark:text-secondary-300 mb-8">
          CXP 솔루션에 대해 더 자세히 알아보고 싶으시거나 문의사항이 있으시면
          언제든 연락해 주세요.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white">{info.icon}</span>
              </div>
              <h3 className="font-semibold text-secondary-900 dark:text-white mb-2">
                {info.title}
              </h3>
              <p className="text-secondary-600 dark:text-secondary-300">
                {info.content}
              </p>
            </div>
          ))}
        </div>

        <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
          Get in Touch
        </button>
      </div>
    </section>
  );
}