/* eslint-disable react/no-unescaped-entities */
'use client'

import { projects } from './lib/const/projects'
import Image from 'next/image'

import SkillsCarousel from './components/page/Skills-carousel'
import Presentation from './components/page/Presentation'
import ProjectCard from './components/ui/Project-card'
import { FaBrain, FaCode } from 'react-icons/fa6'
import Navbar from './components/navbar/Navbar'
import Title from './components/page/Title'

export default function Home (): React.ReactElement {
  return (
    <>
      <Navbar/>

      <main className="flex flex-col items-center px-5 sm:px-14 md:px-24">
        <section id='home' className="flex flex-col items-center justify-end md:justify-center max-w-5xl min-h-screen md:flex-row gap-10 md:gap-0">
          <div className='max-w-lg'>
            <Title />
            <Presentation />
          </div>

          <Image src='/Me.svg' alt="Anghelo Alva" width={400} height={400} className="md:w-1/2 max-w-lg" />
        </section>

        <section id='skills' className="flex flex-col items-center justify-center w-full max-w-5xl pt-24">
          <div className='flex items-center w-full gap-4'>
            <h2 className="text-4xl font-bold w-fit text-nowrap flex items-center gap-3"><FaBrain /> Skills</h2>
            <div className='w-full h-[2px] bg-gradient-to-r from-pink via-secondary-100 to-primary-100 rounded-full' />
          </div>

          <SkillsCarousel />
        </section>

        <section id='projects' className="flex flex-col items-center justify-center gap-10 pt-24">
          <div className='flex items-center w-full gap-4'>
            <h2 className="text-4xl font-bold w-fit text-nowrap flex items-center gap-3"><FaCode /> Projects</h2>
            <div className='w-full h-[2px] bg-gradient-to-r from-pink via-secondary-100 to-primary-100 rounded-full' />
          </div>

          {
            projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))
          }
        </section>
      </main>
    </>
  )
}
