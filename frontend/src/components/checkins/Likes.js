import React, { Component } from 'react';

class Likes extends Component {
  // handleClick = () => {
  //   this.props.deleteCheckIn(this.props.checkIn.id)
  // }

  render() {


    return (
      <div>

          Total Likes: {this.props.upvotes}

      </div>
    );
  }
};

export default Likes;
