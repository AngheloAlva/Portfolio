import { FaFilePdf, FaGithub, FaLinkedin } from 'react-icons/fa6'
import EmailButtons from '../ui/Email-buttons'
import InfoButton from '../ui/Info-button'

export default function Presentation (): React.ReactElement {
  return (
    <>
      <p className="text-2xl font-bold mt-5 text-balance">
        <span className="bg-gradient-to-r from-pink via-secondary-100 to-primary-100 text-transparent bg-clip-text">
          Web Developer
        </span>
        , motivated by the challenges and the
        <span className="bg-gradient-to-r from-pink via-secondary-100 to-primary-100 text-transparent bg-clip-text mx-1">
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
    </>
  )
}
