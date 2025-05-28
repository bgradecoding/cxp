import Image from "next/image";
import { ComponentProps } from "@/types";
import { footerSections } from "@/data";

type FooterProps = ComponentProps;

export default function Footer({ className = "" }: FooterProps) {
  return (
    <footer className={`bg-secondary-900 dark:bg-secondary-950 text-white py-12 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/images/favicon-32x32.svg"
                alt="CXP Logo"
                width={24}
                height={24}
                className="mr-2"
              />
              <span className="text-xl font-bold text-primary-400">CXP</span>
            </div>
            <p className="text-secondary-300">
              지속가능한 미래를 위한 전문 LCA 솔루션
            </p>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-secondary-300">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="hover:text-primary-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-secondary-800 mt-8 pt-8 text-center text-secondary-400">
          <p>&copy; 2024 CXP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}