"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "ES" | "EN"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  // Intentar obtener el idioma guardado en localStorage, o usar ES por defecto
  const [language, setLanguage] = useState<Language>("ES")

  // Cargar el idioma guardado cuando el componente se monta
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "ES" || savedLanguage === "EN")) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Guardar el idioma en localStorage cuando cambia
  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  // Función para obtener la traducción
  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

// Traducciones
const translations: Record<Language, Record<string, string>> = {
  ES: {
    // Navegación
    services: "Servicios",
    "about-us": "Sobre nosotros",
    contact: "Contacto",

    // Hero
    "fintech-solutions": "Soluciones fintech para tu negocio",
    "digital-investment-banking": "Banca de inversión digital",
    "innovative-financial-services":
      "Servicios financieros innovadores para impulsar el crecimiento de tu empresa en la era digital.",
    "know-our-services": "Conocé nuestros servicios",

    // Servicios
    "volsmart-services": "Servicios de Volsmart",
    "services-description":
      "Ofrecemos soluciones financieras y tecnológicas adaptadas a las necesidades de tu empresa.",
    tokenization: "Tokenización",
    "tokenization-description": "Estructuración financiera y jurídica, plataforma tecnológica, comercialización.",
    "financial-management": "Gestión financiera",
    "financial-management-description":
      "Actuamos como Fractional CFO para tu empresa. Nos especializamos en Real Estate.",
    audit: "Auditoría",
    "audit-description": "Realizamos auditorías de estados contables para entidades financieras.",
    "business-intelligence": "Business Intelligence",
    "business-intelligence-description": "Consultoría en inteligencia de negocios, desarrollo de tableros de control.",

    // Tokenización
    "asset-tokenization": "Tokenización de Activos",
    "tokenization-long-description":
      "Obtenemos fondos para proyectos de distintas verticales utilizando la tokenización de activos del mundo real como herramienta.",
    prefeasibility: "Prefactibilidad",
    "prefeasibility-description": "Evaluamos tu proyecto para determinar si es potencialmente tokenizable.",
    "technical-financial-analysis": "Análisis de viabilidad técnica y financiera",
    "market-potential": "Evaluación del potencial de mercado",
    "express-consulting": "Consultoría Express",
    "express-consulting-description":
      "Preparamos la documentación necesaria para cumplir con normativas legales y fiduciarias.",
    "legal-documentation": "Elaboración de documentación legal",
    "alyc-presentation": "Presentación a diferentes ALyCs",
    structuring: "Estructuración",
    "structuring-description": "Implementamos la solución completa para la emisión y gestión de los tokens.",
    "tokenomics-design": "Diseño de tokenomics",
    "platform-development": "Desarrollo de plataforma tecnológica",
    "token-issuance": "Emisión y comercialización de tokens",
    "our-technology-platform": "Nuestra Plataforma Tecnológica",
    "platform-description":
      "Hemos desarrollado una plataforma de última generación para la gestión completa del proceso de tokenización, desde la emisión hasta la comercialización de los tokens.",
    "request-demo": "Solicitar una Demo",

    // Gestión Financiera
    "financial-management-title": "Gestión Financiera",
    "financial-management-long-description":
      "Actuamos como Fractional CFO para tu empresa, ofreciendo servicios financieros estratégicos con especialización en Real Estate.",
    "financial-planning": "Planificación Financiera",
    "financial-planning-description":
      "Desarrollamos estrategias financieras a medida, incluyendo presupuestos, proyecciones de flujo de caja y planes de inversión.",
    "cost-optimization": "Optimización de Costos",
    "cost-optimization-description":
      "Analizamos la estructura de costos de tu empresa para identificar oportunidades de ahorro y mejorar la eficiencia operativa.",
    "risk-management": "Gestión de Riesgos",
    "risk-management-description":
      "Identificamos, evaluamos y mitigamos riesgos financieros para proteger el valor de tu empresa y asegurar su crecimiento sostenible.",
    "financing-structuring": "Estructuración de Financiamiento",
    "financing-structuring-description":
      "Diseñamos y negociamos soluciones de financiamiento óptimas, incluyendo deuda, capital y estructuras híbridas.",
    "real-estate-specialization": "Especialización en Real Estate",
    "real-estate-description":
      "Nuestro equipo cuenta con amplia experiencia en el sector inmobiliario, ofreciendo soluciones financieras específicas para:",
    "project-evaluation": "Evaluación financiera de proyectos inmobiliarios",
    "trust-structuring": "Estructuración de fideicomisos inmobiliarios",
    "tax-optimization": "Optimización fiscal para desarrollos inmobiliarios",
    "profitability-analysis": "Análisis de rentabilidad y valoración de activos",
    "request-advice": "Solicitar Asesoramiento",

    // Auditoría
    "audit-title": "Auditoría",
    "audit-long-description":
      "Realizamos auditorías de estados contables para entidades financieras y empresas con altos estándares de cumplimiento normativo.",
    "our-audit-approach": "Nuestro Enfoque de Auditoría",
    "audit-approach-description":
      "Implementamos un proceso de auditoría riguroso y adaptado a las necesidades específicas de cada cliente, con especial atención a los requisitos regulatorios del sector financiero.",
    planning: "Planificación",
    "planning-description": "Evaluación de riesgos, definición del alcance y diseño de procedimientos específicos.",
    execution: "Ejecución",
    "execution-description":
      "Aplicación de pruebas sustantivas y de control, análisis de datos y documentación de hallazgos.",
    report: "Informe",
    "report-description": "Elaboración de informes detallados con hallazgos, recomendaciones y plan de acción.",
    "follow-up": "Seguimiento",
    "follow-up-description": "Monitoreo de la implementación de recomendaciones y mejora continua de procesos.",
    "financial-audit": "Auditoría Financiera",
    "financial-audit-description":
      "Verificación de la razonabilidad de los estados financieros según normas contables aplicables, con énfasis en la detección de errores materiales.",
    "compliance-audit": "Auditoría de Cumplimiento",
    "compliance-audit-description":
      "Evaluación del cumplimiento de leyes, regulaciones y normativas aplicables al sector financiero, incluyendo prevención de lavado de activos.",
    "systems-audit": "Auditoría de Sistemas",
    "systems-audit-description":
      "Evaluación de controles internos en sistemas de información, seguridad informática y procesos tecnológicos críticos para la operación financiera.",

    // Business Intelligence
    "bi-title": "Business Intelligence",
    "bi-description":
      "Transformamos datos en insights accionables para impulsar la toma de decisiones estratégicas en tu organización.",
    "custom-bi-solutions": "Soluciones de BI a Medida",
    "bi-solutions-description":
      "Desarrollamos tableros de control interactivos y sistemas de análisis de datos que permiten visualizar KPIs críticos y tendencias de negocio en tiempo real.",
    "data-integration": "Integración de múltiples fuentes de datos",
    "custom-visualizations": "Visualizaciones personalizadas según necesidades específicas",
    "secure-access": "Acceso seguro desde cualquier dispositivo",
    "automatic-alerts": "Alertas automáticas basadas en umbrales predefinidos",
    "view-demo": "Ver Demo",
    "bi-consulting": "Consultoría en BI",
    "bi-consulting-description":
      "Asesoramiento estratégico para la implementación de soluciones de Business Intelligence alineadas con los objetivos de negocio.",
    "information-needs": "Diagnóstico de necesidades de información",
    "kpi-definition": "Definición de KPIs y métricas clave",
    "implementation-roadmap": "Roadmap de implementación",
    "dashboard-development": "Desarrollo de Dashboards",
    "dashboard-description":
      "Creación de tableros interactivos que transforman datos complejos en visualizaciones claras y accionables.",
    "user-centered-design": "Diseño centrado en el usuario",
    "interactive-visualizations": "Visualizaciones interactivas y dinámicas",
    "real-time-updates": "Actualización en tiempo real",
    "predictive-analysis": "Análisis Predictivo",
    "predictive-description":
      "Aplicación de modelos estadísticos y algoritmos de machine learning para predecir tendencias y comportamientos futuros.",
    "financial-forecasting": "Forecasting financiero",
    "anomaly-detection": "Detección de anomalías",
    "customer-segmentation": "Segmentación y análisis de clientes",

    // Sobre Nosotros
    "about-us-title": "Sobre Nosotros",
    "about-us-description-1":
      "Volsmart es una banca de inversión digital basada en Buenos Aires, Argentina. Fue fundada por Matías Ferrari en el año 2012 con el objetivo de prestar servicios de consultoría a empresas en el área financiera y tecnológica.",
    "about-us-description-2":
      "Conformada por un equipo de profesionales con amplia experiencia en el sector financiero y tecnológico, ofrecemos soluciones innovadoras para ayudar a nuestros clientes a alcanzar sus objetivos de negocio.",
    "know-more": "Conocer más",
    team: "Equipo",

    // Clientes
    "trusted-by": "Han confiado en nosotros",

    // Contacto
    "contact-title": "Contacto",
    "contact-description":
      "Estamos aquí para ayudarte. Completa el formulario y nos pondremos en contacto contigo a la brevedad.",
    phone: "Teléfono",
    email: "Email",
    address: "Dirección",

    // Formulario de contacto
    "contact-form": "Formulario de contacto",
    "form-description": "Completa el formulario y nos pondremos en contacto contigo.",
    "full-name": "Nombre completo",
    "your-name": "Tu nombre",
    "name-required": "El nombre es requerido",
    "your-email": "tu@email.com",
    "email-required": "El email es requerido",
    "invalid-email": "Email inválido",
    "phone-optional": "Teléfono (opcional)",
    message: "Mensaje",
    "message-placeholder": "¿En qué podemos ayudarte?",
    "message-required": "El mensaje es requerido",
    "send-message": "Enviar mensaje",
    sending: "Enviando...",
    "form-sent": "Formulario enviado",
    "contact-soon": "Nos pondremos en contacto contigo a la brevedad.",

    // Footer
    "site-sections": "Secciones del sitio",
    legal: "Legal",
    terms: "Términos y condiciones",
    privacy: "Política de privacidad",
    "legal-notice":
      'Vol Pro SRL es un agente registrado como Proveedor de Servicios de Activos Virtuales ("PSAV") ante la Comisión Nacional de Valores bajo el registro número 86.',
    "rights-reserved": "Todos los derechos reservados.",
  },
  EN: {
    // Navigation
    services: "Services",
    "about-us": "About us",
    contact: "Contact",

    // Hero
    "fintech-solutions": "Fintech solutions for your business",
    "digital-investment-banking": "Digital investment banking",
    "innovative-financial-services": "Innovative financial services to drive your company's growth in the digital era.",
    "know-our-services": "Discover our services",

    // Services
    "volsmart-services": "Volsmart Services",
    "services-description": "We offer financial and technological solutions tailored to your company's needs.",
    tokenization: "Tokenization",
    "tokenization-description": "Financial and legal structuring, technological platform, commercialization.",
    "financial-management": "Financial Management",
    "financial-management-description": "We act as a Fractional CFO for your company. We specialize in Real Estate.",
    audit: "Audit",
    "audit-description": "We perform audits of financial statements for financial institutions.",
    "business-intelligence": "Business Intelligence",
    "business-intelligence-description": "Business intelligence consulting, development of control dashboards.",

    // Tokenization
    "asset-tokenization": "Asset Tokenization",
    "tokenization-long-description":
      "We obtain funds for projects in different verticals using real-world asset tokenization as a tool.",
    prefeasibility: "Prefeasibility",
    "prefeasibility-description": "We evaluate your project to determine if it is potentially tokenizable.",
    "technical-financial-analysis": "Technical and financial viability analysis",
    "market-potential": "Market potential evaluation",
    "express-consulting": "Express Consulting",
    "express-consulting-description":
      "We prepare the necessary documentation to comply with legal and fiduciary regulations.",
    "legal-documentation": "Preparation of legal documentation",
    "alyc-presentation": "Presentation to different ALyCs",
    structuring: "Structuring",
    "structuring-description": "We implement the complete solution for the issuance and management of tokens.",
    "tokenomics-design": "Tokenomics design",
    "platform-development": "Technological platform development",
    "token-issuance": "Token issuance and commercialization",
    "our-technology-platform": "Our Technology Platform",
    "platform-description":
      "We have developed a state-of-the-art platform for the complete management of the tokenization process, from issuance to token commercialization.",
    "request-demo": "Request a Demo",

    // Financial Management
    "financial-management-title": "Financial Management",
    "financial-management-long-description":
      "We act as a Fractional CFO for your company, offering strategic financial services with specialization in Real Estate.",
    "financial-planning": "Financial Planning",
    "financial-planning-description":
      "We develop tailored financial strategies, including budgets, cash flow projections, and investment plans.",
    "cost-optimization": "Cost Optimization",
    "cost-optimization-description":
      "We analyze your company's cost structure to identify savings opportunities and improve operational efficiency.",
    "risk-management": "Risk Management",
    "risk-management-description":
      "We identify, evaluate, and mitigate financial risks to protect your company's value and ensure sustainable growth.",
    "financing-structuring": "Financing Structuring",
    "financing-structuring-description":
      "We design and negotiate optimal financing solutions, including debt, equity, and hybrid structures.",
    "real-estate-specialization": "Real Estate Specialization",
    "real-estate-description":
      "Our team has extensive experience in the real estate sector, offering specific financial solutions for:",
    "project-evaluation": "Financial evaluation of real estate projects",
    "trust-structuring": "Structuring of real estate trusts",
    "tax-optimization": "Tax optimization for real estate developments",
    "profitability-analysis": "Profitability analysis and asset valuation",
    "request-advice": "Request Advice",

    // Audit
    "audit-title": "Audit",
    "audit-long-description":
      "We perform audits of financial statements for financial institutions and companies with high regulatory compliance standards.",
    "our-audit-approach": "Our Audit Approach",
    "audit-approach-description":
      "We implement a rigorous audit process adapted to the specific needs of each client, with special attention to the regulatory requirements of the financial sector.",
    planning: "Planning",
    "planning-description": "Risk assessment, scope definition, and design of specific procedures.",
    execution: "Execution",
    "execution-description":
      "Application of substantive and control tests, data analysis, and documentation of findings.",
    report: "Report",
    "report-description": "Preparation of detailed reports with findings, recommendations, and action plan.",
    "follow-up": "Follow-up",
    "follow-up-description": "Monitoring of the implementation of recommendations and continuous process improvement.",
    "financial-audit": "Financial Audit",
    "financial-audit-description":
      "Verification of the reasonableness of financial statements according to applicable accounting standards, with emphasis on the detection of material errors.",
    "compliance-audit": "Compliance Audit",
    "compliance-audit-description":
      "Evaluation of compliance with laws, regulations, and standards applicable to the financial sector, including prevention of money laundering.",
    "systems-audit": "Systems Audit",
    "systems-audit-description":
      "Evaluation of internal controls in information systems, computer security, and critical technological processes for financial operation.",

    // Business Intelligence
    "bi-title": "Business Intelligence",
    "bi-description":
      "We transform data into actionable insights to drive strategic decision-making in your organization.",
    "custom-bi-solutions": "Custom BI Solutions",
    "bi-solutions-description":
      "We develop interactive control dashboards and data analysis systems that allow you to visualize critical KPIs and business trends in real-time.",
    "data-integration": "Integration of multiple data sources",
    "custom-visualizations": "Custom visualizations according to specific needs",
    "secure-access": "Secure access from any device",
    "automatic-alerts": "Automatic alerts based on predefined thresholds",
    "view-demo": "View Demo",
    "bi-consulting": "BI Consulting",
    "bi-consulting-description":
      "Strategic advice for the implementation of Business Intelligence solutions aligned with business objectives.",
    "information-needs": "Diagnosis of information needs",
    "kpi-definition": "Definition of KPIs and key metrics",
    "implementation-roadmap": "Implementation roadmap",
    "dashboard-development": "Dashboard Development",
    "dashboard-description":
      "Creation of interactive dashboards that transform complex data into clear and actionable visualizations.",
    "user-centered-design": "User-centered design",
    "interactive-visualizations": "Interactive and dynamic visualizations",
    "real-time-updates": "Real-time updates",
    "predictive-analysis": "Predictive Analysis",
    "predictive-description":
      "Application of statistical models and machine learning algorithms to predict trends and future behaviors.",
    "financial-forecasting": "Financial forecasting",
    "anomaly-detection": "Anomaly detection",
    "customer-segmentation": "Customer segmentation and analysis",

    // About Us
    "about-us-title": "About Us",
    "about-us-description-1":
      "Volsmart is a digital investment bank based in Buenos Aires, Argentina. It was founded by Matías Ferrari in 2012 with the aim of providing consulting services to companies in the financial and technological area.",
    "about-us-description-2":
      "Made up of a team of professionals with extensive experience in the financial and technological sector, we offer innovative solutions to help our clients achieve their business objectives.",
    "know-more": "Learn more",
    team: "Team",

    // Clients
    "trusted-by": "They have trusted us",

    // Contact
    "contact-title": "Contact",
    "contact-description": "We are here to help you. Fill out the form and we will contact you shortly.",
    phone: "Phone",
    email: "Email",
    address: "Address",

    // Contact Form
    "contact-form": "Contact Form",
    "form-description": "Fill out the form and we will contact you.",
    "full-name": "Full name",
    "your-name": "Your name",
    "name-required": "Name is required",
    "your-email": "your@email.com",
    "email-required": "Email is required",
    "invalid-email": "Invalid email",
    "phone-optional": "Phone (optional)",
    message: "Message",
    "message-placeholder": "How can we help you?",
    "message-required": "Message is required",
    "send-message": "Send message",
    sending: "Sending...",
    "form-sent": "Form sent",
    "contact-soon": "We will contact you shortly.",

    // Footer
    "site-sections": "Site sections",
    legal: "Legal",
    terms: "Terms and conditions",
    privacy: "Privacy policy",
    "legal-notice":
      'Vol Pro SRL is a registered agent as a Virtual Asset Service Provider ("VASP") before the National Securities Commission under registration number 86.',
    "rights-reserved": "All rights reserved.",
  },
}
