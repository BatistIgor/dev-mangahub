import { cn } from "@/lib/utils"
import { Star } from "lucide-react"
import React from "react"

interface Props {
  className?: string
  rating_user: boolean
}

export const Stars: React.FC<Props> = ({ className, rating_user }) => {
  const svgElement = (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13 4.96659L9.74922 8.29534L10.5186 13L6.49841 10.7786L2.48144 13L3.25078 8.29534L0 4.96659L4.48994 4.28028L6.49841 0L8.51006 4.28028L13 4.96659Z"
        fill="#FFD248"
      />
    </svg>
  )

  return (
    <div className={cn("", className)}>
      {rating_user ? (
        <div>
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, index) => (
              <div key={index}>{svgElement}</div>
            ))}
          </div>
          <p className="text-[12px] text-input text-center sm-max:text-start">2 голосов</p>
        </div>
      ) : (
        <div>
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, index) => (
              <div key={index}>{svgElement}</div>
            ))}
          </div>
          <p className="text-[12px] text-input text-center sm-max:text-start">2 голосов</p>
        </div>
      )}
    </div>
  )
}
