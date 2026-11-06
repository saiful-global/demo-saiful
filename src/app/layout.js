import "./globals.css";

export const metadata = {
  title: "Bhoj Kitchen",
  description: "Fresh food, cooked to order. Dine in, take away or get it delivered.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased">
      <body>{children}</body>
    </html>
  );
}
