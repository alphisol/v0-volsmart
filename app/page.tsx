import Image from "next/image"
import Link from "next/link"
import { ChevronDown, CheckCircle, FileCheck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { LanguageSelector } from "@/components/language-selector"
import { ServiceCard } from "@/components/service-card"
import { TeamMember } from "@/components/team-member"
import { ClientLogo } from "@/components/client-logo"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo-white.png" alt="Volsmart Logo" width={240} height={70} className="h-12 w-auto" />
          </Link>
          <nav className="hidden md:flex gap-6">
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-200 hover:text-white">
                Servicios <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 top-full hidden group-hover:block bg-gray-900 border border-gray-800 rounded-md p-2 w-64">
                <Link href="/#tokenizacion" className="block p-2 hover:bg-gray-800 rounded">
                  Tokenización
                </Link>
                <Link href="/#gestion-financiera" className="block p-2 hover:bg-gray-800 rounded">
                  Gestión financiera
                </Link>
                <Link href="/#auditoria" className="block p-2 hover:bg-gray-800 rounded">
                  Auditoría
                </Link>
                <Link href="/#business-intelligence" className="block p-2 hover:bg-gray-800 rounded">
                  Business Intelligence
                </Link>
              </div>
            </div>
            <Link href="/#sobre-nosotros" className="text-gray-200 hover:text-white">
              Sobre nosotros
            </Link>
            <Link href="/#contacto" className="text-gray-200 hover:text-white">
              Contacto
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <LanguageSelector />
            <Button variant="outline" className="hidden md:flex">
              Contactar
            </Button>
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
                <h2 className="text-lg md:text-xl font-medium text-blue-400">Soluciones fintech para tu negocio</h2>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Banca de inversión digital
                </h1>
                <p className="text-lg text-gray-300 max-w-md">
                  Servicios financieros innovadores para impulsar el crecimiento de tu empresa en la era digital.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-blue-800 hover:bg-blue-700">
                    Conocé nuestros servicios
                  </Button>
                  <Button size="lg" variant="outline">
                    Contactar
                  </Button>
                </div>
              </div>
              <div className="hidden md:flex justify-center items-center">
                <div className="relative w-full max-w-md">
                  <Image
                    src="/blockchain-hero.png"
                    alt="Tecnología blockchain"
                    width={600}
                    height={600}
                    className="object-contain"
                    style={{ filter: "drop-shadow(0 0 20px rgba(0, 149, 255, 0.5))" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 bg-gray-950">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Servicios de Volsmart</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Ofrecemos soluciones financieras y tecnológicas adaptadas a las necesidades de tu empresa.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ServiceCard
                title="Tokenización"
                description="Estructuración financiera y jurídica, plataforma tecnológica, comercialización."
                icon="Layers"
              />
              <ServiceCard
                title="Gestión financiera"
                description="Actuamos como Fractional CFO para tu empresa. Nos especializamos en Real Estate."
                icon="BarChart"
              />
              <ServiceCard
                title="Auditoría"
                description="Realizamos auditorías de estados contables para entidades financieras."
                icon="FileCheck"
              />
              <ServiceCard
                title="Business Intelligence"
                description="Consultoría en inteligencia de negocios, desarrollo de tableros de control."
                icon="LineChart"
              />
            </div>
          </div>
        </section>

        {/* Tokenización Section */}
        <section id="tokenizacion" className="py-16 md:py-24 bg-black">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Tokenización de Activos</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Obtenemos fondos para proyectos de distintas verticales utilizando la tokenización de activos del mundo
                real como herramienta.
              </p>
            </div>

            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 relative">
                <div className="absolute -top-3 -left-3 bg-blue-900 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-400">Prefactibilidad</h3>
                <p className="text-gray-300 mb-4">
                  Evaluamos tu proyecto para determinar si es potencialmente tokenizable.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Análisis de viabilidad técnica y financiera</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Evaluación del potencial de mercado</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 relative">
                <div className="absolute -top-3 -left-3 bg-blue-900 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-400">Consultoría Express</h3>
                <p className="text-gray-300 mb-4">
                  Preparamos la documentación necesaria para cumplir con normativas legales y fiduciarias.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Elaboración de documentación legal</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Presentación a diferentes ALyCs</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 relative">
                <div className="absolute -top-3 -left-3 bg-blue-900 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-400">Estructuración</h3>
                <p className="text-gray-300 mb-4">
                  Implementamos la solución completa para la emisión y gestión de los tokens.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Diseño de tokenomics</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Desarrollo de plataforma tecnológica</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Emisión y comercialización de tokens</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Platform Demo */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Nuestra Plataforma Tecnológica</h3>
                <p className="text-gray-300 mb-6">
                  Hemos desarrollado una plataforma de última generación para la gestión completa del proceso de
                  tokenización, desde la emisión hasta la comercialización de los tokens.
                </p>
                <Button className="bg-blue-800 hover:bg-blue-700">Solicitar una Demo</Button>
              </div>
              <div className="relative">
                <div className="bg-blue-500/10 absolute -inset-4 rounded-xl blur-xl"></div>
                <div className="relative bg-gray-900 border border-gray-800 rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="/platform-screenshot.png"
                    alt="Plataforma de Tokenización"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gestión Financiera Section */}
        <section id="gestion-financiera" className="py-16 md:py-24 bg-gray-950">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Gestión Financiera</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Actuamos como Fractional CFO para tu empresa, ofreciendo servicios financieros estratégicos con
                especialización en Real Estate.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-blue-900 transition-colors">
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
                <h3 className="text-lg font-bold mb-2">Planificación Financiera</h3>
                <p className="text-gray-400 text-sm">
                  Desarrollamos estrategias financieras a medida, incluyendo presupuestos, proyecciones de flujo de caja
                  y planes de inversión.
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-blue-900 transition-colors">
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
                <h3 className="text-lg font-bold mb-2">Optimización de Costos</h3>
                <p className="text-gray-400 text-sm">
                  Analizamos la estructura de costos de tu empresa para identificar oportunidades de ahorro y mejorar la
                  eficiencia operativa.
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-blue-900 transition-colors">
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
                <h3 className="text-lg font-bold mb-2">Gestión de Riesgos</h3>
                <p className="text-gray-400 text-sm">
                  Identificamos, evaluamos y mitigamos riesgos financieros para proteger el valor de tu empresa y
                  asegurar su crecimiento sostenible.
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-blue-900 transition-colors">
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
                <h3 className="text-lg font-bold mb-2">Estructuración de Financiamiento</h3>
                <p className="text-gray-400 text-sm">
                  Diseñamos y negociamos soluciones de financiamiento óptimas, incluyendo deuda, capital y estructuras
                  híbridas.
                </p>
              </div>
            </div>

            {/* Real Estate Focus */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <div className="bg-blue-500/10 absolute -inset-4 rounded-xl blur-xl"></div>
                <div className="relative bg-gray-900 border border-gray-800 rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="/financial-dashboard.png"
                    alt="Dashboard Financiero"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Especialización en Real Estate</h3>
                <p className="text-gray-300 mb-4">
                  Nuestro equipo cuenta con amplia experiencia en el sector inmobiliario, ofreciendo soluciones
                  financieras específicas para:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Evaluación financiera de proyectos inmobiliarios</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Estructuración de fideicomisos inmobiliarios</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Optimización fiscal para desarrollos inmobiliarios</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Análisis de rentabilidad y valoración de activos</span>
                  </li>
                </ul>
                <Button className="bg-blue-800 hover:bg-blue-700">Solicitar Asesoramiento</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Auditoría Section */}
        <section id="auditoria" className="py-16 md:py-24 bg-black">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Auditoría</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Realizamos auditorías de estados contables para entidades financieras y empresas con altos estándares de
                cumplimiento normativo.
              </p>
            </div>

            {/* Audit Process */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold mb-4">Nuestro Enfoque de Auditoría</h3>
                <p className="text-gray-300 mb-6">
                  Implementamos un proceso de auditoría riguroso y adaptado a las necesidades específicas de cada
                  cliente, con especial atención a los requisitos regulatorios del sector financiero.
                </p>

                <div className="space-y-4">
                  <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <div className="bg-blue-900/30 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                        <span className="text-blue-400 font-bold">1</span>
                      </div>
                      <h4 className="text-lg font-semibold text-blue-400">Planificación</h4>
                    </div>
                    <p className="text-gray-400 text-sm pl-11">
                      Evaluación de riesgos, definición del alcance y diseño de procedimientos específicos.
                    </p>
                  </div>

                  <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <div className="bg-blue-900/30 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                        <span className="text-blue-400 font-bold">2</span>
                      </div>
                      <h4 className="text-lg font-semibold text-blue-400">Ejecución</h4>
                    </div>
                    <p className="text-gray-400 text-sm pl-11">
                      Aplicación de pruebas sustantivas y de control, análisis de datos y documentación de hallazgos.
                    </p>
                  </div>

                  <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <div className="bg-blue-900/30 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                        <span className="text-blue-400 font-bold">3</span>
                      </div>
                      <h4 className="text-lg font-semibold text-blue-400">Informe</h4>
                    </div>
                    <p className="text-gray-400 text-sm pl-11">
                      Elaboración de informes detallados con hallazgos, recomendaciones y plan de acción.
                    </p>
                  </div>

                  <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <div className="bg-blue-900/30 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                        <span className="text-blue-400 font-bold">4</span>
                      </div>
                      <h4 className="text-lg font-semibold text-blue-400">Seguimiento</h4>
                    </div>
                    <p className="text-gray-400 text-sm pl-11">
                      Monitoreo de la implementación de recomendaciones y mejora continua de procesos.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-blue-500/10 absolute -inset-4 rounded-xl blur-xl"></div>
                <div className="relative bg-gray-900 border border-gray-800 rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="/audit-report.png"
                    alt="Informe de Auditoría"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Audit Services */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-blue-900 transition-colors">
                <div className="bg-blue-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <FileCheck className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold mb-2">Auditoría Financiera</h3>
                <p className="text-gray-400 text-sm">
                  Verificación de la razonabilidad de los estados financieros según normas contables aplicables, con
                  énfasis en la detección de errores materiales.
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-blue-900 transition-colors">
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
                <h3 className="text-lg font-bold mb-2">Auditoría de Cumplimiento</h3>
                <p className="text-gray-400 text-sm">
                  Evaluación del cumplimiento de leyes, regulaciones y normativas aplicables al sector financiero,
                  incluyendo prevención de lavado de activos.
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-blue-900 transition-colors">
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
                <h3 className="text-lg font-bold mb-2">Auditoría de Sistemas</h3>
                <p className="text-gray-400 text-sm">
                  Evaluación de controles internos en sistemas de información, seguridad informática y procesos
                  tecnológicos críticos para la operación financiera.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Business Intelligence Section */}
        <section id="business-intelligence" className="py-16 md:py-24 bg-gray-950">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Business Intelligence</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Transformamos datos en insights accionables para impulsar la toma de decisiones estratégicas en tu
                organización.
              </p>
            </div>

            {/* BI Platform */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
              <div className="relative order-2 md:order-1">
                <div className="bg-blue-500/10 absolute -inset-4 rounded-xl blur-xl"></div>
                <div className="relative bg-gray-900 border border-gray-800 rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="/bi-dashboard.png"
                    alt="Dashboard de Business Intelligence"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold mb-4">Soluciones de BI a Medida</h3>
                <p className="text-gray-300 mb-6">
                  Desarrollamos tableros de control interactivos y sistemas de análisis de datos que permiten visualizar
                  KPIs críticos y tendencias de negocio en tiempo real.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Integración de múltiples fuentes de datos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Visualizaciones personalizadas según necesidades específicas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Acceso seguro desde cualquier dispositivo</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Alertas automáticas basadas en umbrales predefinidos</span>
                  </li>
                </ul>
                <Button className="bg-blue-800 hover:bg-blue-700">Ver Demo</Button>
              </div>
            </div>

            {/* BI Services */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-400">Consultoría en BI</h3>
                <p className="text-gray-300 mb-4">
                  Asesoramiento estratégico para la implementación de soluciones de Business Intelligence alineadas con
                  los objetivos de negocio.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Diagnóstico de necesidades de información</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Definición de KPIs y métricas clave</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Roadmap de implementación</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-400">Desarrollo de Dashboards</h3>
                <p className="text-gray-300 mb-4">
                  Creación de tableros interactivos que transforman datos complejos en visualizaciones claras y
                  accionables.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Diseño centrado en el usuario</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Visualizaciones interactivas y dinámicas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Actualización en tiempo real</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-400">Análisis Predictivo</h3>
                <p className="text-gray-300 mb-4">
                  Aplicación de modelos estadísticos y algoritmos de machine learning para predecir tendencias y
                  comportamientos futuros.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Forecasting financiero</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Detección de anomalías</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Segmentación y análisis de clientes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="sobre-nosotros" className="py-16 md:py-24 bg-black">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Sobre Nosotros</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-gray-300">
                  Volsmart es una banca de inversión digital basada en Buenos Aires, Argentina. Fue fundada por Matías
                  Ferrari en el año 2012 con el objetivo de prestar servicios de consultoría a empresas en el área
                  financiera y tecnológica.
                </p>
                <p className="text-gray-300">
                  Conformada por un equipo de profesionales con amplia experiencia en el sector financiero y
                  tecnológico, ofrecemos soluciones innovadoras para ayudar a nuestros clientes a alcanzar sus objetivos
                  de negocio.
                </p>
                <Button variant="outline" className="mt-4">
                  Conocer más
                </Button>
              </div>
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
            </div>

            {/* Team Section */}
            <div className="mt-20">
              <h2 className="text-3xl font-bold mb-12">Equipo</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                <TeamMember
                  name="Matías Ferrari"
                  position="Presidente"
                  credentials="Abogado UCA - MBA Boston"
                  experience="Goldman Sachs, Citibank"
                  imageSrc="/team/matias-ferrari.png"
                />
                <TeamMember
                  name="Ian Gawianski"
                  position="Gerente General"
                  credentials="Economista UBA"
                  experience=""
                  imageSrc="/team/ian-gawianski.png"
                />
                <TeamMember
                  name="Gustavo Aguzzi"
                  position="Director de Operaciones"
                  credentials="Contador UNC"
                  experience="Citibank, PwC, BofA"
                  imageSrc="/team/gustavo-aguzzi.png"
                />
                <TeamMember
                  name="Ignacio Iribas"
                  position="Director de RRHH"
                  credentials="Abogado UCA"
                  experience=""
                  imageSrc="/team/ignacio-iribas.png"
                />
                <TeamMember
                  name="Juan María Peral"
                  position="Director Contable"
                  credentials="Contador UADE"
                  experience="Deloitte"
                  imageSrc="/male-accountant-headshot.png"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="py-16 md:py-24 bg-gray-950">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Han confiado en nosotros</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <ClientLogo name="Moody's Analytics" imageSrc="/clients/moodys.png" />
              <ClientLogo name="Quality Home" imageSrc="/clients/quality-home.png" bgDark={true} />
              <ClientLogo name="IDERO" imageSrc="/clients/idero.png" />
              <ClientLogo name="AURA Punta del Este" imageSrc="/clients/aura.png" />
              <ClientLogo name="Black Bamboo Enterprises" imageSrc="/clients/black-bamboo.png" />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="py-16 md:py-24 bg-black">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Contacto</h2>
                <p className="text-gray-300">
                  Estamos aquí para ayudarte. Completa el formulario y nos pondremos en contacto contigo a la brevedad.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
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
                      <p className="text-sm text-gray-400">Teléfono</p>
                      <p>+54 11 1234-5678</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
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
                      <p className="text-sm text-gray-400">Email</p>
                      <p>info@volsmart.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
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
                      <p className="text-sm text-gray-400">Dirección</p>
                      <p>Av. Corrientes 1234, Buenos Aires, Argentina</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2">
                <Image src="/logo-white.png" alt="Volsmart Logo" width={220} height={60} className="h-10 w-auto" />
              </Link>
              <p className="text-gray-400 text-sm">
                Banca de inversión digital especializada en soluciones financieras y tecnológicas.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white">
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
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
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
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
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
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Secciones del sitio</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/#tokenizacion" className="text-gray-400 hover:text-white">
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link href="/#sobre-nosotros" className="text-gray-400 hover:text-white">
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="/#contacto" className="text-gray-400 hover:text-white">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Servicios</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/#tokenizacion" className="text-gray-400 hover:text-white">
                    Tokenización
                  </Link>
                </li>
                <li>
                  <Link href="/#gestion-financiera" className="text-gray-400 hover:text-white">
                    Gestión financiera
                  </Link>
                </li>
                <li>
                  <Link href="/#auditoria" className="text-gray-400 hover:text-white">
                    Auditoría
                  </Link>
                </li>
                <li>
                  <Link href="/#business-intelligence" className="text-gray-400 hover:text-white">
                    Business Intelligence
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/terminos" className="text-gray-400 hover:text-white">
                    Términos y condiciones
                  </Link>
                </li>
                <li>
                  <Link href="/privacidad" className="text-gray-400 hover:text-white">
                    Política de privacidad
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400">
            <p>
              Vol Pro SRL es un agente registrado como Proveedor de Servicios de Activos Virtuales ("PSAV") ante la
              Comisión Nacional de Valores bajo el registro número 86.
            </p>
            <p className="mt-4">&copy; {new Date().getFullYear()} Volsmart. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
