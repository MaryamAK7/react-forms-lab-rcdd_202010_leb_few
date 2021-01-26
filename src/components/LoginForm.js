import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username : "",
      password: ""
    };
  }
    handleChangeUsername(e){
      this.setState({username : e.target.value});
    }
     handleChangePassword(e){
      this.setState({password :e.target.value});
    }
  render() {
    return (
      <form>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={handleChangeUsername}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={handleChangePassword} />
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
