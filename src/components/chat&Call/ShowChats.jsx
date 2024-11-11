"use client";
import { useEffect, useState } from "react";
import Chat from "../../components/chat&Call/chat/Chat";
import { useSocket } from "../../hooks/useSocket";

function ShowChats() {
  const { socket, message } = useSocket()
 const [messages, setMessages] = useState([]); // Store all messages


  useEffect(()=>{
    setMessages((pre)=> [...pre,message])
  },[message])

  return (
    <div>
      <div className="w-full min-h-[calc(100vh-250px)]">
        <div>
          {/* Your chats */}
          <div className="bg-red-500 w-full max-h-[70vh] overflow-y-scroll scrollbar-thin">
            {/* Render each message as a separate <p> element */}
            {
              messages.map((mess)=><p>{mess}</p>)
            }
          </div>
        </div>
      </div>
      {/* Chat input and send button */}
      <Chat/>
    </div>
  );
}

export default ShowChats;
