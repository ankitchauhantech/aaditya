import type { Metadata } from "next";
import { Bricolage_Grotesque, Hind } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppFab } from "@/components/whatsapp-fab";
const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display" });
const body = Hind({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body" });
export const metadata: Metadata = { title: "Suman Flex Printers, Noorpur Bijnor", description: "Flex banners, visiting cards, wedding cards and hoardings in Noorpur, Bijnor." };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en"><body className={`${display.variable} ${body.variable}`}>
      <Navbar />{children}<Footer /><WhatsAppFab />
    </body></html>
  );
}
