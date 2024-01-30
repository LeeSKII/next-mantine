import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@mantine/core/styles.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "This is Title",
  description: "This is description",
  openGraph: {
    title: "openGraph title",
    description: "openGraph description",
    url: "https://nextjs.org",
    siteName: "Next.js",
    images: [
      {
        url: "https://bbs-static.miyoushe.com/static/2023/11/03/6ce65ace05f501e8f6af3616dea1c634_1107629373726729394.png", // Must be an absolute URL
        width: 200,
        height: 200,
      },
      {
        url: "https://bbs-static.miyoushe.com/communityweb/upload/1cc889fcba3e2686d6cce7c90d8ed5a4.png", // Must be an absolute URL
        width: 200,
        height: 200,
        alt: "My custom alt",
      },
    ],
    locale: "zh_CN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
