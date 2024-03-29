import { useTranslations } from 'next-intl'

import { projects } from '@/app/lib/const/projects'
import ProjectCard from '../ui/Project-card'
import { FaCode } from 'react-icons/fa6'

export default function ProjectsSection (
  { locale }: { locale: string }
): React.ReactElement {
  const t = useTranslations('projects')

  return (
    <section id='projects' className="flex flex-col items-center justify-center gap-10 pt-28 overflow-x-hidden max-w-5x w-full">
      <div className='flex items-center w-full gap-4'>
        <h2 className="text-4xl font-bold w-fit text-nowrap flex items-center gap-3">
          <FaCode /> {t('title')}
        </h2>
        <div className='w-full h-[2px] bg-gradient-to-r from-pink via-secondary-100 to-primary-100 rounded-full' />
      </div>

      {
        projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            index={index}
            locale={locale}
          />
        ))
      }
    </section>
  )
}
