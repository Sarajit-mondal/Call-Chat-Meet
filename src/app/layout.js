import localFont from "next/font/local";
import "./globals.css";

import { Toaster } from "react-hot-toast";

import { ClerkProvider } from "@clerk/nextjs";

import NavBar from "../components/ShareComponet/nabBar/NavBar";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Call-Chat-Meet",
  description: "This is audio video call and meeting platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body>
          <header>
            <NavBar />
          </header>
          <main className="mx-auto bg-[#e2e7fc] max-w-7xl px-5">
            <div className="py-5 md:py-10">{children}</div>
          </main>
          <Toaster />
        </body>
      </ClerkProvider>
    </html>
  );
}
