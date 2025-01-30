import React from "react";
import Image from "next/image";

const Services = () => {
  const services = [
    {
      title: "Factor VIII Replacement Therapy",
      description:
        "Factor VIII replacement therapy is essential for individuals with Hemophilia A. This treatment helps prevent and control bleeding by providing the missing clotting factor in the blood.",
      image: "https://www.rarediseaseadvisor.com/wp-content/uploads/sites/25/2022/03/eloctate_609375.png",
    },
    {
      title: "Factor VII Replacement Therapy",
      description:
        "Factor VII replacement therapy is crucial for patients with Factor VII deficiency. It helps manage bleeding disorders by restoring the ability to form clots effectively.",
      image: "https://www.aryogen.com/wp/wp-content/uploads/2023/05/aryoseven-eniranbio-1024x1024.png",
    },
    {
      title: "Factor IX Replacement Therapy",
      description:
        "Factor IX replacement therapy is crucial for patients with Factor VII deficiency. It helps manage bleeding disorders by restoring the ability to form clots effectively.",
      image: "https://www.rossix.com/wp-content/uploads/2020/04/rox_factor_ix_200505-1600x1061.jpg",
    },
    {
      title: "Von Willebrand Disease (VWD) Treatment",
      description:
        "Treatment for Von Willebrand Disease focuses on increasing levels of the Von Willebrand factor and Factor VIII in the blood, ensuring proper clotting and reducing bleeding episodes.",
      image: "https://avindarou.ir/wp-content/uploads/2023/02/Haemate-2.jpg",
    },
    {
      title: "Emicizumab Hemlibra",
      description:
        "Hemlibra (emicizumab) is a prophylactic treatment for hemophilia A, designed to mimic the action of factor VIII and promote blood clotting.",
      image: "https://5.imimg.com/data5/SELLER/Default/2023/10/357031620/FP/BS/WS/196102466/hemlibra-emicizumab-60mg-500x500.jpeg",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-red-600 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
            Our Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl">
            Dedicated to providing advanced treatments and comprehensive care
            for bleeding disorders.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center mb-16 gap-6 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  {service.title}
                </h2>
                <p className="text-base sm:text-lg text-gray-700">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-100 py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Need Assistance?
          </h2>
          <p className="text-base sm:text-lg mb-8">
            Contact us today to learn more about our services and how we can
            support you or your loved ones.
          </p>
          <a
            href="/contact"
            className="inline-block bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
