import { Container } from "@/components/shared/container"
import { Login } from "@/components/shared/login"
import { Logo } from "@/components/shared/logo"
import { Search } from "@/components/shared/search"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"
import React from "react"

import { Hamburger } from "./hamburger"

interface Props {
  className?: string
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border-b border-border bg-card py-2 sm-max:py-0", className)}>
      <Container className="flex items-center justify-between sm-max:flex-col sm-max:p-0">
        <div className="relative mr-5 sm-max:mr-0 sm-max:flex sm-max:w-full sm-max:justify-center sm-max:py-2">
          {/* Псевдоэлемент для размытого фона */}
          <div className="absolute inset-0 z-0 bg-[url('/img/bg-header.jpg')] bg-cover bg-center before:absolute before:inset-0 before:bg-black/20 before:backdrop-blur-sm"></div>

          {/* Контент поверх размытого фона */}
          <div className="relative z-10 sm-max:rounded-lg sm-max:bg-white/50 ">
            <Logo />
          </div>
        </div>
        <div className="flex w-full items-center justify-end gap-7 sm-max:justify-between sm-max:px-3 lg-max:gap-4 sm-max:py-2 sm-max:border-t sm-max:border-border">
          <Search />
          <Login className="" />
        </div>
      </Container>
    </header>
  )
}
