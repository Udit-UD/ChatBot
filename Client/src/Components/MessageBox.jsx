import React from 'react'

export const MessageBox = ({text, time, right=false}) => {
  return (
    <div className='text-sm p-2 w-full min-h-12'>
        <p className={`text-xs text-gray-400 ${right ? "text-right" : "text-left"}`}>
            {time}
        </p>
        <div className={`w-full flex mt-2 ${right ? "justify-end": ""}`}>
            <div className=" bg-gray-800 max-w-[90%] font-sm text-gray-50 p-3 rounded-xl">
                {text}
            </div>
        </div>
    </div>
  )
}
