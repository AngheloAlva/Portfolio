'use client'

import { TypeAnimation } from 'react-type-animation'

export default function Title (): React.ReactElement {
  return (
    <TypeAnimation
      wrapper='h1'
      sequence={['Anghelo Alva']}
      className='text-5xl font-bold'
    />
  )
}
