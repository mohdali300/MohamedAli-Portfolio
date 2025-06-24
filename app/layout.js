import '../styles/globals.css';
import ProgrammingSpaceBackground from '../components/ProgrammingSpaceBackground';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Mohamed Ali | Portfolio',
  description: 'Software Engineer | Backend Developer — Mohamed Ali Ahmed',
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ProgrammingSpaceBackground />
        <Navbar />
        <main style={{ position: "relative", zIndex: 1 }}>
          {children}
        </main>
      </body>
    </html>
  );
}