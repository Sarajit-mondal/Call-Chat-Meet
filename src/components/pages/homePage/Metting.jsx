"use client";
import { useState } from "react";

function Metting() {
  // meeting link
  const [meetingLink, setMeetingLink] = useState("");
  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row space-x-3">
        <button className="bg-blue-500 text-white p-2 md:py-2 md:px-4 rounded-lg hover:bg-blue-600 transition duration-300">
          New Meeting
        </button>

        <input
          onChange={(e) => setMeetingLink(e.target.value)}
          type="text"
          placeholder="Enter a Link"
          className="className='border border-gray-400 p-2 rounded-lg hover:bg-gray-200 transition duration-300'"
        />

        <button
          type="submit"
          className={`bg-blue-500 text-white py-2 px-4  rounded-lg  transition duration-300 block ${
            !meetingLink && "bg-gray-300"
          }`}
          disabled={!meetingLink}
        >
          Join
        </button>
      </div>
      <p className="mt-10 text-gray-500">
        Learn more about{" "}
        <a href="#" className="text-blue-500">
          Our team
        </a>
        .
      </p>
    </div>
  );
}

export default Metting;
