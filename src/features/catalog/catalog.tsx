"use client"

import { MangaType } from "@/entities/mangaType"
import { MangaCard } from "@/features/catalog/components/manga-card"
import { MangaCardSkeleton } from "@/features/catalog/components/manga-card.skeleton"
import { useAppSelector } from "@/hooks/useStore"
import { useAppDispatch } from "@/hooks/useStore"
import { cn } from "@/lib/utils"
import { useGetMangaByQueryQuery } from "@/services/mangaApi"
import { mangaSlice } from "@/store/mangaSlice"
import { ArrowDownWideNarrow, SlidersHorizontal } from "lucide-react"
import { useEffect, useState } from "react"
import { toast } from "sonner"

interface CatalogProps {
  initialManga: MangaType[]
}

export default function Catalog({ initialManga }: CatalogProps) {
  const filters = useAppSelector(state => state.manga.filters)
  const page = useAppSelector(state => state.manga.currentPage)

  const dispatch = useAppDispatch()

  const { data, error, isFetching } = useGetMangaByQueryQuery(
    { ...(filters ?? {}), page },
    {
      skip: filters === undefined && page === undefined,
    },
  )

  const [manga, setManga] = useState<MangaType[]>(initialManga)

  useEffect(() => {
    if (data) {
      setManga(data.results)
      dispatch(mangaSlice.actions.setTotalPage(data.total_pages))
    }
  }, [data])

  if (isFetching) {
    return (
      <div className="w-full">
        <h1 className="mb-4 ml-5 mt-5 text-2xl font-bold">Каталог</h1>
        <div className="flex w-full flex-col gap-4">
          <MangaCardSkeleton />
          <MangaCardSkeleton />
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="mb-4 ml-5 mt-5 text-2xl font-bold">Каталог</h1>
        <div className="flex flex-col items-end">
          <button
            onClick={() => dispatch(mangaSlice.actions.setStateHamburger(true))}
            className="flex items-center gap-1 transition-all hover:text-button lg:hidden"
          >
            <p className="text-[16px] font-bold">Фильтр</p>
            <SlidersHorizontal size={15} className="mr-5" />
          </button>
          <button
            onClick={() =>
              toast("В разработке", {
                action: {
                  label: "ок",
                  onClick: () => console.log("ок"),
                },
              })
            }
            className="flex items-center gap-1 transition-all hover:text-button lg:hidden"
          >
            <p className="text-[16px] font-bold">Сортировка</p>
            <ArrowDownWideNarrow size={15} className="mr-5" />
          </button>
        </div>
      </div>
      <div className={cn("flex w-full flex-col gap-4")}>
        {manga.map(Manga => (
          <MangaCard key={Manga.id} {...Manga} />
        ))}
      </div>
    </div>
  )
}
