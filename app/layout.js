import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hemophilia Welfare Society Balochistan - (HWSB)",
  description: "Hemophilia Welfare Society Balochistan (HWSB) treatment of bleeding disorders, Factor VIII, Factor IX and VWD",
  keywords: "hemophilia, balochistan, quetta, hemophilia quetta,",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="sticky top-0">
        <Navbar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
