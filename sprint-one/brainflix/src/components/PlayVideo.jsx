import React, { Component } from "react";

function PlayVideo(props){

    
    return(
        props.VideoPoster
    .filter((video)=>video.id === props.currentVideoId)
    .map((video)=>(
        <section className="banner">
        <video className="banner__video" controls poster={video.image}></video>
        </section>
    )))
}
export default PlayVideo;