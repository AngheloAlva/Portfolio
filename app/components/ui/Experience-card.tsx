'use client'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

import { FaCaretRight, FaLink } from 'react-icons/fa6'

export default function ExperienceCard ({
  experience, challengesText, locale
}: ExperienceCardProps): React.ReactElement {
  const ref = useRef(null)
  const isInView = useInView(ref)

  const isEs = locale === 'es'
  const initialX = 100

  return (
    <motion.div
      ref={ref}
      initial={{ x: initialX, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      className='flex flex-col w-full items-center lg:flex-row gap-2 lg:items-start md:gap-5 mb-7 lg:mb-14 md:max-w-5xl'
    >
      <div className='max-w-xl lg:max-w-full'>
        <div className='w-full flex items-center justify-between'>
          <div>
            <small className='text-sm text-white/80'>{experience.date}</small>
            <h3 className="text-3xl font-bold text-start text-pink flex items-center justify-center">
              {experience.title}
            </h3>
          </div>
          <div className='flex items-center gap-4'>
            <a href={experience.url} target="_blank" rel="noreferrer" className='hover:scale-110 transition-all hover:text-pink'>
              <FaLink className='text-3xl' />
            </a>
          </div>
        </div>

        <div>
          <p className="font-medium mt-3 text-pretty">
            {
              isEs
                ? experience.descriptionEs
                : experience.description
            }
          </p>
          <ul>
            <p className='mt-2 font-medium'>
              {challengesText}
            </p>
            {
              isEs
                ? experience.challengesEs.map((challenge, index) => (
                  <li key={index} className='mt-2 flex items-start gap-2 ml-2 text-pretty'>
                    <FaCaretRight className='mt-[3px] text-pink' /> {challenge}
                  </li>
                ))
                : experience.challenges.map((challenge, index) => (
                  <li key={index} className='mt-2 flex items-start gap-2 ml-2 text-pretty'>
                    <FaCaretRight className='mt-[3px] text-pink' /> {challenge}
                  </li>
                ))
            }
          </ul>
        </div>

        <ul className="flex gap-2 flex-wrap mt-7 mb-2 items-center justify-center">
          {experience.techs.map((tech, index) => (
            <li key={index} className='border text-sm border-white/10 px-4 rounded-full bg-white/10 font-medium bg-purple text-white tracking-wide'>
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <Image
        src={experience.image}
        alt={experience.title}
        width={1000}
        height={600}
        className='rounded-xl md:max-w-xl lg:w-1/2'
      />
    </motion.div>
  )
}

interface ExperienceCardProps {
  experience: {
    title: string
    description: string
    descriptionEs: string
    challenges: string[]
    challengesEs: string[]
    date: string
    techs: string[]
    image: string
    imageAlt: string
    url: string
  }
  challengesText: string
  locale: string
}
