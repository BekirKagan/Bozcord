"use client"

import { UserButton } from "@clerk/nextjs"
import { dark } from "@clerk/themes"

export default function UserPanel() {
  return (
    <div className="w-[350px] h-[60px] flex items-center bg-dark-dark-gray rounded-b-xl px-4">
      <UserButton appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: "#A20021",
          colorText: "#AAAAAA",
          colorTextOnPrimaryBackground: "#AAAAAA",
          colorTextSecondary: "#777E88",
          colorBackground: "#18191B",
          colorShimmer: "#A20021",
          borderRadius: "4px"
        },
      }} />
    </div>
  )
}
