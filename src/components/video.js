import React from 'react'


// l'url de base de youtube
const BASE_URL = "https://www.youtube.com/embed/";

const Video = ( {videoId}) =>
 <div className ="embed-responsive embed-responsive-16by9">

<iframe  className ="embed-responsive-item" src={`${BASE_URL}${videoId}`}/>



</div>;



export default  Video;


