"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"
import React, { useState } from "react"

interface Props {
  className?: string
  currentChapterPage: number
  totalPages: number
  onChangePage: (number: number) => void
}

export const ChapterPageSelect: React.FC<Props> = ({
  className,
  currentChapterPage,
  totalPages,
  onChangePage,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleChange = (pageNumber: number) => {
    onChangePage(pageNumber)
    setIsOpen(false)
  }

  const handlePrevious = () => {
    if (currentChapterPage > 1) {
      onChangePage(Number(currentChapterPage) - 1)
    }
  }

  const handleNext = () => {
    if (currentChapterPage < totalPages) {
      onChangePage(Number(currentChapterPage) + 1)
    }
  }

  return (
    <div className={cn("flex gap-1 items-center justify-center bg-search", className)}>
      <button
        className={cn(
          "bg-card px-2 py-1 text-[12px] font-semibold transition-all disabled:opacity-50",
          currentChapterPage > 1 ? "hover:text-button" : "",
        )}
        onClick={handlePrevious}
        disabled={currentChapterPage <= 1}
      >
        <ChevronLeft />
      </button>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button variant="chapterPage" onClick={() => setIsOpen(true)}>
            Страница {currentChapterPage}/{totalPages}
          </Button>
        </DialogTrigger>
        <DialogContent className="fixed left-1/2 top-1/2 z-50 max-h-[80vh] w-[250px] -translate-x-1/2 -translate-y-1/2 overflow-auto rounded-md bg-search p-6 shadow-lg">
          <DialogHeader>
            <DialogTitle>Выбор страницы</DialogTitle>
            <DialogDescription>
              <ScrollArea
                className="overflow-y-auto p-4"
                style={{ height: `min(${totalPages * 36}px, 70vh)` }}
              >
                {Array.from({ length: totalPages }).map((_, index) => {
                  const pageNumber = index + 1
                  return (
                    <div key={pageNumber} className="space-y-2">
                      <Button
                        onClick={() => handleChange(pageNumber)}
                        variant="selectPage"
                        className={
                          `w-full` + (pageNumber === currentChapterPage ? " text-button" : "")
                        }
                      >
                        {`Страница ${pageNumber} / ${totalPages}`}
                      </Button>
                    </div>
                  )
                })}
              </ScrollArea>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <button
        className={cn("bg-card px-2 py-1 text-[12px] font-semibold transition-all disabled:opacity-50", currentChapterPage < totalPages ? "hover:text-button " : ""  )}
        onClick={handleNext}
        disabled={currentChapterPage >= totalPages}
      >
        <ChevronRight />
      </button>
    </div>
  )
}

{
  /* <Select value={`${currentChapterPage}`}  defaultValue={`${currentChapterPage}`} onValueChange={handleChange}>
<SelectTrigger className="">
  <SelectValue placeholder="Выберите страницу" />
</SelectTrigger>
<SelectContent>
  <SelectGroup>
    <SelectLabel>Страницы</SelectLabel>
    {Array.from({ length: totalPages }).map((_, index) => {
      const pageNumber = index + 1
      return (
        <SelectItem key={pageNumber} value={`${pageNumber}`}>
          {`страница ${pageNumber} / ${totalPages}`}
        </SelectItem>
      )
    })}
  </SelectGroup>
</SelectContent>
</Select> */
}
