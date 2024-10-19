"use client"

import RoomsPanel from "@/components/RoomsPanel"
import UserPanel from "@/components/UserPanel"
import ChatView from "@/components/ChannelView"
import UsersPanel from "@/components/UsersPanel"

import { io, Socket } from "socket.io-client"
import { useState, useEffect } from "react"

export default function App() {
  const [clientSocket, setClientSocket] = useState<Socket>()

  useEffect(() => {
    return () => {
      // Socket Initialization
      const socket = io("http://localhost:8000")
      setClientSocket(socket)
    }
  }, [])

  useEffect(() => {
    return () => {
      // Socket Events
    }
  }, [clientSocket])

  return (
    <div className="w-screen h-screen flex space-x-[10px] bg-dark-gray text-dark-primary-text p-[10px]">
      <div className="w-[350px] h-full flex flex-col space-y-[10px]">
        <RoomsPanel />
        <UserPanel />
      </div>
      <ChatView />
      <UsersPanel />
    </div>
  )
}
