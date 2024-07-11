import type { Metadata } from "next";
import { Inter } from "next/font/google";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eventify",
  description: "event organizer",
};

export const Layout = ({ children }: Readonly<{children: React.ReactNode;}>) => {
  return (
      <div className={inter.className}>
        {children}
        </div>
  );
}
