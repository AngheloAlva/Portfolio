import Image from 'next/image'
import { FaFilePdf, FaGithub, FaLinkedin } from 'react-icons/fa6'
import InfoButton from './components/ui/Info-button'
import EmailButtons from './components/ui/Email-buttons'

export default function Home (): React.ReactElement {
  return (
    <main className="flex flex-col items-center px-5 sm:px-14 md:px-24">
      <section className="flex flex-col items-center justify-end md:justify-center min-h-screen md:flex-row gap-10 md:gap-0">
        <div className='max-w-md'>
          <h1 className="text-5xl font-bold">
            Anghelo Alva
          </h1>
          <p className="text-2xl font-bold mt-5 text-pretty">
            <span className="bg-gradient-to-r from-secondary to-purple via-primary text-transparent bg-clip-text">
              Web Developer
            </span>
            , motivated by the challenges and the
            <span className="bg-gradient-to-r from-secondary to-purple via-primary text-transparent bg-clip-text mx-1">
              constant learning
            </span>
            that the web world offers.
          </p>

          <div className='flex gap-4 flex-wrap mt-8'>
            <InfoButton icon={<FaGithub className='-mt-[2px]' />} text="Github" href='https://github.com/AngheloAlva' />
            <InfoButton icon={<FaLinkedin className='-mt-[2px]' />} text="LinkedIn" href='https://www.linkedin.com/in/anghelo-alva-b0791325b/' />
            <InfoButton icon={<FaFilePdf className='-mt-[2px]' />} text="Resume" href='#' />
            <EmailButtons />
          </div>
        </div>

        <Image src='/Me.svg' alt="Anghelo Alva" width={400} height={400} className="md:w-1/2 max-w-lg" />
      </section>

    </main>
  )
}
