import React from 'react';
import { IoIosAddCircleOutline } from "react-icons/io";
import { HiMiniArrowLeftOnRectangle } from "react-icons/hi2";
import { Prompt } from "../../Components/Prompt";

export const LeftCont = () => {
  return (
    <div className='w-1/4 h-[91vh] bg-main-bg border-r-2 border-gray-800 p-6'>
        <h1 className="text-3xl font-semibold text-white">
            Text Generator
        </h1>
        <div className="h-[65vh] mt-6 overflow-y-auto overflow-x-hidden flex flex-col gap-3">
            <Prompt Text="Impact of AI on User Experiences" active/>
            <Prompt Text="Voice User Interfaces (VUI)" />
            <Prompt Text="Data-Driven UX" />
            <Prompt Text="Chatbots and Conversational AI" />
            <Prompt Text="Visual Recognition in UX" />
            <Prompt Text="Ethical AI design" />
        </div>
        <div className='flex flex-col gap-2'>
            <div className='rounded-3xl flex items-center gap-2 text-xs px-4 text-green-500 border-2 border-green-700 p-2 w-full cursor-pointer'>
                <IoIosAddCircleOutline fontSize={"1.25rem"}/> New Chat
            </div>
            <div className='rounded-3xl flex items-center gap-2 px-4 text-xs text-red-500 border-red-500 border-2 p-2 w-full cursor-pointer'>
                <HiMiniArrowLeftOnRectangle fontSize={"1.25rem"}/> Clear Conversation
            </div>
        </div>
    </div>
  )
}
