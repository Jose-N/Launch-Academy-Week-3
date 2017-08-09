import React, { Component } from 'react';
import StepTile from '../components/StepTile';
import ItemTile from '../components/ItemTile';
import FetchButton from '../components/FetchButton';

class InstructionsContainer
 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:null,
      data:null
    }
    this.setId = this.setId.bind(this);
    this.grabData = this.grabData.bind(this);
  }

   setId(id) {
     this.setState({id: id});
   };

   grabData() {
    fetch('/api/v1/favorite_things.json')
    .then(response => {
      if (response.ok) {
        console.log('response ok')
        return response.json()
      } else {
        let error = new Error()
        throw(error)
      }
    })
    .then(body => {this.setState({data: body}) })
    .catch(error => console.error())
   };


  render(){
    console.log(this.state.data);
    let headline = <h1>N/A</h1>;
    let items = [<h1>N/A</h1>];
    let steps = [<h1>N/A</h1>];

    if (this.state.data != null) {
      console.log('in the if')
      let supplies = this.state.data.supplies
      let directions = this.state.data.directions

      items = supplies.map(supply => {
        return(
          <ItemTile
          item={supply.item}
          key={supply.id}
          id={supply.id}
          />
        )
      })

      steps = directions.map(direction => {
        let className;

        if (direction.id == this.state.id) { className = 'selected'}

        return(
          <StepTile
            step={direction.step}
            key={direction.id}
            id={direction.id}
            setSelectedStep={this.setId}
            selected={className}
          />
        )
      })
      headline = this.state.data.activity;
    }
    console.log(steps)
  
  


    return(
      <div>
        <h1>How To {headline} </h1>
        <h3>Supplies:</h3>
        <ul>
          {items}
        </ul>
        <h3>Instructions:</h3>
        <ol>
          {steps}
        </ol>
        <FetchButton
          grabdata={this.grabData}
         />
      </div>
    )
  }
}

export default InstructionsContainer
;
