import { cn } from "@/lib/utils"
import React from "react"
import Link from "next/link"

interface Props {
  className?: string
  name: string
  english_name: string
  id: number
}

export const Titles: React.FC<Props> = ({ className, name, english_name, id }) => {
  return (
    <div className={cn("", className)}>
      <Link href={`/manga/${id}`}><h3 className="mb-2 text-[18px] font-semibold leading-[18px] hover:text-button duration-300 transition-all">{name}</h3></Link>

      <h4 className="text-[14px] font-semibold leading-[14px] text-input">{english_name}</h4>
    </div>
  )
}
