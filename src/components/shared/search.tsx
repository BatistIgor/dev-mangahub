"use client"

import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { fetchManga } from "@/services/mangaServerApi"
import { Search as SearchIcon } from "lucide-react"
import Link from "next/link"
import React from "react"
import { useClickAway, useDebounce } from "react-use"

interface Props {
  className?: string
}

export const Search: React.FC<Props> = ({ className }) => {
  const [focused, setFocused] = React.useState(false)
  const [searchQuery, setSearchQuery] = React.useState("")
  const [mangas, setMangas] = React.useState([])

  const ref = React.useRef(null)

  useClickAway(ref, () => {
    setFocused(false)
  })

  useDebounce(
    () => {
      if (!searchQuery) {
        setMangas([])
        return
      }
      fetchManga(`?search=${searchQuery}`)
        .then(results => {
          setMangas(results.results)
        })
        .catch(error => {
          console.error(error)
        })
    },
    300,
    [searchQuery],
  )

  const onClickItem = () => {
    setFocused(false)
    setSearchQuery("")
    setMangas([])
  }

  return (
    <>
      {focused && (
        <div className="fixed bottom-0 left-0 right-0 top-0 z-30 bg-black opacity-50"></div>
      )}
      <div
        ref={ref}
        className={cn(
          "relative z-30 flex w-full max-w-[300px] items-center rounded-[5px] bg-search px-3 text-search-foreground transition-all duration-300",
          className,
          focused ? "max-w-[500px]" : "",
        )}
      >
        <SearchIcon size={20} />
        <Input
          className={cn("font-regular border-none focus:border-none")}
          placeholder="Пошук..."
          onFocus={() => setFocused(true)}
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        {mangas.length > 0 && (
          <div
            className={cn(
              "invisible absolute left-0 top-14 w-full max-w-[500px] rounded-md bg-search py-2 opacity-0 shadow-md transition-all duration-300",
              focused && "visible top-12 opacity-100",
            )}
          >
            {mangas.map((manga: any) => (
              <Link onClick={onClickItem} href={`/manga/${manga.id}`} key={manga.id} className="">
                <div className="pointer-events-none px-2 py-2 font-normal hover:bg-hoverBg">
                  {manga.name}{" "}
                  <span className="pointer-events-none text-input">{manga.english_name}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
