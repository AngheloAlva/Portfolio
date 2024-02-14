/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'

import { FaCopy, FaEnvelope } from 'react-icons/fa'
import { useState } from 'react'

export default function EmailButtons (): React.ReactElement {
  const [copySuccess, setCopySuccess] = useState<boolean>(false)

  const copyToClipboard = async (): Promise<void> => {
    await navigator.clipboard.writeText('anghelo.alva.q@gmail.com')
    setCopySuccess(true)
    setTimeout(() => { setCopySuccess(false) }, 2000)
  }

  return (
    <div className='flex items-center relative'>
      <div className="relative cursor-text inline-flex items-center justify-start px-6 h-10 overflow-hidden font-bold transition-all rounded-full rounded-r-none group">
        <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
        <span className="absolute inset-0 border border-white/10 rounded-full rounded-r-none"></span>
        <span className="flex items-center gap-2 relative w-full text-left text-white transition-colors duration-200 ease-in-out">
          anghelo.alva.q@gmail.com
        </span>
      </div>

      <button onClick={copyToClipboard} className='h-10 px-6 border-white/10 border flex items-center justify-center hover:scale-105 hover:text-primary hover:bg-white transition-all'>
        <FaCopy />
      </button>
      <a href="mailto:anghelo.alva.q@gmail.com" className='h-10 px-6 border-white/10 border rounded-r-full flex items-center justify-center  hover:scale-105 hover:text-primary hover:bg-white transition-all'>
        <FaEnvelope />
      </a>
      {copySuccess &&
        <div className="absolute bottom-12 left-[65%] transform-translateX-[-50%] py-1 px-3 text-sm font-medium rounded-full bg-white text-black rounded-5">
          Copied!
        </div>
      }
    </div>
  )
}
