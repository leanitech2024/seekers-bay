
import "./globals.css";

export const metadata = {
  title: "Ascent - Chindcare & Kids School Next.js Template",
  description: "Ascent - Chindcare & Kids School Next.js and Tailwind CSS Template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
