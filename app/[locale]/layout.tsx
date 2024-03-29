import { raleway } from '../lib/fonts'
import type { Metadata } from 'next'

import './../globals.css'

export const metadata: Metadata = {
  title: 'Anghelo Alva | Portfolio',
  description: 'Portfolio of Anghelo Alva, a Informatics Engineering student and web developer.'
}

export default function RootLayout ({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>): React.ReactElement {
  return (
    <html lang={locale}>
      <body className={`${raleway.className} relative text-white`}>
        <div className='absolute inset-0 -z-10 h-full w-full bg-[#161615] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:30px_30px]'>
          <div className='absolute left-0 right-0 top-0 -z-10 m-auto h-[20rem] w-[20rem] md:h-[30rem] md:w-[30rem] rounded-full bg-[#A1357D] opacity-20 blur-[100px]' />
        </div>

        {children}
      </body>
    </html>
  )
}
