import React from 'react';

const Popup = prop => {
  let closeAttempt = () => {
    confirm(`Are you sure you dont want to see ${prop.artistName}`)
  }
  let submission = () => {
    console.log('form submitted')
  }

  return (
    <div className = 'large-6 large-centered columns' className ='pink' >
      <div className="right-justified" className='exit' onClick={closeAttempt}>
         X
      </div>
      <h3 className='yellow'>You have won tickets to see {prop.artistName}!!</h3>
      <p className='yellow'>
         Please enter your email so we can send you the tickets
       </p>
      <input id='email' type="text" placeholder="Your email here"/>
      <input id='submit' type="submit" value="CLAIM YOUR PRIZE" onClick={submission}/>
    </div>
  );
}; 

export default Popup;
