import { Button } from "@/components/ui"
import { MangaType } from "@/entities/mangaType"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import React from "react"

import { Description, Stars, Taxonomies, Titles } from "./manga-card-components"

export const MangaCard: React.FC<MangaType> = ({
  className,
  name,
  id,
  english_name,
  description,
  image,
  rating_user,
  taxonomies,
}) => {
  return (
    <div
      className={cn(
        "flex max-w-[835px] justify-between gap-3 bg-box p-6 sm-max:max-w-[345px] sm-max:flex-col lg-max:ml-auto lg-max:mr-auto",
        className,
      )}
    >
      <div className="sm-max:flex sm-max:gap-4">
        <Image
          src={image}
          width={100}
          height={150}
          alt={name}
          className="mb-2 max-h-[150px] min-h-[150px] min-w-[100px] max-w-[100px] border-2 border-border"
        />
        <Stars rating_user={rating_user} className="sm-max:hidden" />
        <div className="mb-3 flex w-full justify-between sm:hidden sm-max:w-full sm-max:flex-col sm-max:items-start">
          <Titles name={name} english_name={english_name} id={id} className="sm-max:mb-2" />
          <Stars rating_user={rating_user} className="sm:hidden sm-max:mb-2" />
          <Link href={`/reader/${id}`}>
            <Button size={"buttonRead"} variant={"buttonRead"} className="font-bold">Читать</Button>
          </Link>
        </div>
      </div>
      <div className="flex w-full flex-col">
        <div className="mb-3 flex w-full justify-between sm-max:hidden">
          <Titles name={name} english_name={english_name} id={id} />
          <Link href={`/reader/${id}`}>
            <Button size={"buttonRead"} variant={"buttonRead"} className="font-bold">Читать</Button>
          </Link>
        </div>
        <Description description={description} className="mb-2" />
        <Taxonomies taxonomies={taxonomies} />
      </div>
    </div>
  )
}
