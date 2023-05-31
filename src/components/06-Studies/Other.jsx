import React from 'react'
import Football from '../../images/football.jpg'
import Basketball from '../../images/basketball.jpg'
import Music from '../../images/music.jpg'

/**
* Egyeb

* Pár kisebb hobbi, melyeket szeretek.
@returns {React.Component} - Other componens
* * Validálva
*/
function Other() {
  return (
    <div className='row p-2 firstBackground'>
        <div className='col-12 col-lg-6 
                        pt-5 px-5 px-lg-0 pt-lg-0 
                        order-2 order-lg-1'>
          <div 
            id="carouselExampleFade" 
            className="carousel slide carousel-fade" 
            data-bs-ride="carousel" 
            data-bs-interval="4000">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img 
                  src={Football} 
                  className="d-block w-100" 
                  alt="foci"/>
              </div>
              <div className="carousel-item">
                <img 
                  src={Basketball} 
                  className="d-block w-100" 
                  alt="kosárlabda"/>
              </div>
              <div className="carousel-item">
                <img 
                  src={Music} 
                  className="d-block w-100" 
                  alt="zenehallgatás"/>
              </div>
            </div>
          </div>
        </div>
        <div className='col-12 col-lg-6 text-center
                      order-1 order-lg-2 mt-3 mt-lg-5'>
            <h3 className='p-2 col-8 mx-auto fs-2 text 
                            secondBackground contact-border'>
                Szeretek még:
            </h3>
            <ul className='fs-5 text list-group col-8 mt-3 
                            mx-auto contact-border'>
              <li className='list-group-item firstBackground 
                              text-center p-2'>
                - Focizni
              </li>
              <li className='list-group-item firstBackground 
                              text-center p-2'>
                - Kosarlabdázni
              </li>
              <li className='list-group-item firstBackground 
                              text-center mb-2 p-2'>
                - Zenét hallgatni
              </li>
            </ul>
        </div>
    </div>
  )
}

export default Other
