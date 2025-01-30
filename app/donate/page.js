import React from "react";

const Donate = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Donate</h1>
          <p className="text-lg md:text-xl">
            Your generosity makes a real difference in the lives of those living with hemophilia and other blood disorders.
          </p>
        </div>
      </section>

      {/* Why Donate Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Your Donation Matters</h2>
          <p className="text-lg mb-6">
            Hemophilia Welfare Society Balochistan relies on the support of individuals like you to provide critical care,
            treatment, and resources to patients and families in need. Every contribution helps us achieve our mission of
            improving lives and spreading awareness about blood disorders.
          </p>
        </div>
      </section>

      {/* Bank Details Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">How to Donate</h2>
          <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Bank Account Details</h3>
            <p className="mb-4">
              Please use the following bank details to make a donation. Your support is greatly appreciated.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="mb-2 font-semibold">Account Name: Hemophilia Welfare Society Balochistan</p>
              <p className="mb-2 font-semibold">Account Number: 0830010008186</p>
              <p className="mb-2 font-semibold">Bank Name: NRSP Bank</p>
              <p className="mb-2 font-semibold">Branch: Quetta</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Make an Impact</h2>
          <p className="text-lg mb-6">
            Your donation helps us:
          </p>
          <ul className="list-disc list-inside mb-6">
            <li className="mb-2">Provide life-saving treatment for patients with hemophilia and other blood disorders.</li>
            <li className="mb-2">Support families in managing the financial burden of treatment.</li>
            <li>Spread awareness and educate the public about hemophilia.</li>
          </ul>
          <p className="text-lg">
            Together, we can make a lasting difference. Thank you for your generosity and support.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Donate;
