import './globals.css'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import { ThemeProvider } from './theme-provider'
import Navbar from '@/components/Navbar'

const brasika = localFont({
  src: '../public/fonts/brasika-display.otf',
  variable: '--font-brasika'
})

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Punsala',
  description: 'personal portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${brasika.variable} font-serif`}>
        <body className='justify-center w-full h-screen dark:bg-dark bg-light'>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar/>
          <main>
            {children}
          </main>
          </ThemeProvider>       
        </body>
    </html>
  )
}
