import { cn } from "@/lib/utils"
import React from "react"

interface Props {
  className?: string
  name: string
  english_name: string
}

export const Titles: React.FC<Props> = ({ className, name, english_name }) => {
  return (
    <div className={cn("mb-[14px] w-full", className)}>
      <h2 className="text-lg font-semibold md-max:text-center">{name}</h2>
      <h2 className="text-sm font-semibold text-input md-max:text-center">{english_name}</h2>
    </div>
  )
}
