"use client"

export default function ChannelView() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center space-y-[10px]">
      <div className="w-full h-full bg-dark-dark-gray rounded-t-xl">
      </div>
      <input maxLength={2000} placeholder="Message..." className="w-full h-[60px] bg-dark-dark-gray rounded-b-xl outline-none px-5 placeholder:text-dark-secondary-text"></input>
    </div>
  )
}
