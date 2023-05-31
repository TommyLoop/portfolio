import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

/**
* Szaktudás

* Kis illusztráció a szakmai tudásról
@returns {React.Component} - Skills componens
* * Validálva
*/
function SecondPageSkills() {
  useEffect(()=> {
    Aos.init();
  }, [])
  return (
    <section className="container mx-0">
    <div className="row firstBackground skills pt-2 p-0">
      <div className="col-12 p-5 text-center" >
        <div className="parallelogram">
          <h3 className="skills-title">Szaktudás</h3>
        </div>
      </div>
        <div className="col-md-4 col-lg-2 d-flex align-items-center 
                        justify-content-end ">
          <i className="fas fa-diamond skills-diamond1 
                        d-none d-md-block 
                        pe-lg-0 pe-xl-3 pe-xxl-5"></i>
        </div>
        <div 
          className="col-md-8 col-lg-10
                      text-start ps-5 ps-xl-1 pb-5"
          data-aos="flip-down"
          data-aos-duration="2000">
          <h3 className="p-2 webdesigner">Webdesigner:</h3>
          <p>
            <i className="fab fa-html5 pe-2"></i>HTML: 
            <i className="fas fa-square-full ps-3 pe-1"></i>
            <i className="fas fa-square-full p-1"></i>
            <i className="fas fa-square-full p-1"></i>
            <i className="fas fa-square-full p-1"></i>
            <i className="fas fa-square-full p-1"></i>
          </p>
          <p>
            <i className="fab fa-css3-alt pe-2"></i>CSS: 
            <i className="fas fa-square-full ps-3 pe-1"></i>
            <i className="fas fa-square-full p-1"></i>
            <i className="fas fa-square-full p-1"></i>
            <i className="fas fa-square-full p-1"></i>
            <i className="fas fa-square-full p-1"></i>
          </p>
          <p>
            <i className="fab fa-sass pe-2"></i>SASS: 
            <i className="fas fa-square-full ps-3 pe-1"></i>
            <i className="fas fa-square-full p-1"></i>
            <i className="fas fa-square-full p-1"></i>
            <i className="fas fa-square-full p-1"></i>
            <i className="fas fa-square-full p-1"></i>
          </p>
          <p>
            <i className="fab fa-bootstrap pe-2"></i>BOOTSTRAP: 
            <i className="fas fa-square-full ps-3 pe-1"></i>
            <i className="fas fa-square-full p-1"></i>
            <i className="fas fa-square-full p-1"></i>
            <i className="fas fa-square-full p-1"></i>
            <i className="fas fa-square-full p-1"></i>
          </p>
        </div>
        <div className="col-md-4 col-lg-5 col-xl-4 d-flex align-items-center
                        justify-content-end pe-lg-5 pe-xl-0">
          <i className="fas fa-diamond skills-diamond2
                        d-none d-md-block"></i>
        </div>
        <div 
          className="col-md-8 col-lg-7 col-xl-8 
                     ps-5 ps-lg-0 ps-xl-5 pb-5
                     text-start"
          data-aos="flip-down"
          data-aos-duration="2000">
          <h3 className="p-2 frontend">Frontend:</h3>
          <p>
            <i className="fab fa-js-square pe-2"></i>JAVASCRIPT: 
            <i className="fas fa-square-full ps-3 pe-1"></i>
            <i className="fas fa-square-full p-1"></i>
            <i className="fas fa-square-full p-1"></i>
            <i className="fas fa-square-full p-1"></i>
            <i className="far fa-square-full p-1"></i>
          </p>
          <p>
            <i className="fab fa-react pe-2"></i>REACT: 
            <i className="fas fa-square-full ps-3 pe-1"></i>
            <i className="fas fa-square-full p-1"></i>
            <i className="fas fa-square-full p-1"></i>
            <i className="far fa-square-full p-1"></i>
            <i className="far fa-square-full p-1"></i>
          </p>
          <p>
            <i className="fab fa-docker pe-2"></i>DOCKER: 
            <i className="fas fa-square-full ps-3 pe-1"></i>
            <i className="fas fa-square-full p-1"></i>
            <i className="fas fa-square-full p-1"></i>
            <i className="far fa-square-full p-1"></i>
            <i className="far fa-square-full p-1"></i>
          </p>
          <p>
            <i className="fab fa-github pe-2"></i>GITHUB: 
            <i className="fas fa-square-full ps-3 pe-1"></i>
            <i className="fas fa-square-full p-1"></i>
            <i className="fas fa-square-full p-1"></i>
            <i className="fas fa-square-full p-1"></i>
            <i className="far fa-square-full p-1"></i>
          </p>
        </div>
        <div className="col-md-4 col-lg-7 d-flex align-items-center 
                        justify-content-end">
          <i className="fas fa-diamond d-none d-md-block 
                        skills-diamond3 pe-xl-5"></i>
        </div>
        <div 
          className="col-md-8 col-lg-5 text-start 
                    ps-5 ps-xl-4 pb-5"
          data-aos="flip-down"
          data-aos-duration="2000">
          <h3 className="p-2 backend">Backend:</h3>
          <p>
            <i className="fas fa-database pe-2"></i>MySQL: 
            <i className="fas fa-square-full ps-3 pe-1"></i>
            <i className="fas fa-square-full p-1"></i>
            <i className="fas fa-square-full p-1"></i>
            <i className="far fa-square-full p-1"></i>
            <i className="far fa-square-full p-1"></i>
          </p>
          <p>
            <i className="fab fa-php pe-2"></i>PHP: 
            <i className="fas fa-square-full ps-3 pe-1"></i>
            <i className="fas fa-square-full p-1"></i>
            <i className="fas fa-square-full p-1"></i>
            <i className="fas fa-square-full p-1"></i>
            <i className="far fa-square-full p-1"></i>
          </p>
          <p>
            <i className="fab fa-node-js pe-2"></i>NODEJS: 
            <i className="fas fa-square-full ps-3 pe-1"></i>
            <i className="fas fa-square-full p-1"></i>
            <i className="far fa-square-full p-1"></i>
            <i className="far fa-square-full p-1"></i>
            <i className="far fa-square-full p-1"></i>
          </p>
        </div>
    <div className="pb-lg-5" id="experience"></div>
    </div>
    </section>
  )
}

export default SecondPageSkills
