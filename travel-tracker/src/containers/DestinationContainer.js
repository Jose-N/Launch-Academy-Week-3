import React, {Component} from 'react';
import Destination from '../components/Destination';

class DestinationContainer extends Component {
  constructor(props) {
    super(props);
    this.state={
    }
  }

  render() {

  return (
    <div className="destination-container">
     < Destination /> 
    </div>
  )
  }
}
export default DestinationContainer;
