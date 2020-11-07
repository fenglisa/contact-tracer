import React, { Component } from 'react';
import Status from './Status';

class Symptoms extends Component {
  render() {
    return(
      <ul>
        {this.props.symptoms.map(s => <Status key={s.id} symptom={s} deleteSymptom={this.props.deleteSymptom}/>)}
      </ul>
    );
  }
};

export default Symptoms;
