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
      <div className="flex gap-2 mb-1 flex-wrap">
        <p className="font-normal text-input">Жанри:</p>
        {taxonomies.genre.map((term: any) => (
          <span key={term.id} className="rounded-[5px] bg-card px-[3px] py-[2px] text-[12px] text-input cursor-pointer hover:bg-hoverBg">
            {term.name}{" "}
          </span>
        ))}
      </div>
      <div className="flex gap-2">
        <p className="font-normal text-input">Статус:</p>
          <span className="rounded-[5px] bg-card py-[2px] px-[3px] text-[12px] text-input cursor-pointer hover:bg-hoverBg">
            {taxonomies.transfer_status.name}{" "}
          </span>
      </div>
      <div className="flex gap-2 flex-wrap">
        <p className="font-normal text-input">Возрастные ограничения:</p>
          <span className="rounded-[5px] bg-card py-[2px] px-[3px] text-[12px] text-input cursor-pointer hover:bg-hoverBg">
            {taxonomies.age_restriction.name}{" "}
          </span>
      </div>
    </div>
  )
}
