import { useCallback, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Navbar (): React.ReactElement {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const items = [
    { id: 'home', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' }
  ]

  const [selected, setSelected] = useState<string>('home')
  const [isInTransition, setIsInTransition] = useState<boolean>(false)

  const handleNavClick = useCallback((sectionId: string): void => {
    setSelected(sectionId)
    const section = document.getElementById(sectionId)

    if (section != null) {
      setIsInTransition(true)
      section.scrollIntoView({ behavior: 'smooth' })
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
          if (rect.top <= window.innerHeight / 10 && rect.bottom > window.innerHeight / 10) {
            setSelected(item.id)
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
  }, [items])

  return (
    <nav className="border border-white/10 py-1 rounded-full mb-12 fixed px-7 overflow-hidden top-7 md:top-10 z-50 backdrop-blur-xl left-1/2 transform -translate-x-1/2">
      <ul className="flex gap-2 relative justify-start w-full z-[100] rounded-lg">
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
                setSelected(selected)
              }}
              data-active={isActive}
              className="cursor-pointer px-4 py-2 rounded-lg lg:text-base relative no-underline duration-300 ease-in font-bold tracking-wider select-none"
            >
              <span>{item.label}</span>

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
