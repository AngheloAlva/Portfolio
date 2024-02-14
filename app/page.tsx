/* eslint-disable react/no-unescaped-entities */

import Image from 'next/image'

import Presentation from './components/page/Presentation'
import Title from './components/page/Title'

export default function Home (): React.ReactElement {
  return (
    <main className="flex flex-col items-center px-5 sm:px-14 md:px-24">
      <section className="flex flex-col items-center justify-end md:justify-center min-h-screen md:flex-row gap-10 md:gap-0">
        <div className='max-w-lg'>
          <Title />
          <Presentation />
        </div>

        <Image src='/Me.svg' alt="Anghelo Alva" width={400} height={400} className="md:w-1/2 max-w-lg" />
      </section>
    </main>
  )
}
