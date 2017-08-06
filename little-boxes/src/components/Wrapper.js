import React from 'react';
import Picture from './Picture';

let src = 'https://s3.amazonaws.com/horizon-production/images/react-clever-ees.png'

const Wrapper = props => {
  return (
    <div className='box wrapper'>
      <h1>{props.header}</h1>
      <p>
        {props.body}
      </p>
      < Picture
        header='Look at This Picture'
        body={src}
      />
    </div>
  )
}

export default Wrapper;
