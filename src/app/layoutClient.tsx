"use client";

import { Footer } from "@/components/Footer/Footer";
import { ThemeProvider } from "@/contexts/ThemeProvider";

export default function LayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
}
