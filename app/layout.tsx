import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/(ui)/Footer";
import Navbar from "@/components/(ui)/(header)/NavBar";
import { EdgeStoreProvider } from "@/lib/edgestore";
import { Provider } from 'react-redux';
import { store } from "../lib/store";
export const metadata: Metadata = {
  title: "کنکاش استوک",
  description: "اولین فروشگاه تعمیر و خرید هارد اکسترنال ایرانیان",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
        <body className="font-sans m-0 w-auto">
          <Navbar />
          <div className="flex flex-col min-h-screen">
            <EdgeStoreProvider>
              <div className="flex-grow mb-36">{children}</div>
            </EdgeStoreProvider>
            <Footer />
          </div>
        </body>
    </html>
  );
}
