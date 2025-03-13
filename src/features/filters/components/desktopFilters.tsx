import { cn } from "@/lib/utils"
import React from "react"
import { InitialFilter } from "@/entities/filtersType"
import { FilterCheckbox } from "./filter-checkbox"

interface Props {
  className?: string
  initialFilters: InitialFilter[]
  filters: Record<string, number[]>
  toggleFilter: (option: { name: string; value: number; checked: boolean }) => void
}

export const DesktopFilters: React.FC<Props> = ({ className, initialFilters, filters, toggleFilter }) => {
  return (
    <div
      className={cn(
        "relative z-30 max-w-[244px] bg-box p-4 transition-all duration-300 lg-max:hidden",
        className,
      )}
    >
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
  )
}
