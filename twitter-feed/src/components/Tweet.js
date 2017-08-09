import React from 'react';
import '../stylesheets/Tweet.scss';

const Tweet = (props) => {

  let throwAlert = (text) => {  alert(text)};
  let redColor = props.likedColor;
  let greenColor = props.retweetedColor;

  return (
    <div
       className="tweet-box large-10 large-centered">
      <div className='profile-pic'>
        <img src={props.profile_pic} alt="" />
      </div>
      <div className='main-info'>
        <p className='name'>{props.name}</p>
        <p
        className='fake-name'>
          {props.screen_name}
        </p>
      </div>
        <p>{props.timestamp_ms}</p>
        <p className='text'>{props.text}</p>   
      <div className='media'>
        <img src={props.media} alt="" />
      </div>
      <div className="engagment-bar">
        <i className="fa fa-reply" 
          onClick = {throwAlert.bind(null,'reply')} >
        </i>
        <i className="fa fa-retweet" 
          onClick = {throwAlert.bind(null,'retweet')}
          style={{color:redColor}} >
        </i>
        <i className="fa fa-heart" 
          onClick = {throwAlert.bind(null,'liked')} 
          style={{color:greenColor}} >
        </i>
        <i className="fa fa-ellipsis-h" 
          onClick = {throwAlert.bind(null,'favorited')} >
        </i>
      </div>
    </div>
  );
};
export default Tweet;
