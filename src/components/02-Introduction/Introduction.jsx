import React, { useEffect , useRef }from 'react'
import { init } from 'ityped'
import Introduction from '../../images/introduction.jpg'
import Downloads from './Downloads';

/**
* Bemutatkozás

* Rövid bemutatkozás, kapcsolati linkkel és 
* önéletrajz letöltési lehetőséggel
@returns {React.Component} - Introduction componens
* * Validálva
*/
function SecondPageIntroduction() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 2000,
            backSpeed: 60,
            strings: ["Frontend fejlesztő" , "Webdesigner"],
        })
    })
  return (
    <section className="container firstBackground pb-2"
            id="introduction">
        <div className="row">
            <div className='col-12 col-lg-7 introduction 
                         order-2 order-lg-1 pb-2 pt-sm-5 ps-sm-5'>
                <h1 
                    className='ps-lg-5 mt-0 mt-lg-5 pt-0 pt-lg-5 pb-sm-3 
                                text-center fs-1 text'>
                    Rehák Tamás
                </h1>
                <h4
                    className='ps-lg-5 pb-3 fs-4 text-center'>
                    <span ref={textRef}></span>
                </h4>
                <p 
                    className='ps-lg-5 pt-3 fs-5'>
                    Rehák Tamás vagyok, szeretnék karriert váltani. 
                    Nagyon érdekel a programozás világa, elsősorban 
                    frontend terület, de a backend és a mobil fejlesztés
                    is csábító. A Multimédia- fejlesztő és Webdesigner 
                    végzetség mellett önállóan képzem magam. 
                </p>
                <div 
                    className='d-flex align-items-center 
                            justify-content-center mb-3'>
                    <a href="#contact">
                        <button 
                            type="button" 
                            className="btn btn-lg btn-outline-info
                                        ms-5 mt-3 me-2 mb-3 ">
                            Kapcsolat
                        </button>
                     </a>
                    <a href="https://github.com/TommyLoop"
                        target="_blank"
                        rel="noreferrer">
                        <i className="fs-3 p-2 fa-brands fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/tamas-rehak/"
                        target="_blank"
                        rel="noreferrer">
                        <i className="fs-3 p-2 fa-brands fa-linkedin"></i>
                    </a>
                </div>
            <Downloads />
            </div>
            <div className='col-12 col-lg-5 order-1 order-lg-2 
                            d-flex d-lg-block justify-content-end 
                            align-items-top px-0'>
                <img 
                    src={Introduction} 
                    className="img-fluid" 
                    alt="Introduction pictures"/>
                </div>   
        </div>
        <div className='firstBackground skillSum my-5 px-2'>
            <div className='row d-flex justify-content-evenly text-center'
            >
            <div className='col-3 col-lg-1 p-1'>
                <i className="fa-brands fa-html5"></i>
            </div>
            <div className='col-3 col-lg-1 p-1'>
                <i className="fa-brands fa-css3-alt"></i>
            </div>
            <div className='col-3 col-lg-1 p-1'>
                <i className="fa-brands fa-sass"></i>
            </div>
            <div className='col-3 col-lg-1 p-1'>
                <i className="fa-brands fa-js"></i>
            </div>
            <div className='col-3 col-lg-1 p-1'>
                <i className="fa-brands fa-react"></i>
            </div>
            <div className='col-3 col-lg-1 p-1'>
                <i className="fa-brands fa-php"></i>
            </div>
            <div className='col-3 col-lg-1 p-1'>
                <i className="fa-brands fa-github"></i>
            </div>
            <div className='col-3 col-lg-1 p-1'>
                <i className="fa-brands fa-docker"></i>
            </div>
        </div>
    </div>
        <div id="skills"></div>
  </section>
  )
}

export default SecondPageIntroduction
