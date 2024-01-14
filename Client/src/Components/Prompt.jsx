import React from 'react'
import { BsChatLeft } from "react-icons/bs";


export const Prompt = ({Text = "", active=false}) => {
  return (
    <div className={`rounded-3xl flex items-center gap-4 cursor-pointer text-xs px-6 text-gray-400 bg-slate-800 p-3 w-full ${active ? "border-2 border-green-700": ""}`}>
        <BsChatLeft fontSize={"1.0rem"} color='white'/> {Text}
    </div>
  )
}
