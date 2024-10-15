"useClient";
import type { Metadata } from "next";
import { Poppins, Roman } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { AppProvider } from "./_lib/Context/appContext";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});



export const metadata: Metadata = {
  title: "CATOKAN KORYU NIKKO",
  description: "CATOKAN KORYU NIKKO",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={` font-sans ${poppins.className} `}>
        <AppProvider>
          <Providers>{children}</Providers>
        </AppProvider>
      </body>
    </html>
  );
}
