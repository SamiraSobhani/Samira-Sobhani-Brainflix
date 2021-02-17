import React, { Component } from "react";


function VideoList(props){



    return(
        <ul className="videoList container">
            <h5 className="videoList__header">NEXT VIDEO</h5>
            {props.videos
            .filter((video)=> video.id !== props.currentVideoId)
            .map((video) =>(
            <li className="videoList__items" key={video.id} onClick={() =>{ props.updateVideoId(video.id)}}>
                
                <img className="videoList__img" src={video.image} alt=""/>
                <div className="videoList__details">
                    <h3 className="videoList__title" >{video.title}</h3>
                    <p className="videoList__channel">{video.channel}</p>
                </div>
            </li>            
             ))}
        </ul>
     
    );
}
export default VideoList;