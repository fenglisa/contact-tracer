import React, { Component } from 'react';
import { connect } from 'react-redux';
import { treatStatus, fetchStatus, updateStatus } from '../actions/status';

class Status extends Component {

  componentDidMount(){
    this.props.fetchStatus(3);
  }

  treatCovid = () => {
    this.props.treatStatus(3);
  }

  getCovid = () => {
    this.props.updateStatus(3);
  }

  render() {
    return (
      <div>
      <p>
        Current Status: <strong>{this.props.status ? 'Potentially Positive' : 'Negative'}</strong>
      </p>
      <>{this.props.status ? alert('Please consult with a physician as soon as possible') : null}</>
      <button onClick={this.treatCovid}> Treat COVID </button>
      <button onClick={this.getCovid}> Get COVID :(</button>
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
