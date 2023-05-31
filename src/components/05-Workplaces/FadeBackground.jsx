import React from 'react'

/**
* Átfedés

* Két komponens közötti átfedő háttérkomponens
@returns {React.Component} - FadeBackground componens
* * Validálva
*/
function FadeBackground() {
  return (
    <div className="firstBackground" id="workplaces">
        <svg xmlns="http://www.w3.org/2000/svg" 
             viewBox="0 0 1440 120">
          <path 
            fill="#0280a4" 
            fillOpacity="1" 
            d="M0,12L1440,256L1440,120L0,120Z">
          </path>
        </svg>
    </div>
  )
}

export default FadeBackground
