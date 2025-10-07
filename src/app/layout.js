import { Poppins } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
// import Navigation from '@/components/navigation'
import Navigation from "./components/navigation";
import Footer from "./components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Gather",
  description: "A modern platform for introverts to connect and meet ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${poppins.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
