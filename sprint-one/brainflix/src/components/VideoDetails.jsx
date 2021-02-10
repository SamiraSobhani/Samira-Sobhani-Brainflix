import React, { Component } from "react";

function VideoDetails(props){
    return(
    props.VideosDescreption
    .filter((descreption)=> descreption.id ===props.currentVideoId)
    .map((descreption)=>(
        <section>
        <h1>{descreption.title}</h1>
        <h3>{descreption.channel}</h3>
        <span>{descreption.timestamp}</span>
        <article>{descreption.description}</article>
        </section>
    ))
    

)}

export default VideoDetails;