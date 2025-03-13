import { cn } from "@/lib/utils"
import Link from "next/link"
import React from "react"

interface Props {
  className?: string
}

export const Logo: React.FC<Props> = ({ className }) => {
  return (
    <a className={cn("",className)} href="/">
      <div className="px-3 py-1 bg-logo text-logo-foreground rounded-[5px]">
        <p className="font-extrabold whitespace-nowrap">MANGA-HUB.com</p>
      </div>
    </a>
  )
}
