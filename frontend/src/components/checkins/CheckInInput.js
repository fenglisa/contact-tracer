import React, { Component } from 'react';

export default class CheckInInput extends Component {
  state = {
    text: ''
  }

  handleOnChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    const checkIn = {
      user: {email: "lisafeng10@gmail.com"},
      location: {name: this.state.text}
    };
    if(this.state.text !== ''){
      this.props.addCheckIn(checkIn);
      this.setState({
        text: '',
      });
    }
  }

  render() {
    return (
      <div>
      Log Check-In
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};
