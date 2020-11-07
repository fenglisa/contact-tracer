import React, { Component } from 'react';

class Status extends Component {
  handleOnClick = () => {
    this.props.deleteSymptom(this.props.symptoms.id)
  }

  render() {
    const { symptoms } = this.props;

    return (
      <div>
        <ul>
          {symptoms.map(s => <li key={s.id}> {s} <button onClick={this.handleOnClick}> X </button></li>)}
        </ul>
      </div>
    );
  }
};

export default Status;
