import React, { Component } from "react";
import moment from "moment";
import "./styles/main.scss";
import axios from "axios";

import Header from "./components/Header";
import PlayVideo from "./components/PlayVideo";
import VideoList from "./components/VideoList";
import CommentList from "./components/CommentList";
import VideoDetails from "./components/VideoDetails";

class App extends Component {
  state = {
    currentVideoId: "1af0jruup5gu",
    videosDescription: {
      id: "",
      title: "",
      name: "",
      comments: [],
      timestamp: "",
    },
    videos: [],
  };
  updateVideoId = (id) => {
    this.setState({ currentVideoId: id });
  };

  formatedDate = (timeStamp) => {
    return moment(timeStamp).fromNow();
  };

  getVideoList = () => {
    axios
      .get("http://localhost:8080/videos")
      .then((response) => {
        if (response.data.length !== 0) {
          this.setState({ videos: response.data });
        }
      })
      .catch((error) => console.log(error));
  };

  getVideoDetails = (currentVideoId) => {
    axios
      .get(`http://localhost:8080/videos/${currentVideoId}`)
      .then((response) => {
        this.setState({ videosDescription: response.data });
      })
      .catch((error) => console.log(error));
  };

  componentDidUpdate(prevProps, prevState) {
    const { id } = this.props.match.params;
    if (id !== undefined && prevState.videosDescription.id !== id) {
      this.getVideoDetails(id);
    }
  }

  componentDidMount() {
    this.getVideoList();
    this.getVideoDetails("1af0jruup5gu");
  }

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
              VideosDescription={this.state.videosDescription}
              currentVideoId={this.state.currentVideoId}
              formatedDate={this.formatedDate}
            />

            <CommentList
              currentVideoId={this.state.currentVideoId}
              VideosDescription={this.state.videosDescription}
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
