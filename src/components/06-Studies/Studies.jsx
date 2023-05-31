import React, { useEffect }from 'react'
import StudiesCorner from '../../images/studies.jpg'
import Certificate from '../../images/certificate.svg'
import Aos from 'aos'
import 'aos/dist/aos.css'

 /**
  * Tanulmányok
  
  * Itt találhatóak az iskolák és szakmák, melyeket megszereztem
  @returns {React.Component} - Studies componens
  * * Validálva
  */
function SecondPageStudies() {
  useEffect(()=> {
    Aos.init();
  }, [])
  return (
    <div className='firstBackground pb-5 row m-0'>
      <div className='d-none d-lg-block col-lg-4 p-0'>
        <img 
          className='img-fluid' 
          src={StudiesCorner} 
          alt='studies corner' />
      </div>
      <div className='col-12 col-lg-8 pt-5 row'>
        <div className="parallelogram py-2">
          <h2 className='studies-title text-center'>
            Tanulmányok
          </h2>
        </div>
        <div className='col-12 col-lg-8 pt-5 p-4 text-start'>
          <h3 className='fs-5 text firstBackground '>
          Néhány tanfolyam mellett autodidakta módon 
          képzem magam lassan két éve. Frontend terület érdekel a leginkább, 
          de a backend világa is csábító. Egyre több nyelv, illetve könyvtár 
          haszálatát szeretném még elsajátítani. 
          </h3>
          <h4 className='fs-2 text p-4 text-center fst-italic'>
            LifeLong Learning
          </h4>
        </div>
        <div 
          className='col-4 col-lg-4 mx-auto'
          data-aos="flip-left"
          data-aos-duration="1000">
          <img 
            className='img-fluid p-3' 
            src={Certificate} 
            alt='certificate' />
        </div>
      </div>
      <div className='col-12 row p-2'>
        <div 
          className='col-12 col-xl-6 row py-2'
          data-aos="fade-right"
          data-aos-duration="1000">
          <div className="col-md-4 col-xl-4 d-flex align-items-center 
                        justify-content-end ">
            <i className="fas fa-diamond skills-diamond1 
                        d-none d-md-block"></i>
          </div>
          <div className='col-12 col-md-8 ps-5 text-start'>
            <h2 className='display-5 text-center p-2'>2014-2015</h2>
            <h3 className='secondBackground contact-border p-2'>
              IEC International Education Center Kft.
            </h3>
            <p className='p-3 fs-5 text'>
              Multimédia – fejlesztő és Webdesigner
            </p>
          </div>
        </div>
        <div 
          className='col-12 col-xl-6 row py-2'
          data-aos="fade-left"
          data-aos-duration="1000">
          <div className="col-md-4 col-xl-4 d-flex align-items-center 
                        justify-content-end ">
            <i className="fas fa-diamond skills-diamond2 
                        d-none d-md-block"></i>
          </div>
          <div className='col-12 col-md-8 ps-5 text-start'>
          <h2 className='display-5 text-center p-2'>2005-2007</h2>
            <h3 className='secondBackground contact-border p-2'>
              MIOK József Nádor Gimnázium és Szakképző Iskola
            </h3>
            <p className='p-3 fs-5 text'>
              Pénzügyi-számviteli ügyintéző
            </p>
          </div>
        </div>
        <div 
          className='col-12 col-xl-6 row py-2'
          data-aos="fade-right"
          data-aos-duration="1000">
          <div className="col-md-4 col-xl-4 d-flex align-items-center 
                        justify-content-end ">
            <i className="fas fa-diamond skills-diamond4 
                        d-none d-md-block"></i>
          </div>
          <div className='col-12 col-md-8 ps-5 text-start'>
            <h2 className='display-5 text-center p-2'>2003-2005</h2>
            <h3 className='secondBackground contact-border p-2'>
              Katedra Alapítványi Szakközépiskola
            </h3>
            <p className='px-3 pt-3 fs-5 text'>
              Gazdasági Informatikus I. ,
            </p>
            <p className='px-3 fs-5 text'>Valuta- deviza ügyintéző</p>
          </div>
        </div>
        <div 
          className='col-12 col-xl-6 row py-2'
          data-aos="fade-left"
          data-aos-duration="1000">
          <div className="col-md-4 col-xl-4 d-flex align-items-center 
                        justify-content-end ">
            <i className="fas fa-diamond skills-diamond3 
                        d-none d-md-block"></i>
          </div>
          <div className='col-12 col-md-8 ps-5 text-start'>
          <h2 className='display-5 text-center p-2'>1998-2002</h2>
            <h3 className='secondBackground contact-border p-2'>
              Eötvös József Gimnázium
            </h3>
            <p className='p-3 fs-5 text'>Érettségi Bizonyítvány</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondPageStudies
