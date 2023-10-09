import React from "react";

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        activeQuestions: props.data.map(() => false),
        activeQuestionIndex: -1,
    };
  }

  handleClick = (index) => {
    if(this.state.activeQuestionIndex === index ||
    this.state.activeQuestionIndex === -1 ) {
        const newActiveQuestions = [...this.state.activeQuestions];
        newActiveQuestions[index] = !newActiveQuestions[index];
        this.setState({
          activeQuestions: newActiveQuestions,
          activeQuestionIndex: this.state.activeQuestionIndex === index ? -1 : index,
        });
    }
  };

  render() {
    return (
      <ul>
        {this.props.data.map((obj, index) => {
          return (
            <li key={obj["Q"]} className="qa">
              <div className="que-btn" onClick={() => this.handleClick(index)}>
                {obj["Q"]}
              </div>
              {this.state.activeQuestions[index] ? <div className="ans">{obj["A"]} </div> : ""}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Question;
