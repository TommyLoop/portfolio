import React from 'react'
import { Parallax } from 'react-parallax'
import HobbyWall from '../../images/hobbies.jpg'
import Photos from './Photos'
import Filming from './Filming'
import Other from './Other'

/**
* Hobbik

* Egy keretkomponens, mely magába foglalja a hobbijaim.
@returns {React.Component} - Hobies componens
* * Validálva
*/
function Hobbies() {
  return (
    <section className="container">
        <div className='row firstBackground'>
            <Parallax 
                bgImage={HobbyWall} 
                bgImageAlt='hobbies' 
                strength={850}>
                <h2 className='hobbies-h2 text-start'>
                    Hobbik
                </h2>
            </Parallax>
            <div 
                className="accordion firstBackground" 
                id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button 
                        className="accordion-button hobbies-background 
                                    text-light" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#panelsStayOpen-collapseOne" 
                        aria-expanded="true" 
                        aria-controls="panelsStayOpen-collapseOne">
                    <i className="fas fa-camera pe-3"></i>Hobbifotózás
                    </button>
                    </h2>
                    <div 
                        id="panelsStayOpen-collapseOne" 
                        className="accordion-collapse collapse show">
                    <div className="accordion-body row">
                        <div className='col-12 col-lg-10 mx-1 mx-lg-auto'>
                        <Photos />
                        </div>
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button 
                        className="accordion-button collapsed 
                                    hobbies-background text-light" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#panelsStayOpen-collapseTwo" 
                        aria-expanded="false" 
                        aria-controls="panelsStayOpen-collapseTwo">
                    <i className="fas fa-video pe-3"></i>Filmezés, Videóvágás
                    </button>
                    </h2>
                    <div 
                        id="panelsStayOpen-collapseTwo" 
                        className="accordion-collapse collapse">
                    <div className="accordion-body mx-0">
                        <Filming />
                    </div>
                    </div>
                </div>
                <div className="accordion-item" id="contact">
                    <h2 className="accordion-header">
                    <button 
                        className="accordion-button collapsed 
                                    hobbies-background text-light" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#panelsStayOpen-collapseThree" 
                        aria-expanded="false" 
                        aria-controls="panelsStayOpen-collapseThree">
                    <i className="fas fa-hand-peace pe-3"></i>Egyéb
                    </button>
                    </h2>
                    <div 
                        id="panelsStayOpen-collapseThree" 
                        className="accordion-collapse collapse">
                    <div className="accordion-body">
                        <Other />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hobbies
