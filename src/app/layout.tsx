import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'JP Hack MotionUI',
  description: 'Hackathon by Juspay focused upon micro-interactions and ui development',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('bg-background font-sans text-foreground min-h-screen antialiased')}>
        {children}
      </body>
    </html>
  );
}
