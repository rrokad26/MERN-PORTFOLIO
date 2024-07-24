import React from 'react'
import SectionTitle from '../../components/SectionTitle'

function About() {
    return (
        <div>
            <SectionTitle title="About" />

            <div className='flex w-full items-center'>
                <div className='h-[70vh] w-1/2'>
                    <img src={require('../../developer.gif')} alt="loading..." />
                </div>

                <div className='flex flex-col gap-5 w-1/2'>
                    <p className='text-white'>
                        Hello! My name is Rushi Rokad. I enjoy creating things that lives on the internet. My interest is web development started back in 2020.
                    </p>

                    <p className='text-white'>
                    Hello! My name is Rushi Rokad. I enjoy creating things that lives on the internet. My interest is web development started back in 2020.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
