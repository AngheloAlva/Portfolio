import PresentationSection from '../components/home/Hero-section'
import ProjectsSection from '../components/home/Projects-section'
import AboutMeSection from '../components/home/About-me-section'
import SkillsSection from '../components/home/Skills-section'
import LanguageButton from '../components/ui/Language-button'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import ExperienceSection from '../components/home/Experience-section'

export default function Home (
  { params }: { params: { locale: string } }
): React.ReactElement {
  return (
    <>
      <Navbar locale={params.locale} />

      <main className="flex flex-col items-center px-5 sm:px-14 md:px-24">
        <PresentationSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection locale={params.locale} />
        <AboutMeSection />
        <Footer />

        <LanguageButton locale={params.locale} />
      </main>
    </>
  )
}
