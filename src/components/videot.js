import React from 'react';
import VideoListItem from './videoLista';

const VideoList = (props) => {

    const videoItems = props.videos.map((data) => {
        return (
            <VideoListItem
                onVideoSelect={props.onVideoSelect}
                key={data.etag}
                video={data}
            />
        );
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;
