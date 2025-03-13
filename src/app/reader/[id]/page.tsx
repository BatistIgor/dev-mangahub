import { ReaderPage } from "@/features/reader/readerPage"
import { fetchChaptersById, fetchPagesByChapterId } from "@/services/mangaServerApi"
import Image from "next/image"
import qs from "qs"
import React from "react"

export default async function Reader({
  params: { id },
  searchParams,
}: {
  params: { id: string }
  searchParams: any
}) {
  const currentChapter = searchParams.chapter ? Number(searchParams.chapter) : 1
  const currentChapterPage = searchParams.page ? Number(searchParams.page) : 1
  const chapters = await fetchChaptersById(Number(id))
  const pages = await fetchPagesByChapterId(Number(id), Number(currentChapter))
  return (
    <div className="">
      <ReaderPage
        chapters={chapters}
        pages={pages}
        currentChapter={currentChapter}
        currentChapterPage={currentChapterPage}
        mangaId={Number(id)}
      />
    </div>
  )
}
