import React, { Component } from 'react';
import CheckIn from './CheckIn';

class CheckIns extends Component {
  render() {
    return(
      <ul>
        {this.props.checkIns.map(c => <CheckIn key={c.id} checkIn={c} deleteCheckIn={this.props.deleteCheckIn}/>)}
      </ul>
    );
  }
};

export default CheckIns;
