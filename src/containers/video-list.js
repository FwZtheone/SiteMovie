import React from 'react'
import VideoListItem from '../components/video-list-item'

const VideoList = (props) => {
    const {movieList} = props;


    return <div>

        <ul>

            {/*ici je mets key car react veut qu'on donne une clé à nos elements de tableau*/}

            {
                movieList.map((movies) => { return <VideoListItem key={movies.id} movie={movies} callBack={receiveCallBack} />})
            }


        </ul>

    </div>;

    function receiveCallBack(movie){
        props.callBack(movie);


    }
};

export default VideoList;