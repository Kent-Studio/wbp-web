import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "WORKBENCH PARTNERS",
    template: "%s | WORKBENCH PARTNERS",
  },
  description:
    "地域事業者向けのWeb制作・集客支援。口コミで評価される技術が、Webでも正しく伝わるように。",
  keywords: [
    "ホームページ制作",
    "Web制作",
    "ランディングページ",
    "集客支援",
    "Googleマップ",
    "地域事業者",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.className} bg-white text-zinc-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
