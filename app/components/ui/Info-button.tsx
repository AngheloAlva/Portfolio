export default function InfoButton ({
  icon, text, href
}: InfoButtonsProps): React.ReactElement {
  return (
    <a href={href} className="relative inline-flex items-center justify-start px-5 sm:px-6 py-2 overflow-hidden font-bold transition-all rounded-full group hover:scale-105" target="_blank">
      <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
      <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
      <span className="flex items-center gap-2 relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
        {icon} {text}
      </span>
      <span className="absolute inset-0 border border-white/10 rounded-full"></span>
    </a>
  )
}

interface InfoButtonsProps {
  icon: React.ReactElement
  href: string
  text: string
}
