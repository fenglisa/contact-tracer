import React, { Component } from 'react';
import './symptom.css';

export default class SymptomInput extends Component {

  handleOnSubmit(event) {
    event.preventDefault();
    debugger;
    this.props.addSymptom(event.target.symptom.value);
  }

  render() {
    return (
      <div>
      Log Symptom
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input type="radio" name="symptom" value="Cough"/>Cough
          <div className="divider"/>
          <input type="radio" name="symptom" value="Fever"/>Fever
          <div className="divider"/>
          <input type="radio" name="symptom" value="Sore Throat"/>Sore Throat
          <div className="divider"/>
          <input type="radio" name="symptom" value="Loss of taste or smell"/>Loss of taste or smell
          <div className="divider"/>
          <input type="radio" name="symptom" value="Shortness of breath"/>Shortness of breath
          <div className="divider"/>
          <input type="radio" name="symptom" value="Body aches"/>Body aches
          <br/>
          <input type="submit" />
        </form>
      </div>
    );
  }
};
