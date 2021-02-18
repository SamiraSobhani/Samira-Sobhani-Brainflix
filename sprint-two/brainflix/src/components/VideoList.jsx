import React, { Component } from "react";
import {Link} from "react-router-dom";

function VideoList(props){



    return(
        <ul className="videoList container">
            <h5 className="videoList__header">NEXT VIDEO</h5>
            {props.videos
            .filter((video)=> video.id !== props.currentVideoId)
            .map((video) =>(
            <li className="videoList__items" key={video.id} onClick={() =>{ props.updateVideoId(video.id)}}>
                <Link to={`https://project-2-api.herokuapp.com/videos/${video.id}?api_key=0bd5893b-5519-44c9-9aa7-fc5fdcdbab73`}>
                <img className="videoList__img" src={video.image} alt=""/>
                <div className="videoList__details">
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