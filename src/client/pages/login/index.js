import React from 'react';
class LoginPage extends React.Component {
  constructor (props) {
    super(props);
  }

  handleSubmit () {
    this.props.history.push('/home');
  }

  render () {
    return (
      <div className="container">
        <button type="buttton" className="button"
          onClick={this.handleSubmit.bind(this)}
        >Go to main</button>
      </div>
    );
  }
}
export default LoginPage;