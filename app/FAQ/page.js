import React from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What is Hemophilia?",
      answer:
        "Hemophilia is a rare bleeding disorder where the blood doesn't clot properly due to a lack of clotting factors.",
    },
    {
      question: "What are the types of Hemophilia?",
      answer:
        "There are two main types: Hemophilia A (deficiency of factor VIII) and Hemophilia B (deficiency of factor IX).",
    },
    {
      question: "How is Hemophilia treated?",
      answer:
        "Treatment involves replacement therapy where the missing clotting factor is infused into the bloodstream.",
    },
    {
      question: "What is Von Willebrand Disease (VWD)?",
      answer:
        "VWD is the most common inherited bleeding disorder caused by a deficiency or dysfunction of von Willebrand factor, a protein that helps blood clot.",
    },
    {
      question: "Can Hemophilia be cured?",
      answer:
        "Currently, there is no complete cure for Hemophilia, but advanced treatments can help manage the condition effectively.",
    },
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg md:text-xl">
            Find answers to the most commonly asked questions about Hemophilia and bleeding disorders.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">FAQs</h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-6 border-b pb-4">
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-lg text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
