export const fetchCheckIns = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/check_ins')
    .then(r => r.json())
    .then(data => {
      dispatch({ type: 'FETCH_CHECKINS', checkIns: data })
    })
  };
};

export const fetchCats = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_CATS' });
    fetch('https://learn-co-curriculum.github.io/cat-api/cats.json')
      .then(response => response.json())
      .then(responseJSON => {
        dispatch({ type: 'ADD_CATS', cats: responseJSON.images })
      })
  };
}

export const deleteCheckIn = (id) => {
  return { type: 'DELETE_CHECKIN', id }
}

export const addCheckIn = (checkIn) => {
  return { type: 'ADD_CHECKIN', checkIn }
}
