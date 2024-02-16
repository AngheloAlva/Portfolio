/* eslint-disable react/no-unescaped-entities */

import PresentationSection from '../components/page/Presentation-section'
import ProjectsSection from '../components/page/Projects-section'
import AboutMeSection from '../components/page/About-me-section'
import SkillsSection from '../components/page/Skills-section'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import LanguageButton from '../components/ui/Language-button'

export default function Home (
  { params }: { params: { locale: string } }
): React.ReactElement {
  return (
    <>
      <Navbar locale={params.locale} />

      <main className="flex flex-col items-center px-5 sm:px-14 md:px-24">
        <PresentationSection />
        <SkillsSection />
        <ProjectsSection locale={params.locale} />
        <AboutMeSection />
        <Footer />

        <LanguageButton locale={params.locale} />
      </main>
    </>
  )
}
