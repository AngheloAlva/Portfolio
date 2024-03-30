/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useCallback, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaHome } from 'react-icons/fa'
import { FaBrain, FaCode, FaSuitcase, FaUser } from 'react-icons/fa6'

export default function Navbar (
  { locale }: { locale: string }
): React.ReactElement {
  const items = [
    { id: 'home', label: locale === 'en' ? 'Home' : 'Inicio', icon: <FaHome /> },
    { id: 'skills', label: locale === 'en' ? 'Skills' : 'Habilidades', icon: <FaBrain /> },
    { id: 'experience', label: locale === 'en' ? 'Experience' : 'Experiencia', icon: <FaSuitcase />  },
    { id: 'projects', label: locale === 'en' ? 'Projects' : 'Proyectos', icon: <FaCode /> },
    { id: 'aboutMe', label: locale === 'en' ? 'About me' : 'Sobre mí', icon: <FaUser /> }
  ]

  const [selected, setSelected] = useState<string>('home')
  const [lastSelected, setLastSelected] = useState<string>('home')
  const [isInTransition, setIsInTransition] = useState<boolean>(false)

  const handleNavClick = useCallback((sectionId: string): void => {
    setSelected(sectionId)
    setLastSelected(sectionId)
    const section = document.getElementById(sectionId)

    if (section != null) {
      setIsInTransition(true)
      section.scrollIntoView({ behavior: 'smooth' })
      setTimeout(() => {
        setIsInTransition(false)
      }, 700)
    }
  }, [setSelected])

  useEffect(() => {
    const handleScroll = (): void => {
      let maxSection = ''
      let maxSectionPosition = 0

      if (isInTransition) {
        return
      }

      items.forEach((item) => {
        const section = document.getElementById(item.id)
        if (section != null) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= window.innerHeight / 7 && rect.bottom > window.innerHeight / 7) {
            setSelected(item.id)
            setLastSelected(item.id)
          }
          if (rect.bottom > maxSectionPosition) {
            maxSectionPosition = rect.bottom
            maxSection = item.id
          }
        }
      })

      if (maxSectionPosition < window.innerHeight / 2) {
        setSelected(maxSection)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isInTransition, items])

  return (
    <nav className="border border-white/10 py-1 rounded-lg w-full sm:rounded-full mb-12 fixed px-2 sm:px-8 overflow-hidden top-7 md:top-10 z-50 backdrop-blur-xl left-1/2 transform -translate-x-1/2 sm:max-w-fit">
      <ul className="flex sm:gap-2 relative justify-between w-full z-[100] rounded-lg flex-wrap items-center sm:flex-nowrap">
        {items.map((item) => {
          const isActive = selected === item.id

          return (
            <li
              key={item.id}
              onClick={(): void => {
                handleNavClick(item.id)
              }}
              onMouseOver={(): void => {
                setSelected(item.id)
              }}
              onMouseLeave={(): void => {
                setSelected(lastSelected)
              }}
              data-active={isActive}
              className="cursor-pointer px-2 sm:px-4 text-nowrap py-3 rounded-lg relative no-underline duration-300 ease-in font-bold tracking-wider select-none flex-1 items-center justify-center flex"
            >
              <span className='sm:hidden text-lg'>{item.icon}</span>
              <span className='hidden sm:block'>{item.label}</span>

              {(isActive) && (
                <motion.div
                  className="absolute bottom-0 left-0 h-full bg-gradient-to-r rounded-lg -z-10 from-pink via-secondary-100 to-primary-100"
                  layoutId="navbar"
                  aria-hidden="true"
                  style={{
                    width: '100%'
                  }}
                  transition={{
                    type: 'spring',
                    bounce: 1,
                    stiffness: 100,
                    damping: 10,
                    duration: 1
                  }}
                />
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
