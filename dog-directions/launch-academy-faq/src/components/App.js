import React from 'react';
import Question from './Question';

class App extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      selectedQuestionId: null
    }
    this.changeSelectedQuestionId = this.changeSelectedQuestionId.bind(this)
  }

  changeSelectedQuestionId(id) {
    console.log('clicked')
    if (id != this.state.selectedQuestionId) {
      this.setState({selectedQuestionId: id})
    } else {
      this.setState({selectedQuestionId: null})
    }
  }

  render() {


    let faqQuestions = this.props.data.map(question => {
      let hiddenClass
      let iconClass
      if (this.state.selectedQuestionId === question.id) {
        hiddenClass = ''; 
        iconClass = 'fa fa-minus-square-o fa-3x';
      } else {
        hiddenClass = 'hidden';
        iconClass = 'fa fa-plus-square-o fa-3x';
      }
      return (
          < Question
            key={question.id}
            id={question.id}
            question={question.question}
            answer={question.answer}
            changeId={this.changeSelectedQuestionId}
            hiddenClass={hiddenClass}
            iconName={iconClass}
          />
      )
    })

    console.log(this.state.selectedQuestionId)
    return(
      <div id="App">
        <h1
          className='large-6 large-centered column heading'>
           We're here to help
        </h1>
        <div className='questions'>
          {faqQuestions}
        </div>
      </div>
    )
  }
}

export default App;
