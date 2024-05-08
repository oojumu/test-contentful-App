import React from 'react'
import heroImg from './assets/hero.svg'
const Hero = () => {
  return ( <section className='hero'>
            <div className='hero-center'>
                <div className='hero-title'>
                    <h1>Contentful CMS</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Est lorem ipsum dolor sit. Gravida quis blandit turpis cursus in hac habitasse. 
                        Laoreet suspendisse interdum consectetur libero id faucibus nisl. Sit amet consectetur adipiscing elit pellentesque habitant. 
                        In nibh mauris cursus mattis. Ante in nibh mauris cursus mattis molestie a iaculis. Cursus vitae congue mauris rhoncus.
                        Enim nec dui nunc mattis. Mattis enim ut tellus elementum sagittis vitae et leo. Sem viverra aliquet eget sit. 
                        Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Sollicitudin ac orci phasellus egestas tellus 
                        rutrum tellus. Arcu non sodales neque sodales ut etiam sit amet.
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