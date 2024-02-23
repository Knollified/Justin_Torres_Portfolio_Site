import { Asul } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const asul = Asul({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Justin Torres | Portfolio",
  description: "Portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={asul.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}