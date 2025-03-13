"use client"

import { Hamburger } from "@/components/shared/hamburger"
import { InitialFilter } from "@/entities/filtersType"
import { FilterCheckbox } from "@/features/filters/components/filter-checkbox"
import { useFilters } from "@/features/filters/hooks/useFilters"
import { useAppSelector } from "@/hooks/useStore"
import { cn } from "@/lib/utils"

import { MobileFilters } from "./components/mobileFilters"
import { DesktopFilters } from "./components/desktopFilters"

interface Props {
  className?: string
  initialFilters: InitialFilter[]
}

export const Filters = ({ className, initialFilters }: Props) => {
  const { filters, toggleFilter } = useFilters(initialFilters)
  const stateHamburger = useAppSelector(state => state.manga.stateHamburger)

  return (
    <>
      <DesktopFilters className={className} initialFilters={initialFilters} filters={filters} toggleFilter={toggleFilter} />
      <MobileFilters stateHamburger={stateHamburger} initialFilters={initialFilters} filters={filters} toggleFilter={toggleFilter} />
    </>
  )
}
