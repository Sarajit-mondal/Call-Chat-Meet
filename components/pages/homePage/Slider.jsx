"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

function Slider() {
  const [activeSlide, setActiveSlide] = useState(0);

  // slider image
  const slides = [
    {
      text: "Get a Link You can share",
      description:
        "Click new meeting to create a new meeting and share the link",
      img: "https://i.ibb.co.com/SfpWJdQ/images.jpg", // Replace with actual image source
    },
    {
      text: "Connect with anyone",
      description:
        "Invite your team members to join the meeting via a shared link.",
      img: "https://i.ibb.co.com/ynh16GR/memory.png", // Replace with actual image source
    },
    {
      text: "Connect with anyone",
      description:
        "Invite your team members to join the meeting via a shared link.",
      img: "https://i.ibb.co.com/SfpWJdQ/images.jpg", // Replace with actual image source
    },
  ];
  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div>
      <div className="flex-1 h-[450px] max-w-full md:max-w-[620px] pb-12 lg:max-w-[650px] lg:ml-8">
        <div className="bg-[#d9d9d9] p-6 rounded-lg shadow-lg h-full flex flex-col justify-center space-y-4">
          <Image
            width={208}
            height={208}
            src={slides[activeSlide].img}
            alt={slides[activeSlide].text}
            className="w-52 h-52  rounded-full mx-auto"
          />
          <p className="mt-4 text-center text-gray-600">
            {slides[activeSlide].text}
          </p>
          <p className="mt-2 text-center text-sm text-gray-500">
            {slides[activeSlide].description}
          </p>
        </div>
        <div className="flex justify-between mt-4">
          <button
            onClick={() =>
              setActiveSlide((activeSlide - 1 + slides.length) % slides.length)
            }
            className="text-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => setActiveSlide((activeSlide + 1) % slides.length)}
            className="text-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slider;
