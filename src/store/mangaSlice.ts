import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { Filters } from "@/entities/filtersType"

interface MangaState {
  filters: Filters | undefined
  totalPage: number | undefined
  search: string | undefined
  currentPage: number | undefined
  stateHamburger: boolean
}

const initialState: MangaState = {
  filters: undefined,
  totalPage: undefined,
  search: undefined,
  currentPage: undefined,
  stateHamburger: false
}

export const mangaSlice = createSlice({
  name: "manga",
  initialState,
  reducers: {
    setTotalPage: (state, action: PayloadAction<number>) => {
      state.totalPage = action.payload
    },
    setStateHamburger: (state, action: PayloadAction<boolean>) => {
      state.stateHamburger = action.payload
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
    setFilters: (state, action: PayloadAction<Filters>) => {
      state.filters = action.payload
    },
  },
})

export const { setTotalPage, setCurrentPage, setFilters, setStateHamburger } = mangaSlice.actions

export default mangaSlice.reducer
