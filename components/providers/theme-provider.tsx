"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import QueryProvider from "./query-provider";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const [mount, setMount] = React.useState(false);
  React.useEffect(() => setMount(true), []);
  return (
    <QueryProvider>
      <NextThemesProvider {...props}>{mount && children}</NextThemesProvider>
    </QueryProvider>
  );
}
