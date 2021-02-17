import React, { Component } from "react";
import videosData from "./assets/Data/videos.json";
import videosDetails from "./assets/Data/video-details.json";
import moment from "moment";

import "./styles/main.scss";
import PlayVideo from "./components/PlayVideo";
import VideoList from "./components/VideoList";
import VideoDetails from "./components/VideoDetails";
import CommentList from "./components/CommentList";
import CommentForm from "./components/CommentForm";
import Header from "./components/Header";

class App extends Component {
  state = {
    currentVideoId: "1af0jruup5gu",
    videos: videosData,
    videosDescreption: videosDetails,
  };

  updateVideoId = (id) => {
    this.setState({ currentVideoId: id });
  };

  formatedDate = (timeStamp) => {
    return moment(timeStamp).fromNow();
  };

  render() {
    return (
      <div className="App">
        <Header />
        <PlayVideo
          VideoPoster={this.state.videos}
          currentVideoId={this.state.currentVideoId}
        />
        <main className="main">
          <div className="main__DetailsComment">
            <VideoDetails
              VideosDescreption={this.state.videosDescreption}
              currentVideoId={this.state.currentVideoId}
              formatedDate={this.formatedDate}
            />

            <CommentList
              currentVideoId={this.state.currentVideoId}
              VideosDescreption={this.state.videosDescreption}
              formatedDate={this.formatedDate}
            />
          </div>

          <div>
            <VideoList
              videos={this.state.videos}
              currentVideoId={this.state.currentVideoId}
              updateVideoId={this.updateVideoId}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
