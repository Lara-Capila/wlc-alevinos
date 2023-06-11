import { Barlow } from 'next/font/google';
import Navbar from '../components/Navbar';
import './globals.css';

const barlow = Barlow({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'WLC Alevinos',
  description: 'Peixes para lagos e açudes',
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => (
  <html lang="pt-br">
    <body className={barlow.className}>
      <main className="h-screen">
        <Navbar />
        {children}
      </main>
    </body>
  </html>
);

export default RootLayout;
