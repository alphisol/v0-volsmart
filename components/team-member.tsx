import Image from "next/image"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface TeamMemberProps {
  name: string
  position: string
  credentials: string
  experience: string
  imageSrc?: string
}

export function TeamMember({ name, position, credentials, experience, imageSrc }: TeamMemberProps) {
  return (
    <Card className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-all">
      <CardHeader className="pb-2">
        <div className="aspect-square relative mb-4 overflow-hidden rounded-lg">
          <Image
            src={imageSrc || `/placeholder.svg?height=300&width=300&query=professional headshot`}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <CardTitle className="text-lg">{name}</CardTitle>
        <CardDescription className="text-gray-400">{position}</CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-gray-400">
        <p>{credentials}</p>
        {experience && <p className="mt-1">{experience}</p>}
      </CardContent>
    </Card>
  )
}
