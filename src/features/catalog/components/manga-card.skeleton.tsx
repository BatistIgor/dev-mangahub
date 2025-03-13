import { Skeleton } from "@/components/ui/skeleton"

export function MangaCardSkeleton() {
  return (
    <div className="flex min-h-[257px] w-full max-w-[835px] space-x-4 bg-box p-6 sm-max:max-w-[345px] sm-max:flex-col sm-max:items-start sm-max:space-x-0 sm-max:mx-auto">
      <div className="flex flex-col items-center sm-max:w-full sm-max:flex-row sm-max:items-start">
        <Skeleton className="mb-2 h-[150px] w-[100px] rounded-none sm-max:mr-4 sm-max:min-w-[100px]" />
        <Skeleton className="mb-2 h-4 w-[100px] sm-max:hidden" />
        <Skeleton className="mb-1 h-4 w-[80px] sm-max:hidden" />
        <div className="mb-4 flex w-full flex-col justify-between sm:hidden">
          <div className="space-y-2 mb-4">
            <Skeleton className="h-4 w-[150px]" />
            <Skeleton className="h-4 w-[100px]" />
          </div>
          <div className="mb-4">
            <Skeleton className="h-4 w-[150px] mb-2" />
            <Skeleton className="h-4 w-[100px]" />
          </div>
          <Skeleton className="h-[36px] w-[114px]" />
        </div>
      </div>
      <div className="flex w-full flex-col">
        <div className="mb-4 flex w-full justify-between sm-max:hidden">
          <div className="space-y-2 ">
            <Skeleton className="h-4 w-[150px]" />
            <Skeleton className="h-4 w-[100px]" />
          </div>
          <Skeleton className="h-[36px] w-[114px]" />
        </div>
        <div>
          <Skeleton className="mb-3 h-4 h-[95px] w-full" />
          <div className="mb-2 flex">
            <Skeleton className="mr-2 h-4 w-[80px]" />
            <Skeleton className="mr-2 h-4 w-[50px]" />
            <Skeleton className="mr-2 h-4 w-[50px]" />
            <Skeleton className="mr-2 h-4 w-[50px]" />
          </div>
          <div className="flex">
            <Skeleton className="mr-2 h-4 w-[80px]" />
            <Skeleton className="mr-2 h-4 w-[50px]" />
          </div>
        </div>
      </div>
    </div>
  )
}
