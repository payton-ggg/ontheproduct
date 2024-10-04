import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import localfont from "next/font/local"; 
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeContextProvider from "@/context/theme-context";
import Image from "next/image";
import Back from "@/app/back.svg"

const druk = localfont({
    src: [
      {
        path: "./fonts/Poppins-Regular.ttf",
        weight: "400",
      }
    ],
    variable: "--font-druk",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "OnTheProduct",
  description: "Your trusted design partner",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${druk.variable} !scroll-smooth font-druk`}>
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 body`}
      >
        {/* <Image 
          src={Back}
          alt="Background"
          quality={100}
          className="body-for-bg body-for-bg:l-700"
        /> */}
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
