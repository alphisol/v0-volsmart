import Image from "next/image"

interface ClientLogoProps {
  name: string
  imageSrc: string
  bgDark?: boolean
}

export function ClientLogo({ name, imageSrc, bgDark = false }: ClientLogoProps) {
  return (
    <div
      className={`${bgDark ? "bg-gray-900" : "bg-gray-800"} border border-gray-800 rounded-lg p-6 flex items-center justify-center h-32 transition-all hover:border-gray-700`}
    >
      <Image
        src={imageSrc || "/placeholder.svg"}
        alt={`Logo de ${name}`}
        width={160}
        height={80}
        className="object-contain max-h-20"
      />
    </div>
  )
}
