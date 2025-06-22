import '../styles/globals.css';

export const metadata = {
  title: 'Mohamed Ali Ahmed | Portfolio',
  description: 'Software Engineer | Backend Developer — Mohamed Ali Ahmed',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}