import { experience } from '@/app/lib/const/experience'
import { useTranslations } from 'next-intl'

import ExperienceCard from '../ui/Experience-card'
import { FaSuitcase } from 'react-icons/fa6'

export default function ExperienceSection (
  { locale }: { locale: string }
): React.ReactElement {
  const t = useTranslations('experience')

  return (
    <section id='experience' className="flex flex-col items-center justify-center gap-2 pt-24 overflow-x-hidden max-w-5xl w-full">
      <div className='flex items-center w-full gap-4'>
        <h2 className="text-4xl font-bold w-fit text-nowrap flex items-center gap-3">
          <FaSuitcase /> {t('title')}
        </h2>
        <div className='w-full h-[2px] bg-gradient-to-r from-pink via-secondary-100 to-primary-100 rounded-full' />
      </div>

      <div className='flex gap-4 pl-4'>
        <div className='min-h-full min-w-[2px] bg-white/80 rounded-full' />

        <div className='pt-10 flex flex-col gap-4'>
          {experience.map((exp) => (
            <ExperienceCard
              key={exp.title}
              locale={locale}
              experience={exp}
              challengesText={t('challenges')}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
