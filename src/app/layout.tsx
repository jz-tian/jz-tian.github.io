import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jiazheng Tian — Data Analyst | AI & Data Transformation",
  description:
    "Personal portfolio of Jiazheng Tian — AI and data transformation professional focused on analytics workflows, decision support, and AI-enabled ways of working.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
