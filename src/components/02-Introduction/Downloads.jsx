import React from 'react'
const PNG_FILE_URL = 'http://rehaktamas-portfolio.hu/rehak_tamas.png'
const PDF_FILE_URL = 'http://rehaktamas-portfolio.hu/rehak_tamas.pdf'

/**
* Letöltések

* Ez a komponens felel a letölthető dokumentomokért.
* PNG és PDF tormátumban is le lehet tölteni az önéletrajzot
@returns {React.Component} - Downloads componens
* * Validálva
*/
function Downloads() {
    const downloadFileUrl=(url)=> {
        const fileName = url.split('/').pop();
        const aTag = document.createElement('a');
        aTag.href = url;
        aTag.setAttribute('download', fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }
  return (
    <div className='col-12 pb-3 text-center'>
        Önéltrajz letöltés:
      <button 
        className='btn btn-outline-secondary mx-3 p-2'
        onClick={()=> {
            downloadFileUrl(PNG_FILE_URL)
        }}>
        <i className="fa-solid fa-file-image pe-2"></i> PNG
    </button>
    <button 
        className='btn btn-outline-success p-2'
        onClick={()=> {
            downloadFileUrl(PDF_FILE_URL)
        }}>
        <i className="fa-solid fa-file-pdf pe-2"></i> PDF
    </button>
    </div>
  )
}

export default Downloads
