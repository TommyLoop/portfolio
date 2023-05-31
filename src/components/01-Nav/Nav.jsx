import React from 'react'
import logo from '../../images/blacklogo.png'
import MuiTabs from './MuiTabs'

/**
* Navigációs sáv

* Bemutatkozás, Tanulmányok, Szaktudás, 
* Tapasztalat és Kapcsolat oldalakkal.
* TODO Linkedin link frissítése
@returns {React.Component} - Nav componens
* * Validálva
*/
function Nav() {
  return (
    <nav 
        className="container-fluid main-nav 
                    navbar navbar-expand-lg sticky-top">
        <div className="container ">
            <img 
                className='img-fluid navbar-title 
                            logoImage p-2 me-2 ' 
                src={logo}
                alt='logo'/>
                Rehák Tamás | portfólió
            <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNav" 
                aria-controls="navbarNav" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div 
                className="collapse navbar-collapse" 
                id="navbarNav">
                <MuiTabs />
                <div className='d-block d-xl-none'>
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <a 
                                className="nav-link text-center" 
                                aria-current="page" 
                                href="/#introduction">
                                BEMUTATKOZÁS
                            </a>
                        </li>
                        <li className="nav-item">
                            <a 
                                className="nav-link text-center" 
                                aria-current="page" 
                                href="/#skills">
                                SZAKTUDÁS
                            </a>
                        </li>
                        <li className="nav-item">
                            <a 
                                className="nav-link text-center" 
                                aria-current="page" 
                                href="/#experience">
                                TAPASZTALAT
                            </a>
                        </li>
                        <li className="nav-item">
                            <a 
                                className="nav-link text-center" 
                                aria-current="page" 
                                href="/#workplaces">
                                MUNKAHELYEK
                            </a>
                        </li>
                        <li className="nav-item">
                            <a 
                                className="nav-link text-center" 
                                aria-current="page" 
                                href="/#studies">
                                TANULMÁNYOK
                            </a>
                        </li>
                        <li className="nav-item mb-3 mb-lg-0">
                            <a 
                                className="nav-link text-center" 
                                aria-current="page" 
                                href="/#contact">
                                KAPCSOLAT
                            </a>
                        </li>  
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Nav
