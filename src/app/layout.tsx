import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/provider/theme-provider';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'JP Hack | MotionUI',
  description: 'Hackathon by Juspay focused upon micro-interactions and ui development',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script crossOrigin="anonymous" src="//unpkg.com/react-scan/dist/auto.global.js" />
      </head>
      <body className={cn('bg-background font-sans text-foreground min-h-screen antialiased')}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
