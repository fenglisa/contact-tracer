import React, { Component } from 'react';

class CheckIn extends Component {
  handleOnClick = () => {
    this.props.deleteCheckIn(this.props.checkIn.id)
  }

  render() {
    const { checkIn } = this.props;

    return (
      <div>
        <li>
          {checkIn.location.name}
          <button onClick={this.handleOnClick}> X </button>
        </li>
      </div>
    );
  }
};

export default CheckIn;
