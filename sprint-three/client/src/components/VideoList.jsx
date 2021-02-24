import React, { Component } from "react";
import {Link} from "react-router-dom";

function VideoList(props){

    const MyStyle={
        color:"white",
        textDecoration:"none"
      };

    return(
        <ul className="videoList container">
            <h5 className="videoList__header">NEXT VIDEO</h5>
            {props.videos
            .filter((video)=> video.id !== props.currentVideoId)
            .map((video) =>(
            <li  key={video.id} onClick={() =>{ props.updateVideoId(video.id)}}>
                <Link className="videoList__items" style={{textDecoration:"none"}}  to={`/videos/${video.id}`}>
                <img className="videoList__img" src={video.image} alt=""/>
                <div className="videoList__details" >
                    <h3 className="videoList__title" >{video.title}</h3>
                    <p className="videoList__channel">{video.channel}</p>
                </div>
                </Link>
            </li>            
             ))}
        </ul>
     
    );
}
export default VideoList;