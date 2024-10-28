import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {Roboto_Serif} from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"], variable: "--font-inter"});
const robotoSerif = Roboto_Serif({subsets: ["latin"], variable: "--font-roboto-serif"});

export const metadata: Metadata = {
    title: {
        template: "%s | Chinsong",
        absolute: "Chinsong",
    },
    description: "Free music with lyrics.",
};

export default function RootLayout(
    {children,}: Readonly<{ children: React.ReactNode; }>
) {
    return (
        <html lang="en">
        <body className={`${inter.variable}  ${robotoSerif.variable} font-normal antialiased`}>
        {children}
        </body>
        </html>
    );
}
