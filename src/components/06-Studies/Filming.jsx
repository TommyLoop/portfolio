import React from "react";
import "../../index.css"
import Poster1 from '../../images/szeged-poster.jpg'
import Poster2 from '../../images/celazut-poster.jpg'
import Poster3 from '../../images/ppg-poster.jpg'
import Film01 from '../../videos/szeged.mp4'
import Film02 from '../../videos/acelazut.mp4'
import Film03 from '../../videos/ppg.mp4'
import FadeOne from '../../images/line1.jpg'
import FadeTwo from '../../images/line2.jpg'
import Music from '../../images/sound.png'
import Video from "./Video";

/**
* Filmezés

* Pár rövid kisvideó a filmezés hobbimról
@returns {React.Component} - Filming componens
* * Validálva
*/
function Filming() {
  return (
    <div className="firstBackground row m-3">
      <div className="col-12 row">
        <div className="col-12 col-lg-10 col-xl-7 
                        p-3 sm-xl-4 mb-5 mb-xl-5 
                        mx-auto my-auto
                        contact-border 
                        order-2 order-xl-1">
          <Video 
            poster={Poster2} 
            src={Film02}/>
        </div>
        <div className="col-10 col-lg-8 col-xl-4 
                        mx-auto mx-lx-0 
                        p-4 p-lg-0 
                        d-flex align-items-center
                        order-1 order-xl-2">
          <div>
            <h3 className="secondBackground 
                          fs-4 text text-center 
                          contact-border p-2">
              A cél: az út....
            </h3>
            <p className="fs-5 text pt-4 p-2">
              Szeretek biciklizni, és ezért gondoltam készítek 
              egy kis zenés összeállítást arról, hogy milyen jó 
              is tud lenni a bicajozás.
            </p>
            <div className="col-8 row mx-auto">
                <img 
                  className="img-fluid col-2 col-xl-4 py-3 px-0" 
                  src={Music} 
                  alt="Music" />
                <p className="col-5 fs-4 text text-left
                              d-flex align-items-center 
                              ps-0 pt-2">
                  Zene:
                </p>
            </div>
              <p className="fs-5 text text-center">
                Matt Simons - Catch & Release
              </p>
          </div>
        </div>
      </div>
      <div className="col-12 m-0 p-0 ">
        <img 
          className="img-fluid" 
          src={FadeOne} 
          alt="Fade One" />
      </div>
      <div className="col-12 filmingSecondBackground row 
                      mx-0 px-lg-0 
                      pb-4 pb-lg-0">
        <div className="col-10 col-lg-8 col-xl-4 
                        mx-auto mx-xl-0 
                        p-4 row">
            <h3 className="firstBackground fs-4 text text-center 
                           contact-border p-2">
                Szeged
            </h3>
            <p className="fs-5 text pt-4 p-2 mb-0">
              A szülővárosomról, Szegedről egy kis 
              videó 100-200 FPS és timelapse használatával. 
            </p>
            <div className="col-8 row mx-auto">
              <img 
                className="img-fluid col-2 col-xl-4 py-3 px-0" 
                src={Music} 
                alt="Music" />
              <p className="col-5 fs-4 text  text-left 
                            d-flex align-items-center
                            ps-0 pt-2">
                Zene:
              </p>
            </div>
            <p className="fs-5 text text-center">
              Wild Wonder, Caleb Etheridge – Gentle Waters
            </p>
        </div>
        <div 
          className="col-12 col-lg-10 col-xl-7
                    firstBackground contact-border
                    mx-auto my-auto
                    mb-5 mb-xl-0 p-3">
            <Video 
              poster={Poster1} 
              src={Film01}/>
        </div>
      </div>
      <div className="col-12 mx-0 px-0 ">
        <img 
          className="img-fluid" 
          src={FadeTwo} 
          alt="Fade Two" />
      </div>
      <div className="col-12 row">
        <div className="col-12 col-lg-10 col-xl-7
                        order-2 order-xl-1 p-3
                        contact-border
                        mx-auto my-auto m-4">
          <Video 
            poster={Poster3} 
            src={Film03}/>
        </div>
        <div className="col-10 col-lg-8 col-xl-4 
                        mx-auto mx-xl-0 
                        order-1 order-xl-2  p-4">
          <h3 className="secondBackground fs-4 text text-center
                        contact-border p-2">
              PPG - How to made...
          </h3>
          <p className="fs-5 text pt-4 p-2">
            Egy élőszereplős képregény lefilmezésében vettem részt. 
            Több kisvideó is készült, de itt most a "hogyan készült" 
            videó látható. 
          </p>
          <div className="col-8 row mx-auto">
              <img 
                className="img-fluid col-2 col-lg-4 py-3 px-0" 
                src={Music} 
                alt="Music" />
              <p className="col-5 fs-4 text text-left
                            d-flex align-items-center
                            ps-0 pt-2">
                  Zene:
              </p>
          </div>
            <p className="fs-5 text text-center">
              Flo Rida - Club Can't Handle Me ft. David Guetta
            </p>
        </div>
        </div>
    </div>
  );
}
export default Filming
