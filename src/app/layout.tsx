"useClient";
import type { Metadata } from "next";
import { Nunito, Open_Sans,Jost } from "next/font/google";
import localfont from "next/font/local"

import "./globals.css";
import { Providers } from "./providers";
import { AppProvider } from "./_lib/Context/appContext";

const nunito = Nunito({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-nunito",
});

const jost = Jost({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-jost",
});

const futura = localfont({
  src:[
    {
      path : "./fonts/futura/light.woff",
      weight: "300"
    },
    {
      path : "./fonts/futura/regular.woff",
      weight: "400"
    },
    {
      path : "./fonts/futura/medium.woff",
      weight: "500"
    },
    {
      path : "./fonts/futura/semibold.woff",
      weight: "600"
    },
    {
      path : "./fonts/futura/bold.woff",
      weight: "700"
    },
  ],
  variable :"--font-futura"
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});



export const metadata: Metadata = {
  title: "PROMO TERBATAS",
  description: "CATOKAN KORYU NIKKO",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${openSans.variable} ${nunito.className} ${jost.className} ${futura.className} `}>
        <AppProvider>
          <Providers>{children}</Providers>
        </AppProvider>
      </body>
    </html>
  );
}
