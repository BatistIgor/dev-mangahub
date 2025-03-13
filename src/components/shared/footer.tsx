import { Container } from "@/components/shared/container"
import { cn } from "@/lib/utils"
import React from "react"
import { Logo } from "@/components/shared/logo"
import Image from "next/image"

interface Props {
  className?: string
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <footer className={cn("border-t border-border bg-card py-7", className)}>
      <Container className="flex justify-between">
        <div>
            <Logo />
        </div>
        <div className="flex flex-col gap-1 font-normal">
            <p className="">Разделы</p>
            <p className="text-input">правила сайта</p>
            <p className="text-input">DMCA</p>
            <p className="text-input">Copyright</p>
        </div>
        <div>
            <p className="mb-2" >Соц сети</p>
            <div className="grid grid-cols-2 gap-2">
                <Image src="/img/icon-youtube.svg" width={30} height={30} alt="youtube"/>
                <Image src="/img/icon-tg.svg" width={30} height={30} alt="telegram"/>
                <Image src="/img/icon-wk.svg" width={30} height={30} alt="wcontakte"/>
                <Image src="/img/icon-dc.svg" width={30} height={30} alt="discord"/>
            </div>
        </div>
      </Container>
    </footer>
  )
}
