import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers/Providers";
import "react-toastify/dist/ReactToastify.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lost & Found",
  description:
    "Lost and Found. It provides user to report the their lost items. Also they can report something if they found something. Another user can claim items by verification",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body className={`${inter.className} dark`}>{children}</body>
      </html>
    </Providers>
  );
}

// suppressHydrationWarning={true}
