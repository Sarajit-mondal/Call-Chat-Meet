const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-6">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          CallChatMeet
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-4">
          Welcome to{" "}
          <span className="font-semibold text-blue-600">CallChatMeet</span>, the
          ultimate platform designed to connect people seamlessly. Whether it’s
          for professional meetings, friendly chats, or important calls, our
          application provides all-in-one solutions for real-time communication.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mb-4">
          Our mission is to offer a space where users can easily call, chat, and
          meet online, no matter where they are. We focus on simplicity,
          reliability, and making the virtual experience as natural as possible.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mb-4">
          From personal conversations to professional discussions,{" "}
          <span className="font-semibold text-blue-600">CallChatMeet</span>{" "}
          brings you cutting-edge technology combined with user-friendly design.
          With features like video calls, group chats, and meeting scheduling,
          it’s easier than ever to stay connected.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Why Choose CallChatMeet?
        </h2>
        <ul className="list-disc list-inside text-lg text-gray-600 leading-relaxed mb-6">
          <li>Real-time calling and messaging with seamless transitions.</li>
          <li>
            Easy-to-use interface, perfect for both personal and professional
            use.
          </li>
          <li>
            Group chats and meeting rooms with full video and audio support.
          </li>
          <li>Customizable communication preferences to suit your needs.</li>
          <li>Fully responsive on all devices, from mobile to desktop.</li>
        </ul>
        <p className="text-lg text-gray-600 leading-relaxed mb-4">
          Join us today and revolutionize the way you communicate. With{" "}
          <span className="font-semibold text-blue-600">CallChatMeet</span>,
          staying connected has never been so easy.
        </p>
        <div className="text-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-500 transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
