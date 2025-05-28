import { Feature, LCAModule, ContactInfo, FooterSection } from "@/types";

export const features: Feature[] = [
  {
    icon: "📊",
    title: "Data-Driven Analysis",
    description: "정확한 데이터를 기반으로 한 과학적 분석과 신뢰할 수 있는 결과 제공"
  },
  {
    icon: "🔄",
    title: "Modular System",
    description: "필요에 따라 선택할 수 있는 모듈별 기능으로 효율적인 평가 프로세스"
  },
  {
    icon: "🌱",
    title: "Sustainability Focus",
    description: "지속가능성을 위한 실질적인 인사이트와 개선 방안 제시"
  }
];

export const lcaModules: LCAModule[] = [
  {
    title: "Goal & Scope",
    description: "평가 목표 설정 및 범위 정의"
  },
  {
    title: "Inventory Analysis",
    description: "인벤토리 데이터 수집 및 분석"
  },
  {
    title: "Impact Assessment",
    description: "환경 영향 평가 및 정량화"
  },
  {
    title: "Interpretation",
    description: "결과 해석 및 개선 방안 도출"
  }
];

export const contactInfo: ContactInfo[] = [
  {
    icon: "📧",
    title: "Email",
    content: "contact@cxp.com"
  },
  {
    icon: "📞",
    title: "Phone",
    content: "+82-2-1234-5678"
  },
  {
    icon: "🏢",
    title: "Office",
    content: "Seoul, South Korea"
  }
];

export const footerSections: FooterSection[] = [
  {
    title: "Solutions",
    links: [
      { label: "LCA Assessment", href: "#" },
      { label: "Data Analysis", href: "#" },
      { label: "Reporting", href: "#" }
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "News", href: "#" }
    ]
  },
  {
    title: "Support",
    links: [
      { label: "Documentation", href: "#" },
      { label: "Help Center", href: "#" },
      { label: "Contact", href: "#" }
    ]
  }
];