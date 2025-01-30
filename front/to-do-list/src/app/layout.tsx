import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./styles/globals.css";
import "./styles/reset.css";
import { Header } from "@/components/header";
const league_spartan = League_Spartan({
  weight: ["100", "300", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "To-Do List",
  description: "A simple and efficient to-do list application.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={league_spartan.className}>
        <Header /> {children}
      </body>
    </html>
  );
}
