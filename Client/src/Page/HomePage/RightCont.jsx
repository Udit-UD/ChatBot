import React, { useEffect, useState } from 'react'
import { MessageBox } from '../../Components/MessageBox';
import { IoAttach, IoMicOutline } from "react-icons/io5";
import { IoMdSend } from "react-icons/io";
import { useParams } from 'react-router-dom';

export const RightCont = () => {
  const [prompt, setPrompt] = useState("");
  const {id} = useParams();

  const [messages, setMessages] = useState([]);
  const fetchConversation = async() => {
    try{
      const response = await fetch(`http://localhost:3000/prompt/${id}`, {
        method:"GET", 
      });
      const data = await response.json();
      setMessages(data.history.map(item => ({
        sender: item.sender,
        text: item.text,
      })));

    }
    catch(e){
      console.log(e);
    }
  }
  const handleSend = async() => {
    try{
      setPrompt("");
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: prompt,
          sender: "user",
        },
      ]);
      const res = await fetch(`http://localhost:3000/prompt/${id}`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify({ message: prompt})
      });
      const data = await res.json();
      if(res.ok){
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            text: data,
            sender: "assistant",
          },
        ]);
      }
      else{
        console.error(error);
      }

    }
    catch(e){
      console.log(e);
    }
  }



  useEffect(()=>{
    fetchConversation();
  }, []);

  return (
    <div className='relative w-3/4 h-[91vh] bg-main-bg pt-10 px-12 pb-8'>
      <div className='overflow-y-auto h-[75vh]'>

      { messages.length !== 1 ? 
        messages.map((message, index) => (
          <MessageBox key={index} text={message.text} isAssistant={message.sender === "assistant"} />
        )) : 
        <div className='flex justify-center items-center font-bold text-2xl text-gray-100 h-[70vh]'>
          Start Chatting...
        </div>

      }
      </div>
  
      <div className="w-full p-2 border-2 border-gray-500 flex rounded-xl text-gray-50 justify-between items-center">
        <div className="flex gap-2 w-[90%]">
          <IoAttach fontSize={"1.75rem"}/>
          <input type="text" placeholder='Send a message' 
            className='w-full outline-none bg-transparent' 
            value={prompt} 
            onChange={(e) => {setPrompt(e.target.value)}} 
            onKeyDown={(e) => {e.key==="Enter" && handleSend()}}
            />

        </div>

        <div className='flex gap-4'>
          <IoMicOutline  cursor={"pointer"} fontSize={"1.5rem"}/>
          <IoMdSend cursor={"pointer"} onClick={handleSend} color='aqua' fontSize={"1.5rem"}/>
        </div>

      </div>
    </div>
  )
}
