import React from 'react'
import Image from 'next/image'

const skills = [
    {skill: 'HTML'},
    {skill: 'CSS'},
    {skill: 'JavaScript'},
    {skill: 'Typescript'},
    {skill: 'React'},
    {skill: 'NextJS'},
    {skill: 'Tailwind CSS'},
    {skill: 'Git'},
    {skill: 'Github'}
]

const AboutSection = () => {    
    return (
        <section id='about'>
        <div className='my-12 pb-12 md:pt-16 md:pb-48'>
            <h2 className='text-center font-bold text-4xl'>
                About Me
                <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded' />
            </h2>
            <div className='flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10'>
                <div className='md:w-1/2'>
                    <h3 className='text-center text-2xl font-bold mb-6 md:text-left'>Get to know me!</h3>
                    <p>
                    My name is Adrián Serrano, and consider myself a 
                    <span className='font-bold'> solution designer</span>, 
                    <span className='font-bold'> problem solver</span>, and a <span className='font-bold'> highly motivated</span> and <span className='font-bold'> hardworking</span> individual, who loves math, science, and knowledge.
                    </p>
                    <br />

                    <p>
                    You can know my soft-skills such as attention to detail, critical thinking, discipline, fast learning, logical reasoning, responsibility, self-taught and teamwork. Good interpersonal and organizational skills. Strong organizational and prioritization skills along with keen attention to detail.
                    </p>
                    <br />
                </div>
                <div className='md:w-1/2'>
                    <h3 className='text-center text-2xl font-bold mb-6 md:text-left'>My Skills</h3>
                    
                    <div className='flex flex-wrap justify-center md:justify-start mb-2'>
                        {skills.map((item, id) => {
                            return <p key={id} className='bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold'>{item.skill}</p>
                        })}
                    </div>

                    <Image src='/about.jpg' alt='About image' width={325} height={325} className='hidden md:block md:bottom-4 md:left-32 md:z-0'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection