import React from 'react'
import heroImg from './assets/hero.svg'
const Hero = () => {
  return ( <section className='hero'>
            <div className='hero-center'>
                <div className='hero-title'>
                    <h1>Tobi Ojumu </h1>
                    <p>
                        FULL STACK SOFTWARE DEVELOPER
                    </p>
                </div> 
            </div>

            <div className='img-container'>
                <img src={heroImg} alt='woman and the browser' className='img' />
            </div>
    

    </section>
  )
}

export default Hero