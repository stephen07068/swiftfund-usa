import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SwiftFund USA - Fast, Secure, and Reliable Loans',
  description: 'Streamlined funding solutions for your personal and professional growth. Experience rapid decisions and transparent terms with SwiftFund USA\'s modern lending platform.',
  keywords: 'loans, personal loans, business loans, fast approval, secure lending, SwiftFund USA',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
