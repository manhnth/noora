'use client';

import { ThemeProvider } from '@/lib/theme-context';
import '../styles/globals.css';

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body>
          <div id="_app" className="h-screen w-screen">
            {children}
          </div>
        </body>
      </html>
    </ThemeProvider>
  );
}
