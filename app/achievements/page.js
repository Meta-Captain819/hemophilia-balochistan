import React from "react";

const PatientStories = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Patient Stories</h1>
          <p className="text-lg md:text-xl">
            Inspiring stories and testimonials from patients and families who have benefited from our efforts.
          </p>
        </div>
      </section>

      {/* Stories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Stories of Hope</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Haris's Journey to Recovery</h3>
              <p>
                Muhammad Haris, a 20-year-old boy diagnosed with Hemophilia A, found hope through timely support and treatment provided by our society.He was also diagnosed whith Inhabitor which leads to some major troubles in his life but now he is getting treatment of Emicizumab. Today, he leads a normal life, pursuing his studies and playing sports with his friends.
              </p>
            </div>
            <div className="bg-gray-100 shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Bushra's Story</h3>
              <p>
                Bushra, a young girl with Von Willebrand Disease, overcame her challenges with the dedicated care and guidance of our team. Her family expresses immense gratitude for the improved quality of life she now enjoys.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Impact</h2>
          <p className="text-lg md:text-xl mb-6">Together, we have made a significant difference:</p>
          <p className="text-4xl font-bold text-red-600">100+ families supported</p>
        </div>
      </section>

      {/* Patient Registry Table */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Patient Registry</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-100 shadow-md rounded-lg">
              <thead>
                <tr className="bg-red-600 text-white">
                  <th className="py-3 px-4">Disorder Category</th>
                  <th className="py-3 px-4">Total Patients</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-4 text-center">Hemophilia A</td>
                  <td className="py-3 px-4 text-center">163</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 text-center">Hemophilia B</td>
                  <td className="py-3 px-4 text-center">15</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 text-center">VWD + FVIII</td>
                  <td className="py-3 px-4 text-center">16</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 text-center">Von Willebrand Disease</td>
                  <td className="py-3 px-4 text-center">6</td>
                </tr>
              </tbody>
            </table>
            <p className="text-black text-xl mt-5">Total registry of patients: <span className="font-bold">200+</span></p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow-md rounded-lg p-6">
              <p className="italic">
                "We are forever grateful to the Hemophilia Welfare Society Balochistan for giving our child a chance at a normal life. Their support has been life-changing."
              </p>
              <p className="mt-4 font-semibold">- A grateful parent</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <p className="italic">
                "Thanks to the society, I can now pursue my dreams without fear. Their care and guidance have made all the difference."
              </p>
              <p className="mt-4 font-semibold">- A recovered patient</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PatientStories;
