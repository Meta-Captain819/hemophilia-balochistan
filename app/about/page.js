import React from "react";

import Image from "next/image";

const About = () => {
  return (
    <div className="bg-white text-gray-900">
     

      {/* Hero Section */}
      <section className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-xl">
            Learn more about the Hemophilia Welfare Society Balochistan and our dedication to improving lives.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg mb-4">
              Our mission is to enhance the quality of life for individuals living with Hemophilia in Balochistan. We
              strive to provide medical support, education, and a sense of community to those affected by this
              condition.
            </p>
            <p className="text-lg">
              We believe that everyone deserves access to the care and support they need to lead fulfilling lives.
            </p>
          </div>
          <div>
            <Image
              src="/mission.webp"
              alt="Our Mission"
              width={500}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-lg mb-8">
            A world where individuals with Hemophilia live without limitations, supported by comprehensive medical
            care and a strong, informed community.
          </p>
          {/* <Image
            src={"/Logo.png"}
            alt="Our Vision"
            width={800}
            height={400}
            className="rounded-2xl mx-auto shadow-lg"
          /> */}
        </div>
      </section>

      <div className="border-t border-red-600 p-1"></div>

      {/* History Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Our History</h2>
          <p className="text-lg mb-4">
            Established in  early 2023, the Hemophilia Welfare Society Balochistan has grown into a vital resource for individuals
            and families affected by Hemophilia. From our humble beginnings to the present day, we have consistently
            worked towards making a difference in the lives of our community.
          </p>
          <p className="text-lg">
            Our journey is marked by countless stories of resilience, hope, and progress. We invite you to be part of our
            ongoing story.
          </p>
        </div>
      </section>

      
    </div>
  );
};

export default About;
