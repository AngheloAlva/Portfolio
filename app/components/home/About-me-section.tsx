import { useTranslations } from 'next-intl'

import EmailButtons from '../ui/Email-buttons'
import { FaUser } from 'react-icons/fa6'

export default function AboutMeSection (): React.ReactElement {
  const t = useTranslations('aboutMe')

  return (
    <section id='aboutMe' className="flex flex-col items-center justify-center w-full max-w-5xl pt-40 mb-52 gap-2">
      <div className='flex items-center w-full gap-4'>
        <h2 className="text-4xl font-bold w-fit text-nowrap flex items-center gap-3">
          <FaUser /> {t('title')}
        </h2>
        <div className='w-full h-[2px] bg-gradient-to-r from-pink via-secondary-100 to-primary-100 rounded-full' />
      </div>

      <div>
        <p className='text-2xl font-medium mt-5'>
          {t('first')}
        </p>
        <p className='text-2xl font-medium mt-5'>
          {t('second')}
        </p>
        <p className='text-2xl font-medium mt-5'>
          {t('third')}
        </p>
      </div>

      <div className='mt-10 flex items-center flex-col gap-4 max-w-[90vw]'>
        <p className='text-xl mt-5'>
          {t('contact')}
        </p>
        <EmailButtons copiedText={t('mailTooltip')} />
      </div>
    </section>
  )
}
