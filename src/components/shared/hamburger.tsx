"use client"

import { cn } from "@/lib/utils"
import React, { useState } from "react"
import {useAppDispatch, useAppSelector} from "@/hooks/useStore"
import { mangaSlice } from "@/store/mangaSlice"

interface Props {
  className?: string
}

export const Hamburger = ({ className }: Props) => {
  const stateHamburger = useAppSelector(state => state.manga.stateHamburger)
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(mangaSlice.actions.setStateHamburger(!stateHamburger))
  }

  return (
    <button
      onClick={handleClick}
      className={cn("flex flex-col items-center justify-center", className)}
    >
      <span
        className={`block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out ${stateHamburger ? "translate-y-1 rotate-45" : "-translate-y-0.5"}`}
      ></span>
      <span
        className={`my-0.5 block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out ${stateHamburger ? "opacity-0" : "opacity-100"}`}
      ></span>
      <span
        className={`block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out ${stateHamburger ? "-translate-y-1 -rotate-45" : "translate-y-0.5"}`}
      ></span>
    </button>
  )
}
