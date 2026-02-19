import type { Metadata } from "next";
import "./globals.css";
import site from "@/lib/site";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: `${site.name} — Research Hub`,
  description: site.tagline,
  metadataBase: new URL("https://colonel1223.net"),
  openGraph: {
    title: `${site.name} — Research Hub`,
    description: site.tagline,
    url: "https://colonel1223.net",
    siteName: "colonel1223.net",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Research Hub`,
    description: site.tagline
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white">
        <Nav />
        {children}
        <footer className="mx-auto max-w-5xl px-6 py-16 text-sm text-zinc-500">
          © {new Date().getFullYear()} {site.name} — colonel1223.net
        </footer>
      </body>
    </html>
  );
}
