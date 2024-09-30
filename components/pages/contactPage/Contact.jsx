const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r0 p-6">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Get In Touch
        </h1>
        <p className="text-center text-lg text-gray-600 mb-8">
          We’d love to hear from you! Whether you have a question, feedback, or
          just want to say hello, feel free to reach out.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Contact Info
            </h2>
            <p className="text-lg text-gray-600">
              For any inquiries, please use the form or reach us directly
              through the contact details below:
            </p>
            <div className="text-lg text-gray-600">
              <p>
                <span className="font-semibold">Email:</span>{" "}
                support@callchatmeet.com
              </p>
              <p>
                <span className="font-semibold">Phone:</span> +123 456 7890
              </p>
              <p>
                <span className="font-semibold">Address:</span> 123 CallChatMeet
                Street, Dhaka, Bangladesh
              </p>
            </div>
          </div>

          {/* Contact Form Section */}
          <form className="space-y-6">
            <div>
              <label
                className="block text-lg font-medium text-gray-800 mb-1"
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                className="block text-lg font-medium text-gray-800 mb-1"
                htmlFor="email"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                placeholder="youremail@example.com"
              />
            </div>
            <div>
              <label
                className="block text-lg font-medium text-gray-800 mb-1"
                htmlFor="message"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                placeholder="Write your message..."
              ></textarea>
            </div>
            <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-500 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
