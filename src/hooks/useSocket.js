import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const SOCKET_SERVER_URL = "http://localhost:5000"; // Your Socket.IO server URL

export const useSocket = () => {
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Connect to Socket.IO server
    const socketIo = io(SOCKET_SERVER_URL);

    // Set the socket instance
    setSocket(socketIo);

    // Listen for messages from the server
    socketIo.on("message", (data) => {
      console.log("Message from server:", data);
      setMessage(data); // Store the incoming message
    });

    // Cleanup when component unmounts
    return () => {
      socketIo.disconnect();
    };
  }, []);

  return { socket, message };
};
