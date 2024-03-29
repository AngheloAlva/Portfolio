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
        <span className="bg-gradient-to-r to-pink via-secondary-100 from-primary-100 text-transparent bg-clip-text">
          {t('description.thirdColor')}
        </span>
        {t('description.fourth')}
        <span className="bg-gradient-to-r to-pink via-secondary-100 from-primary-100 text-transparent bg-clip-text">
          {t('description.fifthColor')}
        </span>
        {t('description.sixth')}
      </p>

      <div className='flex gap-4 flex-wrap mt-8'>
        <InfoButton
          text="Github"
          href='https://github.com/AngheloAlva'
          icon={<FaGithub className='-mt-[2px]' />}
        />
        <InfoButton
          text="LinkedIn"
          icon={<FaLinkedin className='-mt-[2px]' />}
          href='https://www.linkedin.com/in/anghelo-alva-b0791325b/'
        />
        <InfoButton
          text={t('buttons.resume')}
          icon={<FaFilePdf className='-mt-[2px]' />}
          href='https://onedrive.live.com/?cid=6FA3AF4B9E22484F&id=6FA3AF4B9E22484F%212315&parId=root&o=OneUp'
        />

        <EmailButtons copiedText={t('buttons.mailTooltip')} />
      </div>
    </>
  )
}
