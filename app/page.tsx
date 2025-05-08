"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronDown, CheckCircle, FileCheck } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"

import { Button } from "@/components/ui/button"
import { LanguageSelector } from "@/components/language-selector"
import { ServiceCard } from "@/components/service-card"
import { TeamMember } from "@/components/team-member"
import { ClientLogo } from "@/components/client-logo"
import { ContactForm } from "@/components/contact-form"
import { AnimateInView } from "@/components/animate-in-view"

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <Image src="/logo-white.png" alt="Volsmart Logo" width={240} height={70} className="h-12 w-auto" />
            </motion.div>
          </Link>
          <nav className="hidden md:flex gap-6">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative group"
            >
              <button className="flex items-center gap-1 text-gray-200 hover:text-white transition-colors duration-200">
                {t("services")} <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 top-full hidden group-hover:block bg-gray-900 border border-gray-800 rounded-md p-2 w-64">
                <Link
                  href="/#tokenizacion"
                  className="block p-2 hover:bg-gray-800 rounded transition-colors duration-200"
                >
                  {t("tokenization")}
                </Link>
                <Link
                  href="/#gestion-financiera"
                  className="block p-2 hover:bg-gray-800 rounded transition-colors duration-200"
                >
                  {t("financial-management")}
                </Link>
                <Link href="/#auditoria" className="block p-2 hover:bg-gray-800 rounded transition-colors duration-200">
                  {t("audit")}
                </Link>
                <Link
                  href="/#business-intelligence"
                  className="block p-2 hover:bg-gray-800 rounded transition-colors duration-200"
                >
                  {t("business-intelligence")}
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href="/#sobre-nosotros" className="text-gray-200 hover:text-white transition-colors duration-200">
                {t("about-us")}
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link href="/#contacto" className="text-gray-200 hover:text-white transition-colors duration-200">
                {t("contact")}
              </Link>
            </motion.div>
          </nav>
          <div className="flex items-center gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <LanguageSelector />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button variant="outline" className="hidden md:flex">
                {t("contact")}
              </Button>
            </motion.div>
            <Button variant="ghost" size="icon" className="md:hidden">
              <span className="sr-only">Abrir menú</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 to-black opacity-90" />
          <div className="container relative z-10 py-24 md:py-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <AnimateInView animation="slide-right" delay={0.1}>
                  <h2 className="text-lg md:text-xl font-medium text-blue-400">{t("fintech-solutions")}</h2>
                </AnimateInView>
                <AnimateInView animation="slide-right" delay={0.2}>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                    {t("digital-investment-banking")}
                  </h1>
                </AnimateInView>
                <AnimateInView animation="slide-right" delay={0.3}>
                  <p className="text-lg text-gray-300 max-w-md">{t("innovative-financial-services")}</p>
                </AnimateInView>
                <AnimateInView animation="slide-right" delay={0.4}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="bg-blue-800 hover:bg-blue-700 transition-colors duration-300">
                      {t("know-our-services")}
                    </Button>
                    <Button size="lg" variant="outline" className="transition-colors duration-300">
                      {t("contact")}
                    </Button>
                  </div>
                </AnimateInView>
              </div>
              <div className="hidden md:flex justify-center items-center">
                <AnimateInView animation="scale" delay={0.5}>
                  <motion.div
                    className="relative w-full max-w-md"
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 4,
                      ease: "easeInOut",
                    }}
                  >
                    <Image
                      src="/blockchain-hero.png"
                      alt="Tecnología blockchain"
                      width={600}
                      height={600}
                      className="object-contain"
                      style={{ filter: "drop-shadow(0 0 20px rgba(0, 149, 255, 0.5))" }}
                    />
                  </motion.div>
                </AnimateInView>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 bg-gray-950">
          <div className="container">
            <AnimateInView animation="fade">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("volsmart-services")}</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">{t("services-description")}</p>
              </div>
            </AnimateInView>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimateInView animation="slide-up" delay={0.1}>
                <ServiceCard title={t("tokenization")} description={t("tokenization-description")} icon="Layers" />
              </AnimateInView>
              <AnimateInView animation="slide-up" delay={0.2}>
                <ServiceCard
                  title={t("financial-management")}
                  description={t("financial-management-description")}
                  icon="BarChart"
                />
              </AnimateInView>
              <AnimateInView animation="slide-up" delay={0.3}>
                <ServiceCard title={t("audit")} description={t("audit-description")} icon="FileCheck" />
              </AnimateInView>
              <AnimateInView animation="slide-up" delay={0.4}>
                <ServiceCard
                  title={t("business-intelligence")}
                  description={t("business-intelligence-description")}
                  icon="LineChart"
                />
              </AnimateInView>
            </div>
          </div>
        </section>

        {/* Tokenización Section */}
        <section id="tokenizacion" className="py-16 md:py-24 bg-black">
          <div className="container">
            <AnimateInView animation="fade">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("asset-tokenization")}</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">{t("tokenization-long-description")}</p>
              </div>
            </AnimateInView>

            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <AnimateInView animation="slide-up" delay={0.1}>
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 relative hover:border-blue-800 transition-all duration-300">
                  <div className="absolute -top-3 -left-3 bg-blue-900 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-blue-400">{t("prefeasibility")}</h3>
                  <p className="text-gray-300 mb-4">{t("prefeasibility-description")}</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-400">{t("technical-financial-analysis")}</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-400">{t("market-potential")}</span>
                    </li>
                  </ul>
                </div>
              </AnimateInView>

              <AnimateInView animation="slide-up" delay={0.2}>
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 relative hover:border-blue-800 transition-all duration-300">
                  <div className="absolute -top-3 -left-3 bg-blue-900 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-blue-400">{t("express-consulting")}</h3>
                  <p className="text-gray-300 mb-4">{t("express-consulting-description")}</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-400">{t("legal-documentation")}</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-400">{t("alyc-presentation")}</span>
                    </li>
                  </ul>
                </div>
              </AnimateInView>

              <AnimateInView animation="slide-up" delay={0.3}>
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 relative hover:border-blue-800 transition-all duration-300">
                  <div className="absolute -top-3 -left-3 bg-blue-900 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-blue-400">{t("structuring")}</h3>
                  <p className="text-gray-300 mb-4">{t("structuring-description")}</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-400">{t("tokenomics-design")}</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-400">{t("platform-development")}</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-400">{t("token-issuance")}</span>
                    </li>
                  </ul>
                </div>
              </AnimateInView>
            </div>

            {/* Platform Demo */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <AnimateInView animation="slide-right">
                <div>
                  <h3 className="text-2xl font-bold mb-4">{t("our-technology-platform")}</h3>
                  <p className="text-gray-300 mb-6">{t("platform-description")}</p>
                  <Button className="bg-blue-800 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                    {t("request-demo")}
                  </Button>
                </div>
              </AnimateInView>
              <AnimateInView animation="scale">
                <div className="relative">
                  <div className="bg-blue-500/10 absolute -inset-4 rounded-xl blur-xl"></div>
                  <div className="relative bg-gray-900 border border-gray-800 rounded-lg overflow-hidden shadow-2xl">
                    <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
                      <Image
                        src="/platform-screenshot.png"
                        alt="Plataforma de Tokenización"
                        width={800}
                        height={600}
                        className="w-full h-auto"
                      />
                    </motion.div>
                  </div>
                </div>
              </AnimateInView>
            </div>
          </div>
        </section>

        {/* Gestión Financiera Section */}
        <section id="gestion-financiera" className="py-16 md:py-24 bg-gray-950">
          <div className="container">
            <AnimateInView animation="fade">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("financial-management-title")}</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">{t("financial-management-long-description")}</p>
              </div>
            </AnimateInView>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <AnimateInView animation="slide-up" delay={0.1}>
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-blue-900 transition-all duration-300 hover:translate-y-[-5px]">
                  <div className="bg-blue-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-400"
                    >
                      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{t("financial-planning")}</h3>
                  <p className="text-gray-400 text-sm">{t("financial-planning-description")}</p>
                </div>
              </AnimateInView>

              <AnimateInView animation="slide-up" delay={0.2}>
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-blue-900 transition-all duration-300 hover:translate-y-[-5px]">
                  <div className="bg-blue-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-400"
                    >
                      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                      <path d="M13 5v2" />
                      <path d="M13 17v2" />
                      <path d="M13 11v2" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{t("cost-optimization")}</h3>
                  <p className="text-gray-400 text-sm">{t("cost-optimization-description")}</p>
                </div>
              </AnimateInView>

              <AnimateInView animation="slide-up" delay={0.3}>
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-blue-900 transition-all duration-300 hover:translate-y-[-5px]">
                  <div className="bg-blue-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-400"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{t("risk-management")}</h3>
                  <p className="text-gray-400 text-sm">{t("risk-management-description")}</p>
                </div>
              </AnimateInView>

              <AnimateInView animation="slide-up" delay={0.4}>
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-blue-900 transition-all duration-300 hover:translate-y-[-5px]">
                  <div className="bg-blue-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-400"
                    >
                      <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h1" />
                      <path d="M15 3h1a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1" />
                      <path d="M3 9v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9" />
                      <path d="M12 3v18" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{t("financing-structuring")}</h3>
                  <p className="text-gray-400 text-sm">{t("financing-structuring-description")}</p>
                </div>
              </AnimateInView>
            </div>

            {/* Real Estate Focus */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <AnimateInView animation="slide-right">
                <div className="relative">
                  <div className="bg-blue-500/10 absolute -inset-4 rounded-xl blur-xl"></div>
                  <div className="relative bg-gray-900 border border-gray-800 rounded-lg overflow-hidden shadow-2xl">
                    <motion.div
                      animate={{
                        y: [0, -5, 0],
                        filter: [
                          "drop-shadow(0 0 20px rgba(0, 149, 255, 0.3))",
                          "drop-shadow(0 0 25px rgba(0, 180, 255, 0.5))",
                          "drop-shadow(0 0 20px rgba(0, 149, 255, 0.3))",
                        ],
                      }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 5,
                        ease: "easeInOut",
                      }}
                    >
                      <Image
                        src="/real-estate-digital-network.png"
                        alt="Red digital de bienes raíces"
                        width={800}
                        height={800}
                        className="w-full h-auto"
                        style={{ filter: "drop-shadow(0 0 25px rgba(0, 149, 255, 0.4))" }}
                      />
                    </motion.div>
                  </div>
                </div>
              </AnimateInView>
              <AnimateInView animation="slide-up">
                <div>
                  <h3 className="text-2xl font-bold mb-4">{t("real-estate-specialization")}</h3>
                  <p className="text-gray-300 mb-4">{t("real-estate-description")}</p>
                  <ul className="space-y-3 mb-6">
                    <motion.li className="flex items-start" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{t("project-evaluation")}</span>
                    </motion.li>
                    <motion.li className="flex items-start" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{t("trust-structuring")}</span>
                    </motion.li>
                    <motion.li className="flex items-start" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{t("tax-optimization")}</span>
                    </motion.li>
                    <motion.li className="flex items-start" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{t("profitability-analysis")}</span>
                    </motion.li>
                  </ul>
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                    <Button className="bg-blue-800 hover:bg-blue-700 transition-all duration-300">
                      {t("request-advice")}
                    </Button>
                  </motion.div>
                </div>
              </AnimateInView>
            </div>
          </div>
        </section>

        {/* Auditoría Section */}
        <section id="auditoria" className="py-16 md:py-24 bg-black">
          <div className="container">
            <AnimateInView animation="fade">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("audit-title")}</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">{t("audit-long-description")}</p>
              </div>
            </AnimateInView>

            {/* Audit Process */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
              <AnimateInView animation="slide-right">
                <div>
                  <h3 className="text-2xl font-bold mb-4">{t("our-audit-approach")}</h3>
                  <p className="text-gray-300 mb-6">{t("audit-approach-description")}</p>

                  <div className="space-y-4">
                    <motion.div
                      className="bg-gray-900 border border-gray-800 rounded-lg p-4"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center mb-2">
                        <div className="bg-blue-900/30 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                          <span className="text-blue-400 font-bold">1</span>
                        </div>
                        <h4 className="text-lg font-semibold text-blue-400">{t("planning")}</h4>
                      </div>
                      <p className="text-gray-400 text-sm pl-11">{t("planning-description")}</p>
                    </motion.div>

                    <motion.div
                      className="bg-gray-900 border border-gray-800 rounded-lg p-4"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center mb-2">
                        <div className="bg-blue-900/30 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                          <span className="text-blue-400 font-bold">2</span>
                        </div>
                        <h4 className="text-lg font-semibold text-blue-400">{t("execution")}</h4>
                      </div>
                      <p className="text-gray-400 text-sm pl-11">{t("execution-description")}</p>
                    </motion.div>

                    <motion.div
                      className="bg-gray-900 border border-gray-800 rounded-lg p-4"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center mb-2">
                        <div className="bg-blue-900/30 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                          <span className="text-blue-400 font-bold">3</span>
                        </div>
                        <h4 className="text-lg font-semibold text-blue-400">{t("report")}</h4>
                      </div>
                      <p className="text-gray-400 text-sm pl-11">{t("report-description")}</p>
                    </motion.div>

                    <motion.div
                      className="bg-gray-900 border border-gray-800 rounded-lg p-4"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center mb-2">
                        <div className="bg-blue-900/30 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                          <span className="text-blue-400 font-bold">4</span>
                        </div>
                        <h4 className="text-lg font-semibold text-blue-400">{t("follow-up")}</h4>
                      </div>
                      <p className="text-gray-400 text-sm pl-11">{t("follow-up-description")}</p>
                    </motion.div>
                  </div>
                </div>
              </AnimateInView>

              <AnimateInView animation="scale">
                <div className="relative">
                  <div className="bg-blue-500/10 absolute -inset-4 rounded-xl blur-xl"></div>
                  <div className="relative bg-gray-900 border border-gray-800 rounded-lg overflow-hidden shadow-2xl">
                    <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
                      <Image
                        src="/audit-report.png"
                        alt="Informe de Auditoría"
                        width={800}
                        height={600}
                        className="w-full h-auto"
                      />
                    </motion.div>
                  </div>
                </div>
              </AnimateInView>
            </div>

            {/* Audit Services */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <AnimateInView animation="slide-up" delay={0.1}>
                <motion.div
                  className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-blue-900 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-blue-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <FileCheck className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{t("financial-audit")}</h3>
                  <p className="text-gray-400 text-sm">{t("financial-audit-description")}</p>
                </motion.div>
              </AnimateInView>

              <AnimateInView animation="slide-up" delay={0.2}>
                <motion.div
                  className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-blue-900 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-blue-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-400"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{t("compliance-audit")}</h3>
                  <p className="text-gray-400 text-sm">{t("compliance-audit-description")}</p>
                </motion.div>
              </AnimateInView>

              <AnimateInView animation="slide-up" delay={0.3}>
                <motion.div
                  className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-blue-900 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-blue-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-400"
                    >
                      <path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" />
                      <path d="m12 12 4 10 1.7-4.3L22 16Z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{t("systems-audit")}</h3>
                  <p className="text-gray-400 text-sm">{t("systems-audit-description")}</p>
                </motion.div>
              </AnimateInView>
            </div>
          </div>
        </section>

        {/* Business Intelligence Section */}
        <section id="business-intelligence" className="py-16 md:py-24 bg-gray-950">
          <div className="container">
            <AnimateInView animation="fade">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("bi-title")}</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">{t("bi-description")}</p>
              </div>
            </AnimateInView>

            {/* BI Platform */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
              <AnimateInView animation="slide-right" className="relative order-2 md:order-1">
                <div className="bg-blue-500/10 absolute -inset-4 rounded-xl blur-xl"></div>
                <div className="relative bg-gray-900 border border-gray-800 rounded-lg overflow-hidden shadow-2xl">
                  <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
                    <Image
                      src="/bi-dashboard.png"
                      alt="Dashboard de Business Intelligence"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </motion.div>
                </div>
              </AnimateInView>

              <AnimateInView animation="slide-up" className="order-1 md:order-2">
                <div>
                  <h3 className="text-2xl font-bold mb-4">{t("custom-bi-solutions")}</h3>
                  <p className="text-gray-300 mb-6">{t("bi-solutions-description")}</p>
                  <ul className="space-y-3 mb-6">
                    <motion.li className="flex items-start" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{t("data-integration")}</span>
                    </motion.li>
                    <motion.li className="flex items-start" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{t("custom-visualizations")}</span>
                    </motion.li>
                    <motion.li className="flex items-start" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{t("secure-access")}</span>
                    </motion.li>
                    <motion.li className="flex items-start" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{t("automatic-alerts")}</span>
                    </motion.li>
                  </ul>
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                    <Button className="bg-blue-800 hover:bg-blue-700 transition-all duration-300">
                      {t("view-demo")}
                    </Button>
                  </motion.div>
                </div>
              </AnimateInView>
            </div>

            {/* BI Services */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimateInView animation="slide-up" delay={0.1}>
                <motion.div
                  className="bg-gray-900 border border-gray-800 rounded-lg p-6"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold mb-4 text-blue-400">{t("bi-consulting")}</h3>
                  <p className="text-gray-300 mb-4">{t("bi-consulting-description")}</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-400">{t("information-needs")}</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-400">{t("kpi-definition")}</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-400">{t("implementation-roadmap")}</span>
                    </li>
                  </ul>
                </motion.div>
              </AnimateInView>

              <AnimateInView animation="slide-up" delay={0.2}>
                <motion.div
                  className="bg-gray-900 border border-gray-800 rounded-lg p-6"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold mb-4 text-blue-400">{t("dashboard-development")}</h3>
                  <p className="text-gray-300 mb-4">{t("dashboard-description")}</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-400">{t("user-centered-design")}</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-400">{t("interactive-visualizations")}</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-400">{t("real-time-updates")}</span>
                    </li>
                  </ul>
                </motion.div>
              </AnimateInView>

              <AnimateInView animation="slide-up" delay={0.3}>
                <motion.div
                  className="bg-gray-900 border border-gray-800 rounded-lg p-6"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold mb-4 text-blue-400">{t("predictive-analysis")}</h3>
                  <p className="text-gray-300 mb-4">{t("predictive-description")}</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-400">{t("financial-forecasting")}</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-400">{t("anomaly-detection")}</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-400">{t("customer-segmentation")}</span>
                    </li>
                  </ul>
                </motion.div>
              </AnimateInView>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="sobre-nosotros" className="py-16 md:py-24 bg-black">
          <div className="container">
            <AnimateInView animation="fade">
              <h2 className="text-3xl md:text-4xl font-bold mb-12">{t("about-us-title")}</h2>
            </AnimateInView>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <AnimateInView animation="slide-right">
                <div className="space-y-6">
                  <p className="text-gray-300">{t("about-us-description-1")}</p>
                  <p className="text-gray-300">{t("about-us-description-2")}</p>
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                    <Button variant="outline" className="mt-4 transition-all duration-300">
                      {t("know-more")}
                    </Button>
                  </motion.div>
                </div>
              </AnimateInView>
              <AnimateInView animation="scale">
                <div className="relative rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/equipo-volsmart.png"
                    alt="Equipo Volsmart"
                    width={600}
                    height={400}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
              </AnimateInView>
            </div>

            {/* Team Section */}
            <div className="mt-20">
              <AnimateInView animation="fade">
                <h2 className="text-3xl font-bold mb-12">{t("team")}</h2>
              </AnimateInView>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                <AnimateInView animation="slide-up" delay={0.1}>
                  <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                    <TeamMember
                      name="Matías Ferrari"
                      position="Presidente"
                      credentials="Abogado UCA - MBA Boston"
                      experience="Goldman Sachs, Citibank"
                      imageSrc="/team/matias-ferrari.png"
                    />
                  </motion.div>
                </AnimateInView>
                <AnimateInView animation="slide-up" delay={0.2}>
                  <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                    <TeamMember
                      name="Ian Gawianski"
                      position="Gerente General"
                      credentials="Economista UBA"
                      experience=""
                      imageSrc="/team/ian-gawianski.png"
                    />
                  </motion.div>
                </AnimateInView>
                <AnimateInView animation="slide-up" delay={0.3}>
                  <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                    <TeamMember
                      name="Gustavo Aguzzi"
                      position="Director de Operaciones"
                      credentials="Contador UNC"
                      experience="Citibank, PwC, BofA"
                      imageSrc="/team/gustavo-aguzzi.png"
                    />
                  </motion.div>
                </AnimateInView>
                <AnimateInView animation="slide-up" delay={0.4}>
                  <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                    <TeamMember
                      name="Ignacio Iribas"
                      position="Director de RRHH"
                      credentials="Abogado UCA"
                      experience=""
                      imageSrc="/team/ignacio-iribas-new.jpg"
                    />
                  </motion.div>
                </AnimateInView>
                <AnimateInView animation="slide-up" delay={0.5}>
                  <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                    <TeamMember
                      name="Juan María Peral"
                      position="Director Contable"
                      credentials="Contador UADE"
                      experience="Deloitte"
                      imageSrc="/male-accountant-headshot.png"
                    />
                  </motion.div>
                </AnimateInView>
              </div>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="py-16 md:py-24 bg-gray-950">
          <div className="container">
            <AnimateInView animation="fade">
              <h2 className="text-3xl font-bold mb-12 text-center">{t("trusted-by")}</h2>
            </AnimateInView>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <AnimateInView animation="slide-up" delay={0.1}>
                <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                  <ClientLogo name="Moody's Analytics" imageSrc="/clients/moodys.png" />
                </motion.div>
              </AnimateInView>
              <AnimateInView animation="slide-up" delay={0.2}>
                <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                  <ClientLogo name="Quality Home" imageSrc="/clients/quality-home.png" bgDark={true} />
                </motion.div>
              </AnimateInView>
              <AnimateInView animation="slide-up" delay={0.3}>
                <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                  <ClientLogo name="IDERO" imageSrc="/clients/idero.png" />
                </motion.div>
              </AnimateInView>
              <AnimateInView animation="slide-up" delay={0.4}>
                <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                  <ClientLogo name="AURA Punta del Este" imageSrc="/clients/aura.png" />
                </motion.div>
              </AnimateInView>
              <AnimateInView animation="slide-up" delay={0.5}>
                <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                  <ClientLogo name="Black Bamboo Enterprises" imageSrc="/clients/black-bamboo.png" />
                </motion.div>
              </AnimateInView>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="py-16 md:py-24 bg-black">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <AnimateInView animation="slide-right">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold">{t("contact-title")}</h2>
                  <p className="text-gray-300">{t("contact-description")}</p>
                  <div className="space-y-4">
                    <motion.div
                      className="flex items-center gap-3"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="bg-blue-900 p-3 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">{t("phone")}</p>
                        <p>+54 11 1234-5678</p>
                      </div>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-3"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="bg-blue-900 p-3 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <rect width="20" height="16" x="2" y="4" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">{t("email")}</p>
                        <p>info@volsmart.com</p>
                      </div>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-3"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="bg-blue-900 p-3 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">{t("address")}</p>
                        <p>Av. Corrientes 1234, Buenos Aires, Argentina</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </AnimateInView>
              <AnimateInView animation="scale">
                <ContactForm />
              </AnimateInView>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <AnimateInView animation="fade" delay={0.1}>
              <div className="space-y-4">
                <Link href="/" className="flex items-center gap-2">
                  <Image src="/logo-white.png" alt="Volsmart Logo" width={220} height={60} className="h-10 w-auto" />
                </Link>
                <p className="text-gray-400 text-sm">{t("digital-investment-banking")}</p>
                <div className="flex gap-4">
                  <motion.a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </AnimateInView>
            <AnimateInView animation="fade" delay={0.2}>
              <div>
                <h3 className="text-lg font-medium mb-4">{t("site-sections")}</h3>
                <ul className="space-y-2">
                  <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <Link
                      href="/#tokenizacion"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {t("services")}
                    </Link>
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <Link
                      href="/#sobre-nosotros"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {t("about-us")}
                    </Link>
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <Link href="/#contacto" className="text-gray-400 hover:text-white transition-colors duration-300">
                      {t("contact")}
                    </Link>
                  </motion.li>
                </ul>
              </div>
            </AnimateInView>
            <AnimateInView animation="fade" delay={0.3}>
              <div>
                <h3 className="text-lg font-medium mb-4">{t("services")}</h3>
                <ul className="space-y-2">
                  <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <Link
                      href="/#tokenizacion"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {t("tokenization")}
                    </Link>
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <Link
                      href="/#gestion-financiera"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {t("financial-management")}
                    </Link>
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <Link href="/#auditoria" className="text-gray-400 hover:text-white transition-colors duration-300">
                      {t("audit")}
                    </Link>
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <Link
                      href="/#business-intelligence"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {t("business-intelligence")}
                    </Link>
                  </motion.li>
                </ul>
              </div>
            </AnimateInView>
            <AnimateInView animation="fade" delay={0.4}>
              <div>
                <h3 className="text-lg font-medium mb-4">{t("legal")}</h3>
                <ul className="space-y-2">
                  <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <Link href="/terminos" className="text-gray-400 hover:text-white transition-colors duration-300">
                      {t("terms")}
                    </Link>
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <Link href="/privacidad" className="text-gray-400 hover:text-white transition-colors duration-300">
                      {t("privacy")}
                    </Link>
                  </motion.li>
                </ul>
              </div>
            </AnimateInView>
          </div>
          <AnimateInView animation="fade" delay={0.5}>
            <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400">
              <p>{t("legal-notice")}</p>
              <p className="mt-4">
                &copy; {new Date().getFullYear()} Volsmart. {t("rights-reserved")}
              </p>
            </div>
          </AnimateInView>
        </div>
      </footer>
    </div>
  )
}
