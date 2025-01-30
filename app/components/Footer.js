import React from "react";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    {/* Logo and Description */}
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <div className="flex  items-center gap-2">
                            <Image src={"/Logo.png"} alt="haemophilia logo" width={50} height={50}></Image>
                            <h2 className="text-2xl font-bold text-red-500">Hemophilia Welfare Society</h2>
                        </div>
                        <p className="text-sm mt-2">
                            Committed to improving the lives of individuals affected by Hemophilia through support, awareness, and care.
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-red-500" aria-label="Facebook">
                            <Facebook size={24} />
                        </a>
                        <a href="#" className="hover:text-red-500" aria-label="Twitter">
                            <Twitter size={24} />
                        </a>
                        <a href="#" className="hover:text-red-500" aria-label="Instagram">
                            <Instagram size={24} />
                        </a>
                        <a href="mailto:info@hemophilia-society.org" className="hover:text-red-500" aria-label="Email">
                            <Mail size={24} />
                        </a>
                    </div>
                </div>

                {/* Links Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-red-500">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="/" className="hover:text-red-500">Home</a></li>
                            <li><a href="/hemophilia" className="hover:text-red-500">About Hemophilia</a></li>
                            <li><a href="/achievements" className="hover:text-red-500">Achievements</a></li>
                            <li><a href="/donate" className="hover:text-red-500">Donate</a></li>
                            <li><a href="/treatment" className="hover:text-red-500">Services</a></li>
                            <li><a href="/about" className="hover:text-red-500">About Us</a></li>
                            <li><a href="/contact" className="hover:text-red-500">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-red-500">Support</h3>
                        <ul className="space-y-2">
                            <li><a href="/donate" className="hover:text-red-500">Donate</a></li>
                            <li><a href="/volunteer" className="hover:text-red-500">Volunteer</a></li>
                            <li><a href="/FAQ" className="hover:text-red-500">FAQs</a></li>
                        </ul>
                    </div>

                    <div className="space-y-1">
                        <h3 className="text-lg font-semibold mb-4 text-red-500">Contact Us</h3>
                        <p className="text-sm">Hemophilia Welfare Society Balochistan</p>
                        <p className="text-sm">BICHQ Quarry Road, Quetta, Balochistan</p>
                        <p className="text-sm">Email: haemophiliabalochistan@gmail.com</p>
                        <p className="text-sm">Phone: +92-3312430345</p>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-8 text-center border-t border-gray-700 pt-4">
                    <p className="text-sm">&copy; {new Date().getFullYear()} Hemophilia Welfare Society Balochistan. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
