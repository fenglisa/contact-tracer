import React, { Component } from 'react';
import CheckInInput from '../components/checkins/CheckInInput';
import CheckIns from '../components/checkins/CheckIns';
import { connect } from 'react-redux';
import { addCheckIn, deleteCheckIn, fetchCheckIns } from '../actions/checkIns';

class CheckInsContainer extends Component {

  // componentDidUpdate(prevProps, prevState){
  //   if(prevState != this.props.checkIns){
  //     this.props.fetchCheckIns();
  //   }
  // }

  render() {
    return (
      <div>
        <CheckInInput addCheckIn={this.props.addCheckIn}/>
        <CheckIns checkIns={this.props.checkIns} deleteCheckIn={this.props.deleteCheckIn}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    checkIns: state.checkIns
  }
}

// const mapDispatchToProps = dispatch => ({
//   addCheckIn: checkIn => dispatch({ type: "ADD_CHECKIN", checkIn }),
//   deleteCheckIn: id => dispatch({type: 'DELETE_CHECKIN', id })
// })

export default connect(mapStateToProps, {addCheckIn, deleteCheckIn, fetchCheckIns})(CheckInsContainer)
