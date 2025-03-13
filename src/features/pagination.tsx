"use client"

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import { getPageNumbers } from "@/lib/paginationUtils"
import { mangaSlice } from "@/store/mangaSlice"
import { usePathname, useSearchParams } from "next/navigation"

interface Props {
  initialPages: number
}

export const Paginator = ({ initialPages }: Props) => {
  const dispatch = useAppDispatch()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  let currentPage = 1

  let totalPages = useAppSelector(state => state.manga.totalPage)

  if (totalPages === undefined) {
    totalPages = initialPages;
  }

  if (searchParams.get("page") !== null) {
    currentPage = Number(searchParams.get("page"))
  }

  const onChangePage = (number: number) => {
    const params = new URLSearchParams(searchParams.toString())
    const newPage = currentPage + number

    if (newPage > 1) {
      params.set("page", newPage.toString())
    } else {
      params.delete("page")
    }

    const queryString = params.toString()
    window.history.pushState(null, "", `${pathname}?${queryString}`)
    dispatch(mangaSlice.actions.setCurrentPage(newPage))
  }

  if (totalPages <= 1) {
    return null
  }

  const onChangePageByNumber = (number: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("page", number.toString())

    const queryString = params.toString()
    window.history.pushState(null, "", `${pathname}?${queryString}`)
    dispatch(mangaSlice.actions.setCurrentPage(number))
  }

  return (
    <Pagination className="mt-4">
      <PaginationContent className="flex items-center rounded-[10px] bg-box px-5 py-3">
        <PaginationItem>
          <PaginationPrevious
            className="mr-2"
            onClick={() => onChangePage(-1)}
            aria-disabled={currentPage <= 1}
            disabled={currentPage <= 1}
          />
        </PaginationItem>

        {getPageNumbers(totalPages, currentPage).map((page, index) =>
          page === "ellipsis" ? (
            <PaginationItem key={`ellipsis-${index}`}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={page}>
              <PaginationLink
                onClick={() => onChangePageByNumber(Number(page))}
                isActive={page === currentPage}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ),
        )}

        <PaginationItem>
          <PaginationNext
            className="ml-2"
            onClick={() => onChangePage(1)}
            aria-disabled={currentPage >= totalPages}
            disabled={currentPage >= totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
