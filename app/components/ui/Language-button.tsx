import Link from 'next/link'

import { FaLanguage } from 'react-icons/fa6'

export default function LanguageButton (
  { locale }: { locale: string }
): React.ReactElement {
  return (
    <Link
      href={locale === 'en' ? '/es' : '/en'}
      type='button'
      className="fixed bottom-5 text-3xl right-5 p-2 bg-gradient-to-r text-white rounded-full from-primary-100 via-secondary-100 to-pink"
    >
      <FaLanguage />
    </Link>
  )
}
