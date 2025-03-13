import { Container } from "@/components/shared/container"
import { Footer } from "@/components/shared/footer"
import { Header } from "@/components/shared/header"
import { MangaPage } from "@/features/manga-page"
import { fetchMangaById } from "@/services/mangaServerApi"
import Image from "next/image"
import React from "react"



export default async function mangaPage({ params: { id } }: { params: { id: string } }) {
  const mangaData = await fetchMangaById(Number(id))

  return (
    <>
      <Header />
      <main className="mb-7 min-h-[75vh] overflow-hidden">
        <MangaPage mangaData={mangaData} />
      </main>
      <Footer />
    </>
  )
}
