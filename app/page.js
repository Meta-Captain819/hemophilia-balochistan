import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <div className="bg-white text-gray-900">

      {/* Hero Section */}
      <section className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hemophilia Welfare Society Balochistan
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Dedicated to raising awareness, providing support, and improving the quality of life for individuals with Hemophilia.
          </p>
          <a
            href="/achievements"
            className="bg-white text-red-600 py-2 px-6 rounded-full font-semibold hover:bg-red-100 transition"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 md:gap-x-80 gap-y-10 items-center">
          <div>
            <div>
            </div>

            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-lg mb-4">
              The Hemophilia Welfare Society Balochistan is a non-profit organization
              committed to helping individuals affected by Hemophilia. We provide
              medical support, counseling, and awareness programs to improve
              patient outcomes and foster a supportive community.
            </p>
            <a
              href="/about"
              className="bg-red-600 text-white py-2 px-6 rounded-full font-semibold hover:bg-red-700 transition"
            >
              Read More
            </a>
          </div>
          <div>
            <Image
              src="/Logo.png"
              alt="About Hemophilia"
              width={300}
              height={200}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4">Medical Support</h3>
              <p>
                Providing medical care, treatment options, and support for individuals affected by Hemophilia.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4">Awareness Programs</h3>
              <p>
                Conducting community outreach and education campaigns to raise awareness about Hemophilia.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4">Counseling</h3>
              <p>
                Offering emotional and psychological support for patients and their families.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-lg mb-8">
            Together, we can make a difference in the lives of individuals affected by Hemophilia.
          </p>
          <a
            href="/donate"
            className="bg-white text-red-600 py-2 px-6 rounded-full font-semibold hover:bg-red-100 transition"
          >
            Donate Now
          </a>
        </div>
      </section>

      
    </div>
  );
};

export default Home;
