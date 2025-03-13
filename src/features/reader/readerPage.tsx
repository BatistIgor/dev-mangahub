"use client"

import { Logo } from "@/components/shared/logo"
import { ChapterType, PagesOfChapterType } from "@/entities/mangaType"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"
import React, { useState } from "react"

import { ChapterPageSelect } from "./components/chapterPageSelect"
import { ChapterSelect } from "./components/chapterSelect"
import { Loader2 } from "lucide-react"

interface Props {
  className?: string
  chapters: ChapterType[]
  pages: PagesOfChapterType
  currentChapter: number
  currentChapterPage: number
  mangaId: number
}

export const ReaderPage: React.FC<Props> = ({
  className,
  chapters,
  pages,
  currentChapter,
  currentChapterPage,
  mangaId,
}) => {
  const [selectedPage, setSelectedPage] = useState(currentChapterPage)
  const [loading, setLoading] = useState(false)

  const searchParams = useSearchParams()
  const router = useRouter()

  const onChangePage = (number: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("page", number.toString())

    const queryString = params.toString()
    window.history.replaceState(null, '', `?${queryString}`)
    setSelectedPage(number)
    setLoading(true)
  }

  const onChangeChapter = (number: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("chapter", number.toString())
    params.set("page", "1")
    setSelectedPage(1)

    const queryString = params.toString()
    router.push(`?${queryString}`)
    setLoading(true)
  }

  const onChangePageByClick = () => {
    if (selectedPage < pages.images.length) {
      onChangePage(selectedPage + 1)
    } else if (currentChapter < chapters.length) {
      onChangeChapter(currentChapter + 1)
    } else {
      router.push(`/manga/${mangaId}`)
    }
  }

  // Предзагрузка следующего и предыдущего изображений (если они существуют)
  const preloadImages = [
    pages.images[selectedPage] ? pages.images[selectedPage].image : null, // Следующая страница
    pages.images[selectedPage - 2] ? pages.images[selectedPage - 2].image : null, // Предыдущая страница
  ].filter(Boolean) // Убираем `null` значения

  return (
    <div className={cn("", className)}>
      <div className="bg-search">
        <div className="mx-auto flex max-w-[1000px] items-center justify-between px-3">
          <Logo />
          <ChapterSelect
            currentChapter={currentChapter}
            onChangeChapter={onChangeChapter}
            totalChapters={chapters.length}
            chapters={chapters}
          />
        </div>
      </div>

      <button className="mx-auto block relative max-w-[1000px] max-h-[1500px]" onClick={onChangePageByClick}>
        {loading && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
            <Loader2 className="animate-spin text-white" size={50} />
          </div>
        )}

        <Image
          className={`mx-auto h-auto w-auto transition-opacity duration-500 ${loading ? "opacity-0" : "opacity-100"}`}
          src={pages.images[selectedPage - 1].image}
          width={1000}
          height={1500}
          alt="page"
          placeholder="blur"
          blurDataURL="data:image/gif;base64,..." 
          onLoad={() => setLoading(false)}
          priority
        />
      </button>

      <ChapterPageSelect
        currentChapterPage={selectedPage}
        onChangePage={onChangePage}
        totalPages={pages.images.length}
      />

      {/* Скрытая предзагрузка следующих и предыдущих изображений */}
      {preloadImages.map((src, index) => (
        <Image
          key={index}
          src={src!}
          width={1000}
          height={1500}
          alt="preload"
          className="hidden"
          loading="eager" // Принудительная предзагрузка
        />
      ))}
    </div>
  )
}
