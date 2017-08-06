import React from 'react';

const List = props => {
  return (
    <div className='box list'>
      <h1>{props.header}</h1>
      <ul>
        {props.body.map((item) => 
          <li>{item}</li>
        )}
      </ul>
    </div>
  )
}

export default List;
