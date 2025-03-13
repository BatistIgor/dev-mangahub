import { ChapterType } from "@/entities/mangaType"
import { cn } from "@/lib/utils"
import Link from "next/link"
import React from "react"

interface Props {
  className?: string
  chapters: ChapterType[]
  error: any
  isFetching: boolean
  mangaId: number
}

export const Chapters: React.FC<Props> = ({ className, chapters, error, isFetching, mangaId }) => {
  console.log(chapters)

  if (error) return <p>Error: {error.message}</p>

  if (isFetching) return <p>Loading...</p>

  return (
    <div className={cn("flex flex-col", className)}>
      {chapters.map((chapter: ChapterType) => (
        <div
          className="flex items-center justify-between bg-card px-2 py-1 text-[12px] font-normal transition-all hover:bg-background sm-max:text-[10px]"
          key={chapter.number}
        >
          <div className="flex items-center gap-2">
            <p className="rounded-sm bg-blackButton p-1">№{chapter.number}</p>
            <Link href={`/reader/${mangaId}?` + `chapter=${chapter.number}`}>
              <p className="transition-all duration-300 hover:text-button hover:underline">
                {chapter.title}
              </p>
            </Link>
          </div>
          <p>{chapter.created_at}</p>
        </div>
      ))}
    </div>
  )
}
