import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={(e)=>this.state={e.target.value}} />
      </div>
    );
  }
}

export default TwitterMessage;
