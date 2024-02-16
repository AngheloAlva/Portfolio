import { useTranslations } from 'next-intl'

import SkillsCarousel from './Skills-carousel'
import { FaBrain } from 'react-icons/fa6'

export default function SkillsSection (): React.ReactElement {
  const t = useTranslations('skills')

  return (
    <section id='skills' className="flex flex-col items-center justify-center w-full max-w-5xl pt-28">
      <div className='flex items-center w-full gap-4'>
        <h2 className="text-4xl font-bold w-fit text-nowrap flex items-center gap-3">
          <FaBrain /> {t('title')}
        </h2>
        <div className='w-full h-[2px] bg-gradient-to-r from-pink via-secondary-100 to-primary-100 rounded-full' />
      </div>

      <SkillsCarousel />
    </section>
  )
}
