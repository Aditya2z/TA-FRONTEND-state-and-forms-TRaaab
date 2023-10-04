import React, { Component } from 'react';

class SelectSteps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: 1,
    };
  }

  handleSelectChange = (event) => {
    this.setState(
        { 
        steps: event.target.value,
    });
    console.log(this.props)
    this.props.onSelect(event.target.value); // Notify the parent component of the selected value
  }

  render() {
    return (
      <div>
        <label htmlFor="selectSteps">Select Steps:</label>
        <select
          id="selectSteps"
          value={this.state.selectedValue}
          onChange={this.handleSelectChange}
        >
          <option value={1}>1</option>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
      </div>
    );
  }
}

export default SelectSteps;