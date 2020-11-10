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
  return { type: 'DELETE_CHECKIN', id }
}

export const addCheckIn = (checkIn) => {
  return { type: 'ADD_CHECKIN', checkIn }
}
