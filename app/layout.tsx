import type { Metadata } from "next";
import "./globals.css";
import RecoilRootProvider from "./recoil/RecoilProvider";



export const metadata: Metadata = {
  title: "GreenNet",
  description: "GreenNet is a platform for sharing and discovering environmental programs and events.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        <RecoilRootProvider>{children}</RecoilRootProvider>
      </body>
    </html>
  );
}
