import React, {Component} from 'react';
import Destination from '../components/Destination';

class DestinationContainer extends Component {
  constructor(props) {
    super(props);
    this.state={
      selectedIds:[]
    }
    this.setSelectedIds = this.setSelectedIds.bind(this)
  }

  setSelectedIds(id) {
    let newArray = this.state.selectedIds.slice()
    if (newArray.includes(id)) {
      let index = newArray.indexOf(id)
      newArray.splice(index, 1)
    } else {
      newArray.push(id)
    }
    console.log(newArray)
    this.setState({selectedIds: newArray})
  }

  render() {

    console.log(this.state.selectedIds)
  let destinations = this.props.data.places.map (destination => {
    let className;
    if (this.state.selectedIds.includes(destination.id) ) {
      className='strike';
    } else {
      className;
    }

    return (
      < Destination
        key={destination.id}
        id={destination.id}
        destination={destination.name}
        changeId={this.setSelectedIds}
        className={className}
      /> 
    )
  })  

  return (
    <div className="destination-container">
      {destinations}
    </div>
  )
  }
}
export default DestinationContainer;
