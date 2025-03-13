"use client"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { InitialFilter } from "@/entities/filtersType"
import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import { mangaSlice } from "@/store/mangaSlice"
import { useEffect } from "react"

import { FilterCheckbox } from "./filter-checkbox"

interface Props {
  initialFilters: InitialFilter[]
  filters: Record<string, number[]>
  toggleFilter: (option: { name: string; value: number; checked: boolean }) => void
  stateHamburger: boolean
}

export const MobileFilters: React.FC<Props> = ({ initialFilters, filters, toggleFilter }) => {
  const dispatch = useAppDispatch()
  const stateHamburger = useAppSelector(state => state.manga.stateHamburger)

  useEffect(() => {
    if (!stateHamburger) {
      dispatch(mangaSlice.actions.setStateHamburger(false))
    }
  }, [stateHamburger, dispatch])

  return (
    <Sheet
      open={stateHamburger}
      onOpenChange={open => dispatch(mangaSlice.actions.setStateHamburger(open))}
    >
      <SheetContent>
        <SheetHeader className="sticky top-0 bg-background z-10 pb-1">
          <SheetTitle className="">Фильтры</SheetTitle>
          <SheetDescription className="">Выберите параметры фильтрации.</SheetDescription>
        </SheetHeader>

        <ScrollArea className="h-full max-h-[calc(100vh-130px)]">
          <div className="relative z-30 bg-background">
            {initialFilters.map(filter => (
              <div key={filter.taxonomy} className="mb-4">
                <h3 className="relative mb-3 font-semibold before:absolute before:bottom-[-4px] before:left-0 before:h-[1px] before:w-full before:bg-border">
                  {filter.label}
                </h3>
                <div>
                  {filter.terms.map(term => (
                    <FilterCheckbox
                      key={term.id}
                      text={term.name}
                      value={term.id.toString()}
                      name={filter.taxonomy}
                      checked={filters[filter.taxonomy]?.includes(term.id) ?? false}
                      onCheckedChange={(name, value, checked) =>
                        toggleFilter({ name, value: Number(value), checked })
                      }
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
