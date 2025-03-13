"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { useGetCommentsByMangaIdQuery } from "@/services/mangaApi"
import { CornerDownLeft, ThumbsDown, ThumbsUp } from "lucide-react"
import React from "react"

import timeAgo from "../hooks/useTimeAgo"

interface Props {
  className?: string
  mangaId: number
}

interface Comment {
  id: number
  user: string
  manga: number
  text: string
  parent: number | null
  replies: Comment[]
  created_at: string
}

const renderReplies = (replies: Comment[]) => {
  return replies.map((reply: Comment) => (
    <div key={reply.id} className="ml-5">
      {" "}
      {/* Добавляем маржин для отступа */}
      <div className="mb-2 w-full rounded-[5px] bg-card px-2 py-2">
        <div className="flex justify-between">
          <div className="mb-3 flex gap-2 font-normal">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p>{reply.user}</p>
              <p className="text-[12px] font-normal text-input">{timeAgo(reply.created_at)}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <ThumbsUp size={15} className="cursor-pointer transition-all hover:text-button" />
            <p className="text-[14px] font-light text-green-600">+2</p>
            <ThumbsDown size={15} className="cursor-pointer transition-all hover:text-button" />
          </div>
        </div>
        <p className="pl-4 text-[14px] font-light">{reply.text}</p>
        <div className="mt-2 flex justify-between">
          <div className="flex items-center gap-1">
            <div className="ml-3 flex cursor-pointer items-center gap-1 text-input">
              <CornerDownLeft size={12} />
              <p className="pr-[20px] text-[12px] font-light">Ответить</p>
            </div>
          </div>
          <p className="cursor-pointer pr-[20px] text-[12px] font-light text-input">Жалоба</p>
        </div>
      </div>
      {reply.replies && reply.replies.length > 0 && renderReplies(reply.replies)}
    </div>
  ))
}

export const Comments: React.FC<Props> = ({ className, mangaId }) => {
  const { data, error, isFetching } = useGetCommentsByMangaIdQuery(mangaId)

  if (error) return <p>Упс, ошибка загрузки комментариев</p>
  if (isFetching) return <p>Loading...</p>

  return (
    <div className={cn("", className)}>
      {data?.map((comment: Comment) => (
        <>
          <div className="mb-2 w-full rounded-[5px] bg-card px-2 py-2" key={comment.id}>
            <div className="flex justify-between">
              <div className="mb-3 flex gap-2 font-normal">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p>{comment.user}</p>
                  <p className="text-[12px] font-normal text-input">
                    {timeAgo(comment.created_at)}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <ThumbsUp size={15} className="cursor-pointer transition-all hover:text-button" />
                <p className="text-[14px] font-light text-green-600">+2</p>
                <ThumbsDown size={15} className="cursor-pointer transition-all hover:text-button" />
              </div>
            </div>
            <p className="pl-4 text-[14px] font-light">{comment.text}</p>
            <div className="mt-2 flex justify-between">
              <div className="flex items-center gap-1">
                <div className="ml-3 flex cursor-pointer items-center gap-1 text-input">
                  <CornerDownLeft size={12} />
                  <p className="pr-[20px] text-[12px] font-light">Ответить</p>
                </div>
              </div>
              <p className="cursor-pointer pr-[20px] text-[12px] font-light text-input">Жалоба</p>
            </div>
          </div>
          {comment.replies && comment.replies.length > 0 && renderReplies(comment.replies)}
        </>
      ))}
    </div>
  )
}
