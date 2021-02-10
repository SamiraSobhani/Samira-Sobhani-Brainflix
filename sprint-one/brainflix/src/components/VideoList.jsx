import React, { Component } from "react";

function VideoList(props){
    return(
        <ul className="videoList">
            {props.videos
            .filter((video)=> video.id !== props.currentVideoId)
            .map((video) =>(
            <li className="videoList__items" key={video.id}>
                <h3 className="videoList__title" >{video.title}</h3>
                <img className="videoList__img" src={video.image} alt=""/>
            </li>            
             ))}
        </ul>
    );
}
export default VideoList;