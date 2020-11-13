export const fetchCheckIns = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/check_ins')
    .then(r => r.json())
    .then(data => {
      dispatch({ type: 'FETCH_CHECKINS', checkIns: data })
    })
  };
};

export const deleteCheckIn = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/check_ins/${id}`, {
      method: "DELETE"
    }).then(dispatch({ type: 'DELETE_CHECKIN', id }))
  }
}

export const addCheckIn = (checkIn) => {
  return (dispatch) => {
    fetch("http://localhost:3000/check_ins", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(checkIn)
    }).then( r => r.json()).then(data => {
      dispatch({ type: 'ADD_CHECKIN', data })
    })
  }
}
