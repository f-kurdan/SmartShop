import React, { useRef } from 'react'
import Link from 'next/link'
import { ArrowUpIcon } from '@heroicons/react/24/solid'
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const GoToTopButton = () => {
  const buttonRef = useRef(null)

  useGSAP(() => {
    gsap.to(buttonRef.current, {
      y: -100,
      scrollTrigger: {
        trigger: buttonRef.current,
        start: 'top 10%',
        end: 'bottom 10%',
        scrub: 1,
        pin: true,
        pinSpacing: false,
        anticipatePin: 0,
        onEnter: () => {
          gsap.set(buttonRef.current, {
            y: 0,
          })
        },
      },
    })
  })

  return (
    <div ref={buttonRef} className='transition-all duration-300 bg-black border-2 rounded-full absolute bottom-3 right-16 p-2 hover:outline hover:outline-8 hover:outline-cyan-200'>
      <Link href='#' >
        <ArrowUpIcon width={40} height={40} color='white' />
      </Link>
    </div>
  )
}

export default GoToTopButton