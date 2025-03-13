import { InitialFilter } from "@/entities/filtersType"
import useFilter from "@/features/filters/hooks/useLocalFilters"
import useQueryParams from "@/features/filters/hooks/useQueryParams"
import { useAppDispatch } from "@/hooks/useStore"
import { mangaSlice } from "@/store/mangaSlice"
import { usePathname, useSearchParams } from "next/navigation"
import qs from "qs"
import { useEffect, useMemo, useState } from "react"

export const useFilters = (initialFilters: InitialFilter[]) => {
  const dispatch = useAppDispatch()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const QueryParams = useMemo(() => useQueryParams({ initialFilters, searchParams }), []) // создаем необходимый формат фильтров на основе полученных таксономий с бека и отмечаем то что выбрано в url при открытии сайта(если пусто, то будет просто пустая структура)
  const { filters, toggleFilter } = useFilter(QueryParams) // используем созданный формат выше в качестве изначального состояния

  const [isFirstRender, setIsFirstRender] = useState(true) // при первом рендере мы не можем обновить url, так как это сотрет стартовый url

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false)
      return
    }

    const queryString = qs.stringify(filters, { arrayFormat: "comma" })
    window.history.pushState(null, "", `${pathname}?${queryString}`)
    dispatch(mangaSlice.actions.setFilters(filters))
    dispatch(mangaSlice.actions.setCurrentPage(1))
  }, [filters])

  useEffect(() => {
    return () => {
      dispatch(mangaSlice.actions.setFilters({}))
      dispatch(mangaSlice.actions.setCurrentPage(1))
      dispatch(mangaSlice.actions.setStateHamburger(false))
    }
  }, [])

  return { filters, toggleFilter }
}
