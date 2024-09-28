import localFont from "next/font/local";
import "./globals.css";

import { Toaster } from "react-hot-toast";
import NavBar from "@/components/ShareComponet/nabBar/NavBar";
import AuthProvider from "@/services/AuthProvider";

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
      <body>
        <AuthProvider>
          <header>
            <NavBar />
          </header>
          <main className="mx-auto bg-[#e2e7fc]">
            <div className="min-h-[calc(100vh-280px)] py-12">{children}</div>
          </main>
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
