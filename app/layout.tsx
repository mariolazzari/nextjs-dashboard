import './ui/global.css';
import { inter } from '@/app/ui/fonts';
import clsx from 'clsx';
import { Layout } from './types/Layout';

function RootLayout({ children }: Layout) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, 'antialiased')}>{children}</body>
    </html>
  );
}

export default RootLayout;
