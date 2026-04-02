import { Open_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

const proximaNova = localFont({
  src: "../fonts/ProximaNova-Semibold.woff2",
  weight: "600",
  style: "normal",
  variable: "--font-proxima",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${openSans.variable}  ${proximaNova.variable} antialiased`}>
        <Toaster
          position="bottom-right"
          reverseOrder={false}
        />
        {children}
      </body>
    </html>
  );
}