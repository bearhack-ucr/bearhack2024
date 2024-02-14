/* eslint-disable new-cap */
import "./globals.css";
import { Poppins } from "next/font/google";
import { Grenze, Titillium_Web as TitilliumWeb } from "next/font/google";
import Session from "@/components/dynamic/Session";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});
const grenze = Grenze({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-grenze",
});
const titilliumWeb = TitilliumWeb({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
  variable: "--font-titillium-web",
});

export default function RootLayout({ children, session }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${poppins.variable} ${grenze.variable} ${titilliumWeb.variable} bg-bear-dark flex flex-col lg:flex-row h-full`}
      >
        <Session session={session} refetchInterval={5 * 60} className="h-full">
          <div className="flex w-full">
            <Toaster />
            {children}
          </div>
        </Session>
      </body>
    </html>
  );
}
