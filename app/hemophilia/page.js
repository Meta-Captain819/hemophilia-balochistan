import React from "react";

const HemophiliaInfo = () => {
    return (
        <div className="bg-white text-gray-900 min-h-screen">
            {/* Hero Section */}
            <section className="bg-red-600 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Understanding Hemophilia</h1>
                    <p className="text-lg md:text-xl">
                        Learn about hemophilia and other bleeding disorders, their causes, and treatments.
                    </p>
                </div>
            </section>

            {/* Hemophilia and Types Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center items-center gap-36  lg:flex-row flex-col">
                        <div className="lg:w-1/2 w-full text-wrap">
                            <h2 className="text-3xl font-bold mb-8">Hemophilia and Its Types</h2>
                            <p className="text-lg mb-6">
                            Hemophilia is a rare genetic disorder that impairs blood clotting, leading to prolonged bleeding. It's caused by mutations in genes coding for clotting factors, affecting mostly males.

                            </p>
                            <ul className="list-disc list-inside mb-6">
                                <li className="mb-2">
                                    <strong>Hemophilia A:</strong> Hemophilia A is the most common type, accounting for approximately 80% of cases. It's caused by a deficiency or mutation in the factor VIII (FVIII) gene, leading to prolonged bleeding, frequent nosebleeds, and joint pain.


                                </li>
                                <li>
                                    <strong>Hemophilia B:</strong> Hemophilia B is less common, accounting for approximately 20% of cases. It's caused by a deficiency or mutation in the factor IX (FIX) gene, leading to similar symptoms as Hemophilia A, including prolonged bleeding and joint pain.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <img
                                src="https://www.pei.de/SharedDocs/Bildergalerie/EN/world-haemophilia-day-2023/infographic1.png?__blob=poster&v=5"
                                alt="Hemophilia types"
                                width={450}
                                height={900}
                                className="rounded-lg shadow-md"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Factor VIII Section */}
            <section className="bg-gray-100 py-16">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center items-center gap-36 lg:flex-row flex-col">
                        <div>
                            <img
                                src="https://static.wixstatic.com/media/12bf07_f3d72cb9dcf941c5a8044d2aaad49169.jpg/v1/fill/w_552,h_286,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/12bf07_f3d72cb9dcf941c5a8044d2aaad49169.jpg"
                                alt="Factor VIII"
                                 width={450}
                                height={900}
                                className="rounded-lg shadow-md"
                            />
                        </div>
                        <div className="lg:w-1/2 w-full">
                            <h2 className="text-3xl font-bold mb-8">Factor VIII</h2>
                            <p className="text-lg mb-6">
                            Factor VIII (FVIII) is a protein essential for blood clotting, accelerating the activation of factor X to form thrombin, which transforms fibrinogen into fibrin, creating a blood clot. A deficiency or mutation in the FVIII gene leads to Hemophilia A, characterized by prolonged bleeding and increased risk of bleeding complications. Replacement therapy involves injecting recombinant or plasma-derived FVIII into the bloodstream to replace the missing or defective protein, restoring normal blood clotting and preventing bleeding episodes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Factor IX Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center items-center gap-36 lg:flex-row flex-col">
                        <div className="lg:w-1/2 w-full">
                    <h2 className="text-3xl font-bold mb-8">Factor IX</h2>
                            <p className="text-lg mb-6 ">
                            Factor IX (FIX) is a protein crucial for blood clotting, working in conjunction with factor VIII to activate factor X, which ultimately forms a blood clot. A deficiency or mutation in the FIX gene causes Hemophilia B (Christmas Disease), characterized by prolonged bleeding and increased risk of bleeding complications. Replacement therapy involves injecting recombinant or plasma-derived FIX into the bloodstream to replace the missing or defective protein, restoring normal blood clotting and preventing bleeding episodes.
                            </p>
                        </div>
                        <div>
                            <img
                                src="https://www.besthematologist.in/wp-content/uploads/2024/05/hemophilla-b.jpg"
                                alt="Factor IX"
                                 width={450}
                                height={900}
                                className="rounded-lg shadow-md"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* VWD Factor Section */}
            <section className="bg-gray-100 py-16">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center items-center gap-36 lg:flex-row flex-col">
                        <div>
                            <img
                                src="https://www.mdpi.com/applsci/applsci-11-06408/article_deploy/html/images/applsci-11-06408-g001.png"
                                alt="VWD Factor"
                                 width={450}
                                height={900}
                                className="rounded-lg shadow-md"
                            />
                        </div>
                        <div className="lg:w-1/2 w-full">
                    <h2 className="text-3xl font-bold mb-8">Von Willebrand Disease (VWD)</h2>
                            <p className="text-lg mb-6">
                            Von Willebrand Disease (VWD) is a bleeding disorder caused by a deficiency or mutation in the von Willebrand factor (VWF) protein, which plays a crucial role in blood clotting. VWF helps platelets stick together and to the injured blood vessel wall, and also carries factor VIII in the bloodstream. A deficiency or abnormality in VWF leads to VWD, characterized by easy bruising, frequent nosebleeds, and prolonged bleeding after injury or surgery. Treatment options include replacement therapy with VWF concentrates, desmopressin to stimulate VWF release, and medications to promote blood clotting.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HemophiliaInfo;
