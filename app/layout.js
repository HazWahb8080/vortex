import "./globals.css";
import { Inter } from "next/font/google";


export const metadata = {
  title: "vortex - premium landing page",
  description: "premium landing page for react.js and tailwindcss",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="/icon?<generated>"
        type="image/<generated>"
        sizes="<generated>"
      />
      <body>{children}</body>
    </html>
  );
}
