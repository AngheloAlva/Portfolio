import type { projects } from '@/app/lib/const/projects'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

import { FaGithub, FaLink } from 'react-icons/fa6'

export default function ProjectCard ({
  project, index
}: ProjectCardProps): React.ReactElement {
  const ref = useRef(null)
  const isInView = useInView(ref)

  const isEven = index % 2 === 0
  const initialX = isEven ? -100 : 100

  return (
    <motion.div
      ref={ref}
      initial={{ x: initialX, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      className={`
        flex flex-col items-center gap-2 md:items-start md:gap-5 mb-7 lg:mb-14 max-w-5xl
        ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}
      `}
    >
      <div className={`${isEven ? 'md:text-end' : ''}`}>
        <div className={`w-full flex items-center justify-between ${isEven ? 'md:flex-row-reverse' : ''}`}>
          <h3 className="text-3xl font-bold text-start text-pink">
            {project.title}
          </h3>
          <div className='flex items-center gap-4'>
            <a href={project.link} target="_blank" rel="noreferrer" className='hover:scale-110 transition-all hover:text-pink'>
              <FaLink className='text-3xl' />
            </a>

            <a href={project.code} target="_blank" rel="noreferrer" className='hover:scale-110 transition-all hover:text-pink'>
              <FaGithub className='text-3xl' />
            </a>
          </div>
        </div>

        <p className="font-medium mt-3">{project.description}</p>

        <ul className="flex gap-2 flex-wrap mt-7 mb-2 items-center justify-center">
          {project.techs.map((tech, index) => (
            <li key={index} className='border text-sm border-white/10 px-4 rounded-full bg-white/10 font-medium bg-purple text-white tracking-wide'>
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <Image
        src={project.image}
        alt={project.title}
        width={1000}
        height={600}
        className='rounded-xl md:w-1/2'
      />
    </motion.div>
  )
}

interface ProjectCardProps {
  project: typeof projects[0]
  index: number
}
