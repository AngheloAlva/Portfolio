/* eslint-disable react/no-unescaped-entities */
'use client'

import { projects } from './lib/const/projects'
import Image from 'next/image'

import SkillsCarousel from './components/page/Skills-carousel'
import Presentation from './components/page/Presentation'
import ProjectCard from './components/ui/Project-card'
import { FaBrain, FaCode, FaUser } from 'react-icons/fa6'
import Navbar from './components/navbar/Navbar'
import Title from './components/page/Title'
import EmailButtons from './components/ui/Email-buttons'

export default function Home (): React.ReactElement {
  const year = new Date().getFullYear()

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

        <section id='skills' className="flex flex-col items-center justify-center w-full max-w-5xl pt-28">
          <div className='flex items-center w-full gap-4'>
            <h2 className="text-4xl font-bold w-fit text-nowrap flex items-center gap-3"><FaBrain /> Skills</h2>
            <div className='w-full h-[2px] bg-gradient-to-r from-pink via-secondary-100 to-primary-100 rounded-full' />
          </div>

          <SkillsCarousel />
        </section>

        <section id='projects' className="flex flex-col items-center justify-center gap-10 pt-28 overflow-x-hidden">
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

        <section id='aboutMe' className="flex flex-col items-center justify-center w-full max-w-5xl pt-28 mb-32 gap-2">
          <div className='flex items-center w-full gap-4'>
            <h2 className="text-4xl font-bold w-fit text-nowrap flex items-center gap-3"><FaUser /> About Me</h2>
            <div className='w-full h-[2px] bg-gradient-to-r from-pink via-secondary-100 to-primary-100 rounded-full' />
          </div>

          <div>
            <p className='text-2xl font-medium mt-5'>
              Hi, I'm Anghelo Alva, student of Ing. Informaticts, in my free time I develop web applications.
            </p>
            <p className='text-2xl font-medium mt-5'>
              I'm a passionate about the web, I like to create web applications that help people to solve their problems and make their lives easier, always designing the best user experience and the best performance i can.
            </p>
            <p className='text-2xl font-medium mt-5'>
              I don't have experience in a real job, but I feel that I'm ready to start working in a company, I have the skills and the knowledge to start working in a company and I'm ready to learn more and improve my skills.
            </p>
          </div>

          <div className='mt-10 flex items-center flex-col gap-4'>
            <p className='text-xl mt-5'>
              If you want to contact me, you can send me an email to:
            </p>
            <EmailButtons />
          </div>
        </section>

        <footer className="flex items-center justify-center w-full h-24">
          <p className='text-xl font-medium'>
            Anghelo Alva - {year}
          </p>
        </footer>
      </main>
    </>
  )
}
