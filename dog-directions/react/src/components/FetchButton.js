import React from 'react';


const FetchButton = props => {

  let handleClick = () => {
    console.log('im in the click')
    props.grabdata();
  }
  return(
    <button
       onClick={handleClick} >
       Get Favorite Thing</button>
  )
}

export default FetchButton;

