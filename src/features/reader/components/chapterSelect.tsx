import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet"
import { ChapterType } from "@/entities/mangaType"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight, List } from "lucide-react"
import React, { useState } from "react"

interface Props {
  className?: string
  currentChapter: number
  totalChapters: number
  chapters: ChapterType[]
  onChangeChapter: (number: number) => void
}

export const ChapterSelect: React.FC<Props> = ({
  className,
  currentChapter,
  totalChapters,
  chapters,
  onChangeChapter,
}) => {
  // Переход к предыдущей главе
  const handlePrevious = () => {
    if (currentChapter > 1) {
      onChangeChapter(Number(currentChapter) - 1)
    }
  }

  // Переход к следующей главе
  const handleNext = () => {
    if (currentChapter < totalChapters) {
      onChangeChapter(Number(currentChapter) + 1)
    }
  }

  // Выбор конкретной главы из списка
  const handleChange = (value: number, closeSheet: () => void) => {
    onChangeChapter(value)
    closeSheet() // Закрытие окна при изменении главы
  }

  return (
    <div className={cn("flex gap-1", className)}>
      <button
        className={cn("bg-card px-2 py-1 text-[12px] font-semibold transition-all disabled:opacity-50", currentChapter > 1 ? "hover:text-button " : ""  )}
        onClick={handlePrevious}
        disabled={currentChapter <= 1}
      >
        <ChevronLeft />
      </button>

      <Sheet>
        <SheetTrigger asChild>
          <button className="block h-full bg-card px-4 py-1 text-start text-[12px] font-semibold transition-all hover:text-button sm-max:py-2">
            <p className="sm-max:hidden" >Оглавление</p>
            <p className="max-w-[150px] truncate sm-max:hidden">
              {chapters[currentChapter - 1]?.title || "Неизвестная глава"}
            </p>
            <List className="hidden sm-max:block " />
          </button>
        </SheetTrigger>

        <SheetContent>
          <SheetHeader>
            <SheetTitle>Список глав</SheetTitle>
            <SheetDescription>Выберите главу.</SheetDescription>
          </SheetHeader>

          <div className="mt-2">
            {chapters.map((chapter, index) => (
              <SheetClose asChild key={index}>
                <button
                  className="w-full text-start text-[12px] font-normal transition-all hover:text-button hover:underline"
                  onClick={() => handleChange(index + 1, () => {})} // Вызываем handleChange с функцией закрытия
                >
                  {chapter.title}
                </button>
              </SheetClose>
            ))}
          </div>
        </SheetContent>
      </Sheet>

      {/* Кнопка "Вперёд" */}
      <button
        className={cn("bg-card px-2 py-1 text-[12px] font-semibold transition-all disabled:opacity-50", currentChapter < totalChapters ? "hover:text-button " : ""  )}
        onClick={handleNext}
        disabled={currentChapter >= totalChapters}
      >
        <ChevronRight />
      </button>
    </div>
  )
}