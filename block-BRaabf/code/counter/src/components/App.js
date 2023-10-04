import React from "react";
import SelectSteps from "./SelectSteps";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: 1,
      counter: 0,
    };
  }

  handleDecrement = () => {
    this.setState({
      counter: this.state.counter - this.state.steps,
    });
  };

  handleIncrement = () => {
    this.setState({
      counter: this.state.counter + parseInt(this.state.steps),
    });
  };

  updateSteps = (newSteps) => {
    this.setState({
        steps: newSteps,
    })
  }

  render() {
    return (
      <main>
        <h1>{this.state.counter}</h1>
        <div className="flex">
          <button onClick={this.handleDecrement}>Decrement</button>
          <button onClick={this.handleIncrement}>Increment</button>
        </div>
        <SelectSteps onSelect={this.updateSteps} />
      </main>
    );
  }
}

export default App;
