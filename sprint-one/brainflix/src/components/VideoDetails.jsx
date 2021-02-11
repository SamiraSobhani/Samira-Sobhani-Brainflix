import React, { Component } from "react";
import PlayVideo from "./PlayVideo"

function VideoDetails(props){
    return(
    props.VideosDescreption
    .filter((descreption)=> descreption.id ===props.currentVideoId)
    .map((descreption)=>(
        <section>
        <h1>{descreption.title}</h1>
        <h3>By {descreption.channel}</h3>
        <span>{descreption.timestamp}</span>
        <span>{descreption.views}</span>
        <span>{descreption.likes}</span>
        <article>{descreption.description}</article>
        </section>
        
    ))
    

)}

export default VideoDetails;