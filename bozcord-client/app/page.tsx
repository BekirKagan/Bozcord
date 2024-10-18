"use client"

import ChannelView from "@/components/ChannelView"
import RoomsPanel from "@/components/RoomsPanel"
import UsersPanel from "@/components/UsersPanel"

export default function App() {
  return (
    <div className="w-screen h-screen flex space-x-[10px] bg-dark-gray text-dark-primary-text p-[10px]">
      <div className="w-[350px] h-full flex flex-col space-y-[10px]">
        <RoomsPanel />
        <div className="w-[350px] h-[60px] bg-dark-dark-gray rounded-b-xl">
        </div>
      </div>
      <ChannelView />
      <UsersPanel />
    </div>
  )
}
