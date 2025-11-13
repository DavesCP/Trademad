"use client"

interface FlagIconProps {
  countryCode: string
  className?: string
}

export function FlagIcon({ countryCode, className = "" }: FlagIconProps) {
  // Using flagcdn.com for reliable SVG flags
  const flagUrl = `https://flagcdn.com/${countryCode}.svg`

  return (
    <img
      src={flagUrl || "/placeholder.svg"}
      alt={`${countryCode} flag`}
      className={`inline-block object-cover ${className}`}
      width={24}
      height={18}
    />
  )
}
