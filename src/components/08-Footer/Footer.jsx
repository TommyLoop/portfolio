import React from 'react'
import logo from '../../images/blacklogo.png'
import Linkedin from '../../images/linkedin2.png'
import Google from '../../images/google.png'
import Github from '../../images/github2.png'
import Phone from '../../images/phone.png'

/**
  * Lábléc
  
  @returns {React.Component} - Footer componens
  * * Validálva
  */
function Footer() {
  return (
    <div className='container-fluid main-nav py-3 m-0'>
        <div className='container d-flex justify-content-center
                        align-items-center  mx-auto row'>
            <div className='col-12 col-md-4 row
                            order-1 order-md-1'>
                <div className='col-6'>
                <a 
                    href="https://accounts.google.com/" 
                    target="_blank"
                    rel="noreferrer">
                    <img 
                        className='img-fluid col-6 p-2' 
                        src={Google} 
                        alt="google" />
                        Google
                </a>
                </div>
                <div className='col-6'>
                <a 
                    href="https://www.linkedin.com/in/tamas-rehak/" 
                    target="_blank"
                    rel="noreferrer">
                    <img 
                        className='img-fluid col-6 p-2' 
                        src={Linkedin} 
                        alt="linkedin" />
                        Linkedin
                </a>
                </div>
            </div>
            <div className='col-12 col-md-4
                            order-3 order-md-2'>
                <img 
                    className='img-fluid col-2 p-2' 
                    src={logo} 
                    alt="logo" /> 
                    Rehák Tamás | portfólió
                <hr />
                <div className='col-12'>
                    Copyright 2023 - Rehák Tamás
                </div>
            </div>
            <div className='col-12 col-md-4 row
                            order-2 order-md-3'>
                <div className='col-6'>
                <a 
                    href="https://github.com/TommyLoop" 
                    target="_blank"
                    rel="noreferrer">
                    <img 
                        className='img-fluid col-6 p-2' 
                        src={Github} 
                        alt="github" />
                        Github
                </a>
                </div>
                <div className='col-6'>
                <a href="tel:+36305726269">
                    <img 
                        className='img-fluid col-6 p-2' 
                        src={Phone} 
                        alt="phone" />
                        Phone
                </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
