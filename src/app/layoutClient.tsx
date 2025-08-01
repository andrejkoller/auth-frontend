"use client";

import { ThemeProvider } from "@/contexts/theme/ThemeProvider";

export default function LayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <main>{children}</main>
    </ThemeProvider>
  );
}
