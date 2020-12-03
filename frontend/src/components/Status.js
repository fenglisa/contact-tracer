import React, { Component } from 'react';
import { connect } from 'react-redux';
import { treatStatus, fetchStatus, updateStatus } from '../actions/status';

class Status extends Component {

  componentDidMount(){
    this.props.fetchStatus(3);
  }

  handleOnClick = () => {
    this.props.treatStatus(3);
  }

  handleOnTheClick = () => {
    this.props.updateStatus(3);
  }

  render() {
    return (
      <div>
      <p>
        Current Status: <strong>{this.props.status ? 'Positive' : 'Negative'}</strong>
      </p>
      <button onClick={this.handleOnClick}> Treat COVID </button>
      <button onClick={this.handleOnTheClick}> Get COVID :(</button>
      </div>
    );
  }

};

const mapStateToProps = state => {
  return {
    status: state.status
  }
}


export default connect(mapStateToProps, {treatStatus, fetchStatus, updateStatus})(Status)
