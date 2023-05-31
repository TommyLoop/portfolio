import React, { useEffect } from 'react'
import WorkplacesImage from '../../images/workplaces.png'
import Antikvarium from '../../images/antik-logo.png'
import Posta from '../../images/posta.jpg'
import Hansa from '../../images/hansa.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

/**
* Munkahelyek

* Munkahelyek bemutatására szolgáló komponens
@returns {React.Component} - Worplaces componens
* * Validálva
*/
function Workplaces() {
  useEffect(()=> {
    Aos.init();
  }, [])
  return (
    <div className="secondBackground mx-0">
      <div className="row py-5 pe-5 pe-lg-0 ps-5 ps-lg-0">
        <div 
          className="workplace-image col-5 d-flex align-items-center"
          data-aos="fade-right"
          data-aos-duration="1000">
        <img 
            src={WorkplacesImage} 
            className="img-fluid d-none d-lg-block" 
            alt="Introduction pictures"/>
        </div>
        <div className="col-lg-7 py-5">
          <div className='text-center p-3'>
            <h2 className='workplace-title parallelogram'>
              Munkahelyek</h2>
          </div>
          <div className="firstBackground 
                          workplace py-5 ps-2 ps-lg-5 row">
            <div className='col-md-3 ps-2 py-3'>
              <h3>2016-2023</h3>
            </div>
            <div className='col-md-9 p-3 row text-start'
                data-aos="fade-left"
                data-aos-duration="1000">
              <img 
                className='d-none d-md-block col-2 img-fluid' 
                src={Antikvarium} 
                alt="Antikvarium logo"/>
              <div className='col-10'>
              <h3 className='d-flex align-items-center secondBackground ps-3'>
                Antikvárium.hu
              </h3>
              <p>Könyvfelvásárló Kft.</p>
              </div>
              <p className='col-5'>
                <i className="fas fa-globe pe-2"></i>Webhely:
              </p>
              <a href="https://www.antikvarium.hu/" 
                className='col-7' 
                rel="noreferrer" 
                target="_blank">
                antikvarium.hu
              </a>
              <p className='col-5'>
                <i className="fas fa-phone pe-2"></i>
                Telefon:
              </p>
              <p className='col-7'>+36 (62) 452-833</p>
              <p className='col-5'>
                <i className="fas fa-user-tie pe-2"></i>
                Pozíció:
              </p>
              <p className='col-7'>Könyvválogató, elektronikus válogató</p>
              <hr />
            </div>
            <div className='col-md-3 ps-2 py-3'>
              <h3>2016</h3>
            </div>
            <div className='col-md-9 p-3 row text-start'
                data-aos="fade-left"
                data-aos-duration="1000">
              <img 
                className='d-none d-md-block col-3 img-fluid' 
                src={Posta} 
                alt="posta logo"/>
              <div className='col-md-9'>
              <h3 className='d-flex align-items-center secondBackground ps-3'>
                Magyar Posta
              </h3>
              <p>Magyar Posta Zrt.</p>
              </div>
              <p className='col-5'>
                <i className="fas fa-globe pe-2"></i>Webhely:
              </p>
              <a href="https://www.posta.hu/" 
                className='col-7' 
                rel="noreferrer" 
                target="_blank">
                posta.hu
              </a>
              <p className='col-5'>
                <i className="fas fa-phone pe-2"></i>
                Telefon:
              </p>
              <p className='col-7'>+36 (62) 623-400</p>
              <p className='col-5'>
                <i className="fas fa-user-tie pe-2"></i>
                Pozíció:
              </p>
              <p className='col-7'>Kézbesítő</p>
              <hr />
            </div>
            <div className='col-md-3 ps-2 py-3'>
              <h3>2013-2016</h3>
            </div>
            <div className='col-md-9 p-3 row text-start'
                data-aos="fade-left"
                data-aos-duration="1000"> 
              <img 
                className='d-none d-md-block col-3 img-fluid' 
                src={Hansa} 
                alt="Hansa logo"/>
              <div className='col-md-9'>
              <h3 className='d-flex align-items-center secondBackground ps-3'>
                Hansa Kontakt
              </h3>
              <p>Hansa-Kontakt Kft.</p>
              </div>
              <p className='col-5'>
                <i className="fas fa-globe pe-2"></i>Webhely:
              </p>
              <a href="http://www.hansakontakt.hu/" 
                className='col-7' 
                rel="noreferrer" 
                target="_blank">
                hansakontakt.hu
              </a>
              <p className='col-5'>
                <i className="fas fa-phone pe-2"></i>
                Telefon:
              </p>
              <p className='col-7'>+36 (62) 558-338</p>
              <p className='col-5'>
                <i className="fas fa-user-tie pe-2"></i>
                Pozíció:
              </p>
              <p className='col-7'>Áruösszekészítő</p>
              <hr />
            </div>
          </div>
        </div>
        <div className="pb-3" id="studies"></div>
      </div>
    </div>
  )
}

export default Workplaces