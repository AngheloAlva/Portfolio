'use client'

import { useCallback, useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar (): React.ReactElement {
  const items = [
    { id: 'home', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' }
  ]

  const [selected, setSelected] = useState<string>('home')
  const [hovered, setHovered] = useState<string>('home')

  const handleNavClick = useCallback((sectionId: string): void => {
    const section = document.getElementById(sectionId)
    if (section != null) {
      setSelected(sectionId)
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }, [setSelected])

  return (
    <nav className="border border-white/10 py-1 rounded-full mb-12 fixed px-7 overflow-hidden top-7 md:top-10 z-50 backdrop-blur-xl left-1/2 transform -translate-x-1/2">
      <ul className="flex gap-2 relative justify-start w-full z-[100] rounded-lg">
        {items.map((item) => {
          const isActive = selected === item.id

          return (
            <li
              key={item.id}
              onClick={(): void => { handleNavClick(item.id) }}
              onMouseOver={(): void => { setHovered(item.id) }}
              onMouseLeave={(): void => { setHovered(selected) }}
              data-active={isActive}
              className='cursor-pointer px-4 py-2 rounded-lg lg:text-base relative no-underline duration-300 ease-in font-bold tracking-wider'
            >
              <span>{item.label}</span>

              {item.id === hovered && (
                <motion.div
                  className="absolute bottom-0 left-0 h-full bg-gradient-to-r rounded-lg -z-10 from-pink via-secondary-100 to-primary-100"
                  layoutId="navbar"
                  aria-hidden="true"
                  style={{
                    width: '100%'
                  }}
                  transition={{
                    type: 'spring',
                    bounce: 0.1,
                    stiffness: 130,
                    damping: 10,
                    duration: 0.2
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
