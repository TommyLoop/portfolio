import React from 'react'
import ImageGallery from 'react-image-gallery';
import '../../index.css'

/**
* Képek listája

* Fényképek melyeket sikerült lencsevégrekanom
* * Validálva
*/
const images = [
    {
        original: require('../../images/photos/005.jpg'),
        thumbnail: require('../../images/photos/005-s99x66.jpg'),
    },
    {
        original: require('../../images/photos/006.jpg'),
        thumbnail: require('../../images/photos/006-s99x66.jpg'),
    },
    {
        original: require('../../images/photos/007.jpg'),
        thumbnail: require('../../images/photos/007-s99x66.jpg'),
    },
    {
      original: require('../../images/photos/004.jpg'),
      thumbnail: require('../../images/photos/004-s99x66.jpg'),
    },
    {
        original: require('../../images/photos/008.jpg'),
        thumbnail: require('../../images/photos/008-s99x66.jpg'),
    },
    {
        original: require('../../images/photos/009.jpg'),
        thumbnail: require('../../images/photos/009-s99x66.jpg'),
    },
    {
        original: require('../../images/photos/010.jpg'),
        thumbnail: require('../../images/photos/010-s99x66.jpg'),
    },
    {
        original: require('../../images/photos/013.jpg'),
        thumbnail: require('../../images/photos/013-s99x66.jpg'),
    },
    {
        original: require('../../images/photos/015.jpg'),
        thumbnail: require('../../images/photos/015-s99x66.jpg'),
    },
    {
        original: require('../../images/photos/017.jpg'),
        thumbnail: require('../../images/photos/017-s99x66.jpg'),
    },
    {
        original: require('../../images/photos/016.jpg'),
        thumbnail: require('../../images/photos/016-s99x66.jpg'),
    },
  ];
  /**
  * Képgaléria
  
  * React-image-gallery könyvtár segítségével
  @returns {React.Component} - Photos componens
  * * Validálva
  */
  class Photos extends React.Component {
    render() {
      return (
        <ImageGallery 
            items={images} 
            thumbnailPosition='left' 
            showBullets='true'
            autoPlay='true'
            slideInterval='4000'
        />
    )}
}

export default Photos
