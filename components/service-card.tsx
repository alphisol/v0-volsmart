"use client"

import Link from "next/link"
import { Layers, BarChart, FileCheck, LineChart, type LucideIcon } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface ServiceCardProps {
  title: string
  description: string
  icon: "Layers" | "BarChart" | "FileCheck" | "LineChart"
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const { t } = useLanguage()
  const icons: Record<string, LucideIcon> = {
    Layers,
    BarChart,
    FileCheck,
    LineChart,
  }

  const Icon = icons[icon]
  const slug = title.toLowerCase().replace(/\s+/g, "-")

  return (
    <Card className="bg-gray-900 border-gray-800 hover:border-blue-900 transition-colors">
      <CardHeader>
        <div className="bg-blue-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-blue-400" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-gray-400">{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Link href={`/#${slug}`}>
          <Button variant="link" className="px-0 text-blue-400 hover:text-blue-300">
            {t("know-more")}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
