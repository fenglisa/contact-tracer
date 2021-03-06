import React, { Component } from 'react';
import SymptomInput from '../components/symptoms/SymptomInput';
import Symptoms from '../components/symptoms/Symptoms';
import { connect } from 'react-redux';
import { addSymptom, deleteSymptom } from '../actions/symptoms';
import { updateStatus } from '../actions/status';

class SymptomsContainer extends Component {

  render() {
    return (
      <div>
        <SymptomInput addSymptom={this.props.addSymptom}/>
        <Symptoms symptoms={this.props.symptoms} deleteSymptom={this.props.deleteSymptom}/>
        {this.props.symptoms.length > 4 ? this.props.updateStatus(3) : null}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    symptoms: state.symptoms
  }
}

// const mapDispatchToProps = dispatch => ({
//   addSymptom: symptom => dispatch({ type: "ADD_SYMPTOM", symptom }),
//   deleteSymptom: id => dispatch({type: 'DELETE_SYMPTOM', id })
// })

export default connect(mapStateToProps, {addSymptom, deleteSymptom, updateStatus})(SymptomsContainer)
