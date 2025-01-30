import React from "react";

const Volunteer = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Join as a Volunteer</h1>
          <p className="text-lg md:text-xl">
            Support our mission by volunteering with Hemophilia Welfare Society Balochistan.
          </p>
        </div>
      </section>

      {/* Volunteer Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Become a Volunteer</h2>
          <form className="max-w-2xl mx-auto bg-gray-100 shadow-md rounded-lg p-8">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-semibold mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                Why do you want to volunteer?
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Tell us about your motivation..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Email</h3>
              <p>
                <a
                  href="mailto:info@hemophilia-society.org"
                  className="text-red-600 hover:underline"
                >
                  haemophiliabalochistan@gmail.com
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Phone</h3>
              <p>+92-3312430345</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Volunteer;
