"use client"

export default function RoomsPanel() {
  return (
    <div className="w-[350px] h-full flex space-x-[10px] overflow-y-scroll no-scrollbar">
      <div className="w-[100px] h-full flex flex-col justify-between bg-dark-dark-gray rounded-tl-xl">
        <div className="w-full h-full rounded-tl-xl p-3 pt-0 mt-3 space-y-2 overflow-y-scroll no-scrollbar">
          {/* TODO: Display rooms. */}
        </div>
        <div className="w-full h-fit flex flex-col-reverse p-3 mt-2">
          {/* TODO: Join room button. */}
          <button className="w-[76px] h-[76px] bg-dark-light-gray rounded-lg"></button>
        </div>
      </div>
      <div className="w-[240px] h-full bg-dark-dark-gray rounded-tr-xl">
      </div>
    </div>
  )
}
