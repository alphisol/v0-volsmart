"use client"

import { ChevronDown } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 text-sm">
        {language} <ChevronDown className="h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage("ES")}>Español</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("EN")}>English</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
