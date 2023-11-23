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
    <html lang="en" className={`${brasika.variable} font-serif h-full antialiased`}>
        <body className='w-full h-full bg-color flex flex-col'>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar/>
          <main className='relative flex flex-col min-h-screen'>
            <div className='flex-grow flex-1'>
              {children}
            </div>
          </main>
          </ThemeProvider>       
        </body>
    </html>
  )
}
