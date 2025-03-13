import localFont from "next/font/local"

export const nunito = localFont({
  src: [
    {
      path: "../../public/fonts/Nunito-ExtraLight.woff2", 
      weight: "200",
    },
    {
      path: "../../public/fonts/Nunito-Light.woff2", 
      weight: "300",
    },
    {
      path: "../../public/fonts/Nunito-Regular.woff2", 
      weight: "400",
    },
    {
      path: "../../public/fonts/Nunito-Medium.woff2", 
      weight: "500",
    },
    {
      path: "../../public/fonts/Nunito-SemiBold.woff2", 
      weight: "600",
    },
    {
      path: "../../public/fonts/Nunito-Bold.woff2", 
      weight: "700",
    },
    {
      path: "../../public/fonts/Nunito-ExtraBold.woff2", 
      weight: "800",
    },
    {
      path: "../../public/fonts/Nunito-Black.woff2", 
      weight: "900",
    }

  ],
  variable: "--font-nunito",
})