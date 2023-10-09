import React from "react";
import Question from "./Question";

class App extends React.Component {

    render() {
        return(<Question data = {this.props.data} />);
    }
}

export default App;
