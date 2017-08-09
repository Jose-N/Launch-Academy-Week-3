import React from 'react';
import Tweet from './Tweet';

const TwitterFeed = (props) => {
  let allTweets = props.data.map( tweetData => {
    let media = '';
    let likedColor = 'black';
    let retweetedColor = 'black';
    if (tweetData.entities.media != null) {
      media = tweetData.entities.media[0].media_url;
    }
    if (tweetData.favorited == true) {
      likedColor = 'red';
    }
    if (tweetData.retweeted == true) {
      retweetedColor = 'green';
    }

    return(
      < Tweet
        key={tweetData.id_str}
        profile_pic={tweetData.user.profile_image_url}
        name={tweetData.user.name}
        screen_name={tweetData.user.screen_name}
        text={tweetData.text}
        timestamp={tweetData.timestamp_ms}
        media={media}
        likedColor={likedColor}
        retweetedColor={retweetedColor}
      />
    );
  }
  );

  return (
    <div id='twitter-feed' >
      {allTweets}
    </div>
  );
};
export default TwitterFeed;
