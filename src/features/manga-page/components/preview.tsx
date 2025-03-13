import { Button } from "@/components/ui"
import { cn } from "@/lib/utils"
import Image from "next/image"
import React from "react"
import { Titles } from "@/features/manga-page/components"

interface Props {
  className?: string
  image: string
  name: string
  english_name: string
}

export const Preview: React.FC<Props> = ({ className, name, image, english_name }) => {
  return (
    <div
      className={cn(
        "relative mb-9 flex flex-col gap-4 md-max:gap-0 self-start rounded-[10px] border-t border-border bg-search p-[15px] md-max:relative md-max:before:z-[-1] md-max:before:absolute md-max:before:top-[20%] md-max:before:-bottom-[2px] md-max:before:left-[calc((100%-100vw)/2-390px)] md-max:before:right-[calc((100%-100vw)/2-4px)] md-max:before:bg-search md-max:before:border md-max:before:border-border md-max:before:border-t-[1px] md-max:before:border-b-1 md-max:before:border-l-0 md-max:before:border-r-[1px]",
        className,
      )}
    >
      <Image
        src={image}
        width={200}
        height={300}
        alt={name}
        className="mb-3 h-[300px] w-[200px] border-2 border-border object-cover shadow-[1px_1px_23px_1px_rgba(0,0,0,0.75)]"
      />
      <Titles className="md:hidden" name={name} english_name={english_name} />
      <Button variant={"insideManga"} className="font-bold md-max:hidden">
        Отслеживать
      </Button>
      <Button variant={"insideManga"} className="font-bold md-max:hidden">
        Добавить в закладки
      </Button>
      <Button variant={"insideManga"} className="font-bold md-max:hidden">
        Начать чтение
      </Button>
    </div>
  )
}
