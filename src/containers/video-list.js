import React from 'react'
import VideoListItem from '../components/video-list-item'

const VideoList = () => {
    const movies = ['Film11','Film2','Film3','Film4','Film5'];

    return (
   <div>

            <ul>
                {
                    //ici je mets key car react veut qu'on donne une clé à nos elements de tableau
                    movies.map((movie)=> <VideoListItem key={movie} movie={movie} />)
                }


            </ul>

    </div>
      );
};

export default VideoList;