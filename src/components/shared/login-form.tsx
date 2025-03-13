"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAppDispatch } from "@/hooks/useStore"
import { useLoginMutation } from "@/services/authApi"
import { setCredentials } from "@/store/authSlice"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState } from "react"
import { useRouter } from "next/navigation"

const LoginFormSchema = z.object({
  email: z
    .string()
    .email({ message: "Введите действительный адрес электронной почты." })
    .min(1, { message: "Необходимо указать адрес электронной почты." }),
  password: z
    .string()
    .min(6, { message: "Пароль должен быть не менее шести символов." })
    .min(1, { message: "Необходимо ввести пароль." }),
})

type LoginFormInputs = z.infer<typeof LoginFormSchema>

export function LoginForm() {
  const dispatch = useAppDispatch()
  const [login, { isLoading }] = useLoginMutation()
  const router = useRouter()
  const [errMsg, setErrMsg] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(LoginFormSchema),
  })

  // Обработчик отправки формы
  const onSubmit = async (data: LoginFormInputs) => {
    try {
      const userData = await login({ username: data.email, password: data.password }).unwrap()
      console.log(userData.access)
      dispatch(setCredentials({ accessToken: userData.access }))
      router.push("/")
    } catch (err: any) {
      if (!err?.originalStatus) {
        setErrMsg("Ошибка сервера")
      } else if (err.originalStatus === 400) {
        setErrMsg("Отсутствует имя пользователя или пароль")
      } else if (err.originalStatus === 401) {
        setErrMsg("Неверные учетные данные")
      } else {
        setErrMsg("Ошибка входа")
      }
    }
  }

  return (
    <Card className="mx-auto max-w-sm bg-search font-normal">
      <CardHeader>
        <CardTitle className="text-2xl text-white">Вход</CardTitle>
        <CardDescription className="text-white">
          Введите свой электронный адрес ниже, чтобы войти в свой аккаунт
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-4">
          <div className="relative mb-[10px] grid gap-2">
            <Label htmlFor="email" className="text-white">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              className={`border border-solid bg-white ${errors.email ? "border-redColor" : ""}`}
              {...register("email")}
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
          </div>

          <div className="relative mb-[10px] grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password" className="text-white">Пароль</Label>
              <Link href="/forgot-password" className="ml-auto inline-block text-sm text-white underline">
                Забыли пароль?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              className={`border border-solid bg-white ${errors.password ? "border-redColor" : ""}`}
              {...register("password")}
            />
            {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
          </div>

          {errMsg && <p className="text-sm text-red-500">{errMsg}</p>}

          <Button className="text-backgroundColor w-full font-bold" type="submit" disabled={isLoading}>
            {isLoading ? "Вход..." : "Войти"}
          </Button>

          <Button className="text-backgroundColor w-full bg-white font-bold hover:bg-white/90">
            Войти с помощью Google
          </Button>
        </form>

        <div className="mt-4 text-center text-sm text-white">
          Нет учетной записи?{" "}
          <Link href="/sign-up" className="underline">
            Зарегистрироваться
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

export default LoginForm