import React from 'react';


const VideoDetail = ({video}) => {

  // Sometime parent components cannot fetch information fast enough to
  // satisfy the needs of a child object.
  if(!video){
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  // String interpolation ES
  //const url = 'https://www.youtube.com/embed/' + videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  return(
        <div className="video-datail col-md-8">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={url}></iframe>
          </div>
          <div className="details">
            <div>{video.snippet.title}</div>
            <div>{video.snippet.description}</div>
          </div>
        </div>
  );
};

export default VideoDetail;
