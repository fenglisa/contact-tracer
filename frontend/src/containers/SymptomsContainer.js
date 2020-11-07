import React, { Component } from 'react';
import SymptomInput from '../components/symptoms/SymptomInput';
import Status from '../components/symptoms/Status';
import { connect } from 'react-redux';

class SymptomsContainer extends Component {

  render() {
    return (
      <div>
        <SymptomInput addCheckIn={this.props.addSymptom}/>
        <Status symptoms={this.props.symptoms} deleteSymptom={this.props.deleteSymptom}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    symptoms: state.symptoms
  }
}

const mapDispatchToProps = dispatch => ({
  addSymptom: symptom => dispatch({ type: "ADD_SYMPTOM", symptom }),
  deleteSymptom: id => dispatch({type: 'DELETE_SYMPTOM', id })
})

export default connect(mapStateToProps, mapDispatchToProps)(SymptomsContainer)
