import React, { Component } from 'react';
import Symptom from './Symptom';

class Symptoms extends Component {

  render() {
    return(
      <ul>
        {this.props.symptoms.map(s => <Symptom key={s.id} symptom={s} deleteSymptom={this.props.deleteSymptom}/>)}
      </ul>
    );
  }
};

export default Symptoms;
