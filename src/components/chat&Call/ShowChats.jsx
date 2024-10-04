// pages/showChats.js or app/showChats/page.js
"use client";
import { useState } from "react";
import Chat from "../../components/chat&Call/chat/Chat";

function ShowChats() {
  const [message, setMessage] = useState("");
  console.log("show", message);

  const handleMessage = (data) => {
    setMessage(data);
  };
  return (
    <div>
      <div className="w-full min-h-[calc(100vh-250px)]">
        <div className="flex justify-between gap-2">
          {/* Your partner's chats */}
          <div className="bg-red-300 w-full">
            <p>{message}</p>
          </div>
          {/* Your chats */}
          <div className="bg-red-500 w-full">
            <p>{message}</p>
          </div>
        </div>
      </div>
      {/* Chat input and send button */}
      <Chat newMessage={handleMessage} />
    </div>
  );
}

export default ShowChats;
