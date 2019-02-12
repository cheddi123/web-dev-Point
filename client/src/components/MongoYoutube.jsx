import React from "react";
import YouTube from "react-youtube";

class MongoYoutube extends React.Component {
  render() {
    const opts = {
      height: "390",
      width: "650",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };

    return (
      <YouTube videoId="9OPP_1eAENg" opts={opts} onReady={this._onReady} />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default MongoYoutube;
