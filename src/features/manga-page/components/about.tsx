import { Button } from "@/components/ui"
import { TaxonomiesType } from "@/entities/mangaType"
import { Taxonomies } from "@/features/manga-page/components"
import { cn } from "@/lib/utils"
import Link from "next/link"
import React from "react"

interface Props {
  className?: string
  description: string
  english_name: string
  taxonomies: TaxonomiesType
  mangaId: number
}

export const About: React.FC<Props> = ({
  className,
  description,
  english_name,
  taxonomies,
  mangaId,
}) => {
  return (
    <div className={cn("", className)}>
      <div className="mb-[26px] flex items-center justify-between gap-3 rounded-[10px] border border-black bg-blackButton px-[32px] py-[28px] text-white shadow-[1px_1px_23px_1px_rgba(0,0,0,0.75)] md-max:py-[15px]">
        <h1 className="text-[24px] font-semibold md-max:self-center md-max:text-[20px]">
          “{english_name}”
        </h1>
        <Link href={`/reader/${mangaId}`}>
          <Button size={"buttonRead"} variant={"buttonRead"} className="font-bold">
            Читать
          </Button>
        </Link>
      </div>
      <div className="font-regular relative mb-[26px] pl-[4px] text-[16px] font-normal before:absolute before:bottom-[-10px] before:left-0 before:h-[0.5px] before:w-full before:bg-border">
        {description}
      </div>
      <div>
        <Taxonomies taxonomies={taxonomies} />
      </div>
    </div>
  )
}
