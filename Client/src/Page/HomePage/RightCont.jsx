import React, { useState } from 'react'
import { MessageBox } from '../../Components/MessageBox';
import { IoAttach, IoMicOutline } from "react-icons/io5";
import { IoMdSend } from "react-icons/io";
import { sendMsgToOpenAI } from '../../openai';

export const RightCont = () => {
  const [prompt, setPrompt] = useState("");
  const handleSend = async() => {
    const res = await sendMsgToOpenAI(prompt);
    console.log(res);
  }

  return (
    <div className='relative w-3/4 h-[91vh] bg-main-bg pt-10 px-12 pb-8'>
      <div className='overflow-y-auto h-[75vh]'>
      <MessageBox text="
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sequi deleniti itaque alias quos repellendus minima similique et tempore veniam eligendi, enim error magni, ex laborum dolor provident excepturi quidem harum libero.
      " time="2:03PM, 15Nov" right/>
      <MessageBox text="
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sequi deleniti itaque alias quos repellendus minima similique et tempore veniam eligendi, enim error magni, ex laborum dolor provident excepturi quidem harum libero.
      " time="2:03PM, 15Nov" />
      
      <MessageBox text="
      Lorem ipsum dolor sit amet. 
      " time="2:03PM, 15Nov" right/>
      </div>
  
      <div className="w-full p-2 border-2 border-gray-500 flex rounded-xl text-gray-50 justify-between items-center">
        <div className="flex gap-2">
          <IoAttach fontSize={"1.75rem"}/>
          <input type="text" placeholder='Send a message' 
            className='outline-none w-4/5 bg-transparent' 
            value={prompt} 
            onChange={(e) => {setPrompt(e.target.value)}} />
        </div>

        <div className='flex gap-4'>
          <IoMicOutline  cursor={"pointer"} fontSize={"1.5rem"}/>
          <IoMdSend cursor={"pointer"} onClick={handleSend} color='aqua' fontSize={"1.5rem"}/>
        </div>

      </div>
    </div>
  )
}
