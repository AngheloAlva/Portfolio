'use client'

import { skills } from '@/app/lib/const/skills'
import AutoPlay from 'embla-carousel-autoplay'
import Image from 'next/image'

import {
  Carousel,
  CarouselItem,
  CarouselContent
} from '@/app/components/ui/carousel'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/app/components/ui/tooltip'

export default function SkillsCarousel (): React.ReactElement {
  return (
    <Carousel
      className='w-full'
      opts={{ loop: true, align: 'start' }}
      plugins={[
        AutoPlay({ delay: 2000 })
      ]}
    >
      <CarouselContent className='overflow-visible'>
        {skills.map((skill, index) => (
          <CarouselItem key={index} className="flex items-center gap-4 basis-1/5 sm:basis-1/6 md:basis-[15%] lg:basis-[10%] h-32">
            <TooltipProvider>
              <Tooltip delayDuration={100}>
                <TooltipTrigger>
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={50}
                    height={50}
                    className='hover:scale-110 transition-transform duration-300'
                  />
                </TooltipTrigger>
                <TooltipContent className='bg-white'>
                  <p className='bg-gradient-to-r from-primary-100 via-secondary-100 to-pink text-transparent bg-clip-text font-bold tracking-wide text-sm'>{skill.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
