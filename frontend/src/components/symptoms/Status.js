import React, { Component } from 'react';

class Status extends Component {
  handleOnClick = () => {
    this.props.deleteSymptom(this.props.symptom.id)
  }

  render() {
    const { symptom } = this.props;

    return (
      <div>
      <li>
        {symptom.name}
        <button onClick={this.handleOnClick}> X </button>
      </li>
      </div>
    );
  }
};

export default Status;
