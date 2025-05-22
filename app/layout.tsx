import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import SupabaseProvider from "@/providers/SupabasePrividers";
import "./globals.css";

const font = Figtree({
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "Listen to music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}>
          <SupabaseProvider>
            <Sidebar>
              <>{children}</>
            </Sidebar>
        </SupabaseProvider>
      </body>
    </html>
  );
}
