import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harbor",
  description: "Booking links for B2B sales and customer success teams.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="shell">
          <header className="topbar">
            <Link href="/" className="brand">
              Harbor
            </Link>
            <nav>
              <Link href="/signup">Sign up</Link>
              <Link href="/workspace">Workspace</Link>
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
