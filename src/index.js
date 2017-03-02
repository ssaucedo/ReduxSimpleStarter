import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyA9n4c6mnYjFrpswMQXWV-3oSJVKzmRctY';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          videos: [],
          selectedVideo: null
        };
        this.videoSearch('surfboards');
    }

    videoSearch(term){
      YTSearch({ key: API_KEY, term: term}, videos => {
        this.setState({
          videos: videos,
          selectedVideo: videos[0]
          });
      });
    }

    // Passing props. We are passing a video prop. Each time App renders we are passing a new list.
    render() {

      // Return a function that can only be called once every 300 ms.
      const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);

      return (
          <div>
            <SearchBar onSearchTermChange={videoSearch}/>
            <VideoDetail video= {this.state.selectedVideo}/>
            <VideoList
            onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
            videos= {this.state.videos} />
          </div>
      );
    }
}
ReactDOM.render(<App />, document.querySelector('.container'));
