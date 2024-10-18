import { ClerkProvider } from "@clerk/nextjs"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Bozcord",
  description: "A real-time chat application.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
