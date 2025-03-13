"use client"

import { Container } from "@/components/shared/container"
import { MangaType } from "@/entities/mangaType"
import { Chapters, Comments, Preview, Tabs, Titles, About } from "@/features/manga-page/components"
import { cn } from "@/lib/utils"
import { useGetMangaChaptersQuery } from "@/services/mangaApi"
import React, { useState } from "react"


interface Props {
  className?: string
  mangaData: MangaType
}

export const MangaPage: React.FC<Props> = ({ className, mangaData }) => {
  const [activeTab, setActiveTab] = useState("Онисание")

  const { data, error, isFetching } = useGetMangaChaptersQuery(mangaData.id)

  const renderTabContent = () => {
    switch (activeTab) {
      case "Онисание":
        return (
          <About
            description={mangaData.description}
            english_name={mangaData.english_name}
            taxonomies={mangaData.taxonomies}
            mangaId={mangaData.id}
          />
        )
      case "Главы":
        return (
          <Chapters chapters={data} error={error} isFetching={isFetching} mangaId={mangaData.id} />
        )
      case "Коментарии":
        return <Comments mangaId={mangaData.id} />
      default:
        return null
    }
  }

  return (
    <Container className={cn("mt-9 flex justify-between md-max:flex-col", className)}>
      <Preview
        className="mr-[47px] md-max:mr-0 md-max:self-center"
        name={mangaData.name}
        image={mangaData.image}
        english_name={mangaData.english_name}
      />
      <div className="w-full">
        <Titles
          className="md-max:hidden"
          name={mangaData.name}
          english_name={mangaData.english_name}
        />
        <Tabs setActiveTab={setActiveTab} activeTab={activeTab} />
        <div className="relative pb-[40px] pt-[22px] before:absolute before:-bottom-[0] before:left-[calc((100%-100vw)/2-310px)] before:right-[calc((100%-100vw)/2-4px)] before:top-0 before:z-[-1] before:min-h-[470px] before:border before:border-b-[1px] before:border-l-[1px] before:border-r-[1px] before:border-t-[1px] before:border-border before:bg-search md-max:before:min-h-0">
          {renderTabContent()}
        </div>
      </div>
    </Container>
  )
}
