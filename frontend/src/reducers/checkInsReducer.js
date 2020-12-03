function checkInsReducer(state = [], action) {
  switch (action.type) {
    case "ADD_CHECKIN":
      const checkIn = {
        id: action.data.id,
        user: action.data.user,
        location: action.data.location
      };
      return state.concat(checkIn);

    case "DELETE_CHECKIN":
      return state.filter(c => c.id !== action.id);

    case "FETCH_CHECKINS":
      return state.concat(action.checkIns);

    default:
      return state;
  }
}

export default checkInsReducer;
