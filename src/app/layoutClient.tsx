"use client";

import { useEffect, useState } from "react";

export default function LayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const storedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", storedTheme);
  }, []);

  if (!isClient) {
    return <main>{children}</main>;
  }

  return <main>{children}</main>;
}
