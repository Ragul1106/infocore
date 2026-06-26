const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen px-6 md:px-16 py-14">
      
      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-900">
          Contact InfiCore Technologies
        </h1>
        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          Have an idea, project, or collaboration in mind? Connect with us and
          let’s build innovative engineering solutions together.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        
        {/* Left Contact Info */}
        <div className="bg-white shadow-xl rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-8">
            Get in Touch
          </h2>

          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="font-semibold text-lg">Office Address</h3>
              <p>
                InfiCore Technologies Pvt Ltd <br />
                Coimbatore, Tamil Nadu <br />
                India - 641001
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Phone</h3>
              <p>+91 97897 38080</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Email</h3>
              <p>contact.inficoretechnologies@gmail.com</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Website</h3>
              <a
                href="https://www.inficoretechnologies.com"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline"
              >
                www.inficoretechnologies.com
              </a>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Working Hours</h3>
              <p>Monday - Saturday : 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        {/* Right Contact Form */}
        <div className="bg-white shadow-xl rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-8">
            Send us a Message
          </h2>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600"
            />

            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600"
            ></textarea>

            <button
              type="submit"
              className="bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>

      {/* Bottom CTA */}
      <div className="mt-16 text-center bg-blue-900 text-white p-10 rounded-2xl">
        <h2 className="text-2xl md:text-3xl font-bold">
          Let’s Build the Future Together
        </h2>
        <p className="mt-4 text-lg">
          Empowering innovation through Embedded Systems, IoT, AI, and Product
          Engineering.
        </p>
      </div>

    </div>
  );
};

export default Contact;