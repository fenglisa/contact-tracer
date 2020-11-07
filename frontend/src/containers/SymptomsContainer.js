import React, { Component } from 'react';
import SymptomInput from '../components/symptoms/SymptomInput';
import Symptoms from '../components/symptoms/Symptoms';
import { connect } from 'react-redux';

class SymptomsContainer extends Component {

  render() {
    return (
      <div>
        <SymptomInput addCheckIn={this.props.addSymptom}/>
        <Symptoms symptoms={this.props.symptoms} deleteSymptom={this.props.deleteSymptom}/>
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
