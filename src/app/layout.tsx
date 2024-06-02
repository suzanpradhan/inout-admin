import Provider from '@/core/redux/provider';
import Notification from '@/core/ui/notification';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'InOut',
  description: 'In-out system for an Organization',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Notification />
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
