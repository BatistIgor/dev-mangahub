import { cn } from "@/lib/utils"
import React from "react"
import { TaxonomiesType } from "@/entities/mangaType"

interface Props {
  className?: string
  taxonomies: TaxonomiesType
}

export const Taxonomies: React.FC<Props> = ({ className, taxonomies }) => {
  return (
    <div className={cn("", className)}>
      <div className="flex gap-2 mb-1">
        <p className="font-normal text-input">Жанри:</p>
        {taxonomies.genre.slice(0, 3).map((term: any) => (
          <span key={term.id} className="rounded-[5px] bg-card px-[3px] py-[2px] text-[12px] text-input cursor-pointer hover:bg-hoverBg">
            {term.name}{" "}
          </span>
        ))}
      </div>
      <div className="flex gap-2">
        <p className="font-normal text-input">Статус:</p>
          <span className="rounded-[5px] bg-card p-1 text-[12px] text-input cursor-pointer hover:bg-hoverBg">
            {taxonomies.transfer_status.name}{" "}
          </span>
      </div>
    </div>
  )
}
