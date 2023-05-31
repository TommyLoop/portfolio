import React, {useEffect } from 'react'
import EmailSender from './EmailSender'
import Cube from './Cube'
import Aos from 'aos'
import 'aos/dist/aos.css'


/**
* Kapcsolat

* Kapcsolati információk és email küldési lehetőség.
* TODO  - Email küldő útvonal kiépítése a backend-en
* TODO  - CRON beállítás
@returns {React.Component} - Contact componens
* * Validálva
*/
function Contact() {
  useEffect(()=> {
    Aos.init();
  }, [])
  return (
    <div className='container firstBackground 
                     row m-0 p-0'>
      <div className="col-12 p-5 text-center" >
        <div className="parallelogram">
          <h3 className="skills-title">Kapcsolat</h3>
        </div>
      </div>
      <div 
        className='col-12 col-lg-6 px-5 pt-5 pb-3'
        data-aos="fade-right"
        data-aos-duration="1000">
          <h4 className='secondBackground p-2
                        d-flex align-items-center contact-border'>
            <i className="display-5 fas fa-phone ps-2 pe-4"></i> 
              Telefonszám:
          </h4>
          <p className='fs-5 text pt-2 ps-3'> +3630-572-62-69
          <a href="tel:+36305726269" className='px-3'>
            Hívás
          </a>
          </p>
          <h4 className='secondBackground p-2
                        d-flex align-items-center contact-border'>
            <i className="display-5 far fa-envelope ps-2 pe-4"></i> 
            E-mail:
          </h4>
          <p className='fs-5 text ps-3 pt-2'>tommyloop1983@gmail.com</p>
      </div>
      <div 
        className='col-12 col-lg-6 px-5 pt-5 pb-3'
        data-aos="fade-left"
        data-aos-duration="1000">
          <h4 className='secondBackground p-2
                        d-flex align-items-center contact-border'>
            <i className="display-5 fab fa-linkedin ps-2 pe-4"></i> 
            Linkedin:
          </h4>
          <p className='fs-5 text pt-2'> 
          <a 
            href="https://www.linkedin.com/in/tamas-rehak/" 
            className='px-3'
            target="_blank"
            rel="noreferrer"
          >
            https://www.linkedin.com/in/tamas-rehak/
          </a>
          </p>
          <h4 className='secondBackground p-2
                        d-flex align-items-center contact-border'>
            <i className="display-5 fab fa-github ps-2 pe-4"></i>
            Github:
          </h4>
          <p className='fs-5 text pt-2'> 
          <a 
            href="https://github.com/TommyLoop" 
            className='px-3'
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/TommyLoop
          </a>
          </p>
        </div>
        <div className='col-12 row contact-background  
                        d-flex align-items-center m-0 pb-4'>
          <div 
            className='col-12 col-lg-7 order-2 order-lg-1 p-1'>
              <EmailSender />
          </div>      
          <div 
            className='col-12 col-lg-5 order-1 order-lg-2 mx-auto p-5'
            data-aos="fade-left"
            data-aos-duration="1000">
              <Cube />
          </div>
        </div> 
    </div>
  )
}

export default Contact
