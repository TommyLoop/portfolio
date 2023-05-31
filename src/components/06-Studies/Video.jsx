import React from 'react';
import { Player, BigPlayButton } from 'video-react';
import '../../../node_modules/video-react/dist/video-react.css'

/**
  * Videólejátszó komponens
  
  * Többször felhasználható segédkomponens, mely vár 
  * egy poster-kép és egy video url paramétert.
  @param {string} poster - a videó posterképe
  @param {string} src - a videó url-je
  @returns {React.Component} - Studies componens
  * * Validálva
  */
const Video = (props)=> {
  return (
    <Player
      poster={props.poster}
      src={props.src}>
        <BigPlayButton position='center' />
    </Player>

  );
};
export default Video