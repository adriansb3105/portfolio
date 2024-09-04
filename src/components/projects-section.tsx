import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs'
import SlideUp from './slide-up'

const projects = [
    {
        name: 'Creaciones Princess',
        description: 'Creaciones Princess is a business in Costa Rica that produces handcrafting, agendas, event decorations, cakes, and desserts.',
        image: '/creacionesprincess.jpg',
        github: 'https://github.com/adriansb3105/creaciones-princess',
        link: 'https://creacionesprincess.com'
    },
    {
        name: 'Fine Gold Barber Style',
        description: 'Fine Gold Barber Style offers hair and beard cuts, eyebrows, designs, marking, facial cleansing, waxing, and more.',
        image: '/finegoldbarberstyle.png',
        github: 'https://github.com/adriansb3105/finegoldbarberstyle',
        link: 'https://finegoldbarberstyle.com'
    },
    {
        name: 'Pathology Cards',
        description: 'Website to include the terms, images and descriptions about Pathology.',
        image: '/pathologycards.png',
        github: 'https://github.com/adriansb3105/pathology-cards',
        link: 'https://tarjetas-patologia-2.vercel.app/'
    },
    {
        name: 'Donation System',
        description: 'The system aims to decentralize donations around the world. Developed in Solidity and deployed on the Optimism network.',
        image: '/donationsystem.png',
        github: 'https://github.com/adriansb3105/solidity-project',
        link: 'https://solidity-project-8r7q.vercel.app/'
    }
]

const ProjectsSection = () => {
  return (
    <section id='projects'>
        <h2 className='text-center font-bold text-4xl'>
            Projects
            <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded' />
        </h2>

        <div className="flex flex-col space-y-28">
            {projects.map((project, id) => {
                return (
                    <div key={id}>
                        <SlideUp offset='-300px 0px -300px 0px'>
                            <div className='flex flex-col animate-slideUpCubiBezier animation-delay-1 md:flex-row md:space-x-12'>
                                <div className='mt-8 md:w-1/2'>
                                    <Link href={project.link} target='_blank'>
                                        <Image 
                                        src={project.image} 
                                        alt={project.name} 
                                        width={1000}
                                        height={1000}
                                        className='rounded-xl shadow-xl hover:opacity-70'
                                        />
                                    </Link>
                                </div>
                                <div className='mt-12 md:w-1/2'>
                                    <h3 className='text-4xl font-bold mb-6'>{project.name}</h3>
                                    <p className='text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400'>{project.description}</p>
                                    <div className='flex align-bottom space-x-4'>
                                        <Link href={project.github} target='_blank'>
                                            <BsGithub 
                                                size={30}
                                                className='hover:-translate-y-1 transition-transform cursor-pointer' />
                                        </Link>
                                        
                                        <Link href={project.link} target='_blank'>
                                            <BsArrowUpRightSquare
                                                size={30}
                                                className='hover:-translate-y-1 transition-transform cursor-pointer' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default ProjectsSection