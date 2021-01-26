import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: " "
    };
  }
  

  render() {
    let remainChar = this.props.maxChars - this.state.value.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={(e)=>(this.setState({value: e.target.value}))} value={this.state.value} />
        {remainChar}
      </div>
    );
  }
}

export default TwitterMessage;
