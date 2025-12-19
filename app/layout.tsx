import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { RESUME_DATA } from "@/data/resume-data";

const inter = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/aac.png" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
