import Image from 'next/image'

import Presentation from './Presentation'
import Title from './Title'

export default function PresentationSection (): React.ReactElement {
  return (
    <section id='home' className="flex flex-col items-center justify-end md:justify-center max-w-5xl min-h-screen md:flex-row gap-10 md:gap-0 pt-32">
      <div className='max-w-[90vw] sm:max-w-xl'>
        <Title />
        <Presentation />
      </div>

      <Image
        priority
        width={400}
        height={400}
        src='/Me.svg'
        className="md:w-1/2 max-w-lg"
        alt="Graphic representation of Anghelo Alva."
      />
    </section>
  )
}
