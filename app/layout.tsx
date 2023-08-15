import './globals.css'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { ThemeProvider } from './theme-provider'
import Link from 'next/link'
import Image from 'next/image'
import { NavLinks } from '@/constants'
import Instagram from '@/components/icons/Instagram'
import Linkedin from '@/components/icons/Linkedin'
import Github from '@/components/icons/Github'
import Moon from '@/components/icons/Moon'

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
          <nav className='flex items-center justify-between mx-auto pt-14 max-w-7xl'>
            <Link href='/'>
                <Image
                    src='/images/logo.png'
                    alt='logo'
                    width={160}
                    height={30}
                />
            </Link>
            <ul className='flex gap-[10px] text-dark dark:text-light '>
                {NavLinks.map((link)=>(
                    <Link href={link.href} key={link.key} className='px-[15px] py-[4px] uppercase text-[16px] font-semibold'>
                        {link.text}
                    </Link>
                ))}
            </ul>
            <div className='flex flex-row gap-[15px] items-center'>
                <a href="https://www.instagram.com/punsalaa_/" key="Instagram" target="_blank" rel="noopener noreferrer">
                    <Instagram/>
                </a>
                <a href="https://www.linkedin.com/in/punsala/" key="Linkedin" target="_blank" rel="noopener noreferrer">
                    <Linkedin/>
                </a>
                <a href="https://github.com/MAGHPMallawaarachchi" key="Github" target="_blank" rel="noopener noreferrer">
                    <Github/>
                </a>        
                
                <ThemeSwitcher/>

            </div>
          </nav>
          <main>{children}</main>
        </ThemeProvider>       
        </body>
    </html>
  )
}
