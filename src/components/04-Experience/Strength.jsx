import React, { useEffect } from 'react'
import { Parallax } from 'react-parallax'
import teamwork from '../../images/team.svg'
import creative from '../../images/creative.svg'
import fastlearn from '../../images/fastlearn.svg'
import accurate from '../../images/accurate.svg'
import Background from '../../images/strength-background2.jpeg'
import Aos from 'aos'
import 'aos/dist/aos.css'


/**
* Erősségek

* Pár illusztráció az erősség bemutatására
@returns {React.Component} - Strenght componens
* * Validálva
*/
function Strength() {
    useEffect(()=> {
        Aos.init();
      }, [])
  return (
    <section className="container">
    <div className='row firstBackground'>
            <Parallax 
                bgImage={Background} 
                bgImageAlt='background' 
                strength={850}>
                <h2 className='strength-h2 p-2 text-end'>
                    Erősségek
                </h2>
            </Parallax>
        <div className='row d-flex justify-content-evenly'>
            <div className='col-3 px-auto'>
                <div className='diamond'></div>
            </div>
            <div className='col-3 px-auto'>
                <div className='diamond'></div>
            </div>
            <div className='col-3 px-auto'>
                <div className='diamond'></div>
            </div>
            <div className='col-3 px-auto d-none d-md-block'>
                <div className='diamond'></div>
            </div>
        </div>
        <div className='strength-content'>
            <div className='row m-2 p-2d-flex align-items-end'>
                <div 
                    className='col-8 col-md-6 col-lg-3 
                                mx-auto card
                                mb-4 mb-lg-0 p-3'
                    data-aos='flip-down'
                    data-aos-duration="2000">
                   <img
                    className='img-fluid'
                    src={teamwork}
                    alt='teamwork'
                    />
                    <h3 className='p-3 fs-4 text  text-center'>
                        Csapatmunka
                    </h3>
                </div>
                <div 
                    className='col-8 col-md-6 col-lg-3 
                                mx-auto card
                                mb-4 mb-lg-0 p-3'
                    data-aos='flip-down'
                    data-aos-duration="2000">
                   <img
                    className='img-fluid'
                    src={creative}
                    alt='creative'
                    />
                    <h3 className='p-3 fs-4 text text-center'>
                        Kreatív
                    </h3>
                </div>
                <div 
                   className='col-8 col-md-6 col-lg-3 
                                mx-auto card
                                mb-4 mb-md-0 p-3'
                    data-aos='flip-down'
                    data-aos-duration="2000">
                   <img
                    className='img-fluid'
                    src={fastlearn}
                    alt='fast learn'
                    />
                    <h3 className='p-3 fs-4 text text-center'>
                        Gyors tanulás
                    </h3>
                </div>
                <div 
                  className='col-8 col-md-6 col-lg-3 
                                mx-auto card
                                mb-4 mb-md-0 p-3'
                    data-aos='flip-down'
                    data-aos-duration="2000">
                   <img
                    className='img-fluid'
                    src={accurate}
                    alt='accurate'
                    />
                    <h3 className='p-3 fs-4 text text-center'>
                        Pontos, alapos
                    </h3>
                </div>
            </div>
            <div id="workplaces"></div>
        </div>
    </div>
    </section>
  )
}

export default Strength
