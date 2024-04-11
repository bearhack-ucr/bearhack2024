/* eslint-disable new-cap */
import "./globals.css";
import { Poppins } from "next/font/google";
import { Grenze, Titillium_Web as TitilliumWeb } from "next/font/google";
import Session from "@/components/Session";
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

export const RootLayout = ({ children, session }) => {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${poppins.variable} ${grenze.variable} ${titilliumWeb.variable} bg-bear-dark flex flex-col lg:flex-row h-full`}
      >
        <div className="flex w-full">
          <Session
            session={session}
            refetchInterval={5 * 60}
            className="h-full"
          >
            <Toaster />
            {children}
          </Session>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
