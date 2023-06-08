import Navbar from './components/Navbar'
import './globals.css'
import { Barlow } from 'next/font/google'

const montserrat = Barlow({
  weight:  ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'WLC Alevinos',
  description: 'Peixes para lagos e açudes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={montserrat.className}>
        <main>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  )
}
