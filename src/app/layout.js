// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }

// app/layout.js
import "./globals.css";
import Footer from "../components/footer/page";
import Navbar from "../components/Navbar/page";

export const metadata = {
  title: "Delicious Food Finder",
  description: "Find your favorite Cambodian and international dishes!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen maxWidth">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
