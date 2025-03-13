"use client"

import { useAppSelector } from "@/hooks/useStore"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { useDispatch } from "react-redux"
import { setCredentials, logOut } from "@/store/authSlice"

interface Props {
  className?: string
}

export const Login: React.FC<Props> = ({ className }) => {
  const dispatch = useDispatch()
  const token = useAppSelector(state => state.auth.token)

  const handleLogout = () => {
    dispatch(logOut()) // Очищаем токен
  }

  return (
    <Link 
      href={token ? "/" : "/login"} 
      onClick={token ? handleLogout : undefined} 
      className={cn("flex min-w-[80px] items-center gap-3", className)}
    >
      <Image src={"/img/user.svg"} alt="user" width={17} height={17} />
      <p className="font-semibold">{token ? "Выход" : "Вход"}</p>
    </Link>
  )
}
