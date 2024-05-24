import type { Metadata } from "next";
import Header from "./components/organisms/header/page";
import Footer from "./components/organisms/footer/page";
import localFont from "next/font/local";
import "./globals.css";

const pretendard = localFont({
  src: [
    {
      path: "../../public/fonts/PretendardVariable.woff2",
      weight: "300",
    },
  ],
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "Major7",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr" className={`${pretendard.variable} font-pretendard`}>
      <body className={pretendard.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
