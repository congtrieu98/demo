import React from 'react';
import './globals.css';

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'iLotusLand®',
  description: 'The login page of iLotusLand Solar',
};

export const revalidate = 0;

export default async function RootAuthLayout({
  children,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="bg-background text-foreground overflow-hidden"
        suppressHydrationWarning
      >
        <main className="min-h-screen overflow-hidden">{children}</main>
      </body>
    </html>
  );
}
