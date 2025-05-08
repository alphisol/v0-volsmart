"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { useLanguage } from "@/contexts/language-context"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface FormValues {
  name: string
  email: string
  phone?: string
  message: string
}

export function ContactForm() {
  const { t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>()

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)

    // Simulación de envío de formulario
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: t("form-sent"),
      description: t("contact-soon"),
    })

    reset()
    setIsSubmitting(false)
  }

  return (
    <Card className="bg-gray-900 border-gray-800">
      <CardHeader>
        <CardTitle>{t("contact-form")}</CardTitle>
        <CardDescription>{t("form-description")}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">{t("full-name")}</Label>
            <Input
              id="name"
              placeholder={t("your-name")}
              {...register("name", { required: t("name-required") })}
              className="bg-gray-800 border-gray-700"
            />
            {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">{t("email")}</Label>
            <Input
              id="email"
              type="email"
              placeholder={t("your-email")}
              {...register("email", {
                required: t("email-required"),
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: t("invalid-email"),
                },
              })}
              className="bg-gray-800 border-gray-700"
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">{t("phone-optional")}</Label>
            <Input
              id="phone"
              placeholder="+54 11 1234-5678"
              {...register("phone")}
              className="bg-gray-800 border-gray-700"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">{t("message")}</Label>
            <Textarea
              id="message"
              placeholder={t("message-placeholder")}
              rows={4}
              {...register("message", { required: t("message-required") })}
              className="bg-gray-800 border-gray-700"
            />
            {errors.message && <p className="text-sm text-red-500">{errors.message.message}</p>}
          </div>
          <Button type="submit" className="w-full bg-blue-800 hover:bg-blue-700" disabled={isSubmitting}>
            {isSubmitting ? t("sending") : t("send-message")}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
