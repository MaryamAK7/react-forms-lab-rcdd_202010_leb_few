import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username : "",
      password: ""
    };
  }
    handleChangeUsername = event => {
    this.setState({
      username: event.target.value
    })
  }
  handleChangePassword = event => {
    this.setState({
      password: event.target.value
    })
  }
  handleLogin(e){
    e.preventDefault();
       if (!this.state.username || !this.state.password) return

    this.props.handleLogin(this.state)
  }
  
  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleChangeUsername}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleChangePassword} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
