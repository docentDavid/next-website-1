import Footer from "./components/Footer";
import Header from "./components/Header";
import "./reset.css";
import "./globals.css";

export const metadata = {
  title: "World travelling",
  description: "Join me on my travel around the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
