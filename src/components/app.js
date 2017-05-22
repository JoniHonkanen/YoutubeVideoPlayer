import React, { Component } from 'react';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './hakupalkki';
import VideoList from './videot';
import VideoDetail from './nakyvaVideo';


const API_KEY = 'AIzaSyAZN_IDBmXQBKGzBEjMRjnqEJDM80QvM5E';


export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('cat');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (data) => {
      this.setState({
        videos: data,
        selectedVideo: data[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}
