/* eslint-disable new-cap */
"use client";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Poppins } from "next/font/google";
import { Chonburi, Cormorant_Infant, Cherry_Swash } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});
const cherrySwash = Cherry_Swash({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cherry-swash",
});
const chonburi = Chonburi({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-chonburi",
});
const cormorantInfant = Cormorant_Infant({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cormorant-infant",
});

export default function RootLayout({ children, session }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${poppins.variable} flex flex-col lg:flex-row h-full`}>
        <SessionProvider
          session={session}
          refetchInterval={5 * 60}
          className="h-full"
        >
          <div className="flex w-full">
            <Toaster />
            {children}
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
