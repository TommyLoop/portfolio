import React, {useEffect } from 'react'
import ExperienceImage from '../../images/experience1.jpg'
import DiamondImage from '../../images/experience1.png'
import Viragtunder from '../../images/carousel.jpg'
import WeatherApp from './WeatherApp'
import Aos from 'aos'
import 'aos/dist/aos.css'

/**
* Tapasztalatok

* Kisebb nagyobb projektek bemutatása
@returns {React.Component} - Experience componens
* * Validálva
*/
function Experience() {
    useEffect(()=> {
        Aos.init();
      }, [])
  return (
    <section className="container">
        <div className='row firstBackground'>
            <div className='d-none d-lg-block col-6 p-0'>
                <div className="rel">
                    <img className='img-fluid'
                        src={ExperienceImage}
                        alt="experience"/> 
                    <div 
                        className="abs"
                        data-aos="fade-right"
                        data-aos-duration="1000">
                        <img className='img-fluid'
                            src={DiamondImage}
                            alt="diamond"/> 
                    </div>
                </div>
            </div>
            <div className='col-lg-6 row p-0'>
                <div className="col-12 p-5 text-center" >
                    <h3 className="experience-title parallelogram mb-2">
                        Tapasztalatok
                    </h3>
                    <p className='d-flex align-items-center 
                                    justify-content-center'>
                        Github:
                        <a 
                            href="https://github.com/TommyLoop/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="display-5 fab fa-github p-2"></i>
                        </a>
                    </p>
                    <a 
                        className="card hover-zoom border-shadow p-3"
                        data-aos="flip-up"
                        data-aos-duration="1000"
                        href="https://rt-teszt-hu.hu" 
                        target="_blank"
                        rel="noreferrer">
                            <img 
                                className="card-img-top" 
                                src={Viragtunder} 
                                alt="Viragtunder"
                            />
                    </a>
                    <div 
                        data-aos="flip-down" 
                        data-aos-duration="1000">
                    <WeatherApp />
                    </div>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Experience
