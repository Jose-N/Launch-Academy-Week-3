import React from 'react';

const Destination = prop => {
  let handleClick = () => { prop.changeId(prop.id) }

  return (
    <div className="destination"
     onClick={handleClick}
    >
      <p className={prop.className}>{prop.destination}</p>
    </div>
  );
}; 

export default Destination;
