import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import SupabaseProvider from "@/providers/SupabasePrividers";
import "./globals.css";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import getSongsByUserId from "./actions/getSongsByUserId";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const userSongs = await getSongsByUserId();

  return (
    <html lang="en">
      <body
        className={font.className}>
          <ToasterProvider/>
          <SupabaseProvider>
            <UserProvider>
              <ModalProvider />
              <Sidebar songs = {userSongs}>
                <>{children}</>
              </Sidebar>
            </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
