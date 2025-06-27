import '../styles/globals.css';
import ProgrammingSpaceBackground from '../components/ProgrammingSpaceBackground';
import Navbar from '../components/Navbar';
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: 'Mohamed Ali | Portfolio',
  description: 'Software Engineer | Backend Developer — Mohamed Ali Ahmed',
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  keywords: [
    "Mohamed Ali",
    "Software Engineer",
    "Backend Developer",
    "Portfolio",
    "Web Development",
    "Programming",
    ".net",
    "C#",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ProgrammingSpaceBackground />
        <Navbar />
        <Analytics />
        <main style={{ position: "relative", zIndex: 1 }}>
          {children}
        </main>
      </body>
    </html>
  );
}