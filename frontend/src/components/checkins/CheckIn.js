import React, { Component } from 'react';
// import Likes from './Likes';

class CheckIn extends Component {

  handleOnClick = () => {
    this.props.deleteCheckIn(this.props.checkIn.id)
  }

  render() {
    const { checkIn } = this.props;

    return (
      <div>
        <li>
          {checkIn.location.name}
          <button onClick={this.handleOnClick}> X </button>
        </li>
      </div>
    );
  }
};

export default CheckIn;

// state = {
//   clicks: 0
// }

// handleClick = () => {
//   this.setState({
//     clicks: this.state.clicks + 1
//   })
// }

// callAPI = () => {
//   console.log('a')
//   fetch('http://localhost:3000/fdsfdsfds').then(r => {
//     if(r.ok) {
//       console.log(r, 'b')
//       return r.json()
//     } else {
//       throw new Error('Error')
//     }
//   })
//   .then(data => {
//     console.log('c', data)
//   })
//   .catch(err => console.log('d', err))
//   console.log('e')
//
//   // a e b c
//
//   // a e d
// }

// <button onClick={this.callAPI}> Upvote </button>
// < Likes upvotes={this.state.clicks}/>
