import { app as _app, auth as _auth, db as _db } from '@/lib/firebase/firebaseClient';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
