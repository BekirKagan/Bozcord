"use client"

import { SignIn } from "@clerk/nextjs"
import { dark } from "@clerk/themes"

export default function SignUpPage() {
  return (
    <div className="w-screen h-screen flex bg-dark-gray text-dark-primary-text p-5">
      <div className="flex-1 flex justify-center items-center bg-dark-light-gray">
        <SignIn appearance={{ baseTheme: dark }} />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold">Welcome back to,</h1>
        <h1 className="text-6xl font-bold">Bozcord</h1>
      </div>
    </div>
  )
}
