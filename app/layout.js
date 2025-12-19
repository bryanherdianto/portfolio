import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.bryanherdianto.site"),
  title: {
    default: "Bryan Herdianto",
    template: "%s - Bryan Herdianto"
  },
  description: "Explore my portfolio. A Fullstack Developer and Data Engineer specializing in scalable web solutions, AI integration, and robotics innovation.",
  twitter: {
    card: "summary_large_image"
  },
  keywords: [
    "Bryan Herdianto", 
    "Data Engineer", 
    "Fullstack Developer", 
    "Robotics", 
    "AI", 
    "Gladiatos UI", 
    "Humanoid Robots", 
    "Universitas Indonesia", 
    "Autonomous Systems"
  ],
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
