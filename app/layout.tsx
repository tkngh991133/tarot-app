import type { Metadata, Viewport } from "next";
import { Cinzel, Noto_Serif_JP, Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const notoSerif = Noto_Serif_JP({
  variable: "--font-noto-serif",
  subsets: [],
  weight: ["400", "600"],
});

const zenKaku = Zen_Kaku_Gothic_New({
  variable: "--font-zen-kaku",
  subsets: [],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "タロットの導き",
  description: "大アルカナ3枚引きで、過去・現在・未来を読み解く一人占いアプリ",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#0F0B24",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${cinzel.variable} ${notoSerif.variable} ${zenKaku.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
