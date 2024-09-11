import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/(ui)/Footer";
import Navbar from "@/components/(ui)/(header)/NavBar";

export const metadata: Metadata = {
  title: "کنکاش استوک",
  description: "اولین فروشگاه تعمیر و خرید هارد اکسترنال ایرانیان",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Navbar />
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow mb-24">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
