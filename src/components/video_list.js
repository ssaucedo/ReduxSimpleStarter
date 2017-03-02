import React from 'react';
import VideoListItem from './video_list_item';

//  bundle.js:2328 Warning: Each child in an array or iterator should have a unique "key" prop. Check the render method of `VideoList`. See https://fb.me/react-warning-keys for more information.
// if the elements of a list don't have an ID react is going to re render the whole list if one element needs an update.
const VideoList = (props) => {
  const videoItems = props.videos.map( video => {
        return (
        <VideoListItem
          onVideoSelect = {props.onVideoSelect}
          key={video.etag}
          video={video} />
        );
    });

  return (
      <ul className="col-md-4 list-group" >
        {videoItems}
      </ul>
  );
}

export default VideoList;
