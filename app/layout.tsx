import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CryptoTracker Pro - AI Portfolio Analytics',
  description: 'Real-time crypto portfolio tracking with AI predictions and risk analytics.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <div className="container">
            <div className="logo">📊 CryptoTracker</div>
            <div className="nav-links">
              <a href="/">Dashboard</a>
              <a href="#pricing">Pricing</a>
              <a href="#account">Account</a>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
