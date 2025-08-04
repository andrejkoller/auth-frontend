"use client";

import { LanguageDialog } from "@/components/dialogs/LanguageDialog/LanguageDialog";
import { Footer } from "@/components/Footer/Footer";
import { LanguageDialogProvider } from "@/contexts/LanguageDialog/LanguageDialogContext";
import { ThemeProvider } from "@/contexts/Theme/ThemeProvider";

export default function LayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <LanguageDialogProvider>
        <main>{children}</main>
        <Footer />
        <LanguageDialog />
      </LanguageDialogProvider>
    </ThemeProvider>
  );
}
