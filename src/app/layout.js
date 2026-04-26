import { Lobster_Two, Open_Sans, Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400",  "700"],
});

export const metadata = {
  title: "Dragon News",
  description: "Best news portal in Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className={` h-full antialiased`}>
      <body className={`${poppins.className} min-h-full flex flex-col`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
