// "use client";

// import { useSocket } from "../../../hooks/useSocket";
// import { useState } from "react";

// function Chat() {
//   const { socket, message } = useSocket();
//   const [InputMessage, setInputMessage] = useState("");

//   const handleInputChange = (event) => {
//     setInputMessage(event.target.value);
//   };

//   const handleSendClick = (event) => {
//     event.preventDefault(); // Prevent default form submission
//     console.log("Message sent:", InputMessage);
//     if (socket) {
//       socket.emit("message", InputMessage); // Send the message to the server
//       setInputMessage(""); // Clear the input field
//     }
//   };

//   return (
//     <div className="flex items-center space-x-2 p-4 rounded-lg shadow">
//       <input
//         type="text"
//         value={InputMessage}
//         onChange={handleInputChange}
//         className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//         placeholder="Type your message..."
//       />
//       <button
//         type="submit"
//         onClick={handleSendClick}
//         className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//       >
//         Send
//       </button>
//     </div>
//   );
// }

// export default Chat;

"use client";

import { useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000"); // Connect to your Socket.IO server

const Chat = () => {
  useEffect(() => {
    // When the component mounts, set up the connection

    socket.on("connect", () => {
      console.log("Connected to Socket.IO server");
    });

    socket.on("message", (message) => {
      console.log("Message from server:", message);
    });

    // Clean up when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    socket.emit("hi");
  };

  return (
    <div>
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
};

export default Chat;
