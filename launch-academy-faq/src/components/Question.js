import React from 'react';

const Question = props => {
  let handleClick = () => { props.changeId(props.id) }

  return (
   <div className="question">
      <i className={props.iconName}
        onClick={handleClick} ></i>
      <h3>{props.question}</h3>
      <p className={props.hiddenClass}>{props.answer}</p>
      <div className='bottom-border-div'></div>
    </div> 
  );
}; 

export default Question;
