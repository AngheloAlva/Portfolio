import { useTranslations } from 'next-intl'
import { FaSuitcase } from 'react-icons/fa6'

export default function ExperienceSection (): React.ReactElement {
  const t = useTranslations('experience')

  return (
    <section id='experience' className="flex flex-col items-center justify-center gap-10 pt-24 overflow-x-hidden max-w-5x w-full">
      <div className='flex items-center w-full gap-4'>
        <h2 className="text-4xl font-bold w-fit text-nowrap flex items-center gap-3">
          <FaSuitcase /> {t('title')}
        </h2>
        <div className='w-full h-[2px] bg-gradient-to-r from-pink via-secondary-100 to-primary-100 rounded-full' />
      </div>

      <div className='flex gap-4'>
        <div className='h-full w-[2px] bg-white rounded-full' />
      </div>
    </section>
  )
}
