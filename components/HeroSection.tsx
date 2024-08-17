'use client'

import React from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll'
import { HiArrowDown } from 'react-icons/hi'

const HeroSection = () => {
  return (
    <section id='home'>
        <div className='flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-36'>
            <div className='md:w-1/2 md:mt-2'>
                <Image className='rounded-full shadow-2xl' src='/profile.jpg' alt='Profile image' width={300} height={300} />
            </div>
            <div className='md:mt-2 md:w-3/5'>
                <h1 className='font-bold text-4xl mt-6 md:text-7xl md:mt-0'>Hello, I am Adrián Serrano</h1>
                <p className='text-lg mt-4 mb-6 md:text-2xl'>
                A{' '}
                <span className='font-semibold text-teal-600'>
                Software Engineer
                </span>
                {' '}with more than 5 years working on a variety of technologies along the software development lifecycle, planning, analysis, design, implementation, testing, deployment, and maintenance.
                </p>

                <Link
                    to='projects'
                    className='text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700'
                    activeClass='active'
                    spy={true}
                    offset={-100}
                    duration={500}
                >
                    Projects
                </Link>
            </div>
        </div>
        <div className='flex justify-center'>
            <Link
                to='about'
                activeClass='active'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
            >
                <HiArrowDown size={35} className='animate-bounce'/>
            </Link>
        </div>
    </section>
  )
}

export default HeroSection