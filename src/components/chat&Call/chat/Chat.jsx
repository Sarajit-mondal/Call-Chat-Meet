"use client";

import { useState } from "react";

function Chat() {
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendClick = (event) => {
    event.preventDefault(); // Prevent default form submission
    console.log("Message sent:", message);
    // Clear the input field
    setMessage("");
  };

  return (
    <div className="flex items-center space-x-2 p-4 rounded-lg shadow">
      <input
        type="text"
        value={message}
        onChange={handleInputChange}
        className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Type your message..."
      />
      <button
        type="submit"
        onClick={handleSendClick}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Send
      </button>
    </div>
  );
}

export default Chat;
