import { useTranslations } from 'next-intl'

import { FaFilePdf, FaGithub, FaLinkedin } from 'react-icons/fa6'
import EmailButtons from '../ui/Email-buttons'
import InfoButton from '../ui/Info-button'

export default function Presentation (): React.ReactElement {
  const t = useTranslations('presentation')

  return (
    <>
      <p className="text-2xl font-bold mt-5 text-balance">
        <span className="bg-gradient-to-r from-pink via-secondary-100 to-primary-100 text-transparent bg-clip-text">
          {t('description.firstColor')}
        </span>
        {t('description.second')}
        <span className="bg-gradient-to-r from-pink via-secondary-100 to-primary-100 text-transparent bg-clip-text mx-1">
          {t('description.thirdColor')}
        </span>
        {t('description.fourth')}
      </p>

      <div className='flex gap-4 flex-wrap mt-8'>
        <InfoButton icon={<FaGithub className='-mt-[2px]' />} text="Github" href='https://github.com/AngheloAlva' />
        <InfoButton icon={<FaLinkedin className='-mt-[2px]' />} text="LinkedIn" href='https://www.linkedin.com/in/anghelo-alva-b0791325b/' />
        <InfoButton icon={<FaFilePdf className='-mt-[2px]' />} text={t('buttons.resume')} href='#' />
        <EmailButtons copiedText={t('buttons.mailTooltip')} />
      </div>
    </>
  )
}
