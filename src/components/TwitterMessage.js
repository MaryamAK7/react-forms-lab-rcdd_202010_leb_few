import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: " "
    };
  }
  handleChange(e){
    this.setState({value: e.target.value})
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.value} />
      </div>
    );
  }
}

export default TwitterMessage;
