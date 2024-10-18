"use client"

import { SignUp } from "@clerk/nextjs"
import { dark } from "@clerk/themes"

export default function SignUpPage() {
  return (
    <div className="w-screen h-screen flex bg-dark-gray text-dark-primary-text p-5">
      <div className="flex-1 flex justify-center items-center bg-dark-light-gray">
        <SignUp appearance={{ baseTheme: dark }} />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center">
        <h1 className="text-7xl font-bold">Welcome to,</h1>
        <h1 className="text-7xl font-bold">Bozcord</h1>
      </div>
    </div>
  )
}
