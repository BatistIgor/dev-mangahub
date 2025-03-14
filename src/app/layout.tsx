import { Footer } from "@/components/shared/footer"
import { Header } from "@/components/shared/header"
import { AuthProvider } from "@/store/AuthProvider"
import { StoreProvider } from "@/store/storeProvider"
import { nunito } from "@/styles/fonts"
import "@/styles/globals.css"
import type { Metadata } from "next"
import { Toaster } from "sonner"

export const metadata: Metadata = {
  title: "Mangahab",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} antialiased`}>
        <StoreProvider>
          <AuthProvider>
            {children}
            <Toaster /> 
          </AuthProvider>
        </StoreProvider>
      </body>
    </html>
  )
}
