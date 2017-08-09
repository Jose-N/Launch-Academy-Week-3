import React from 'react';

const StepTile = props => {

  let handleClick = () => {
    props.setSelectedStep(props.id);
  }

  return(
    <li className={props.selected} onClick={handleClick}>{props.step}</li>
  )
}

export default StepTile;
