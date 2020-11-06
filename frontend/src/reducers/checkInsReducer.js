function checkInsReducer(state = [], action) {
  switch (action.type) {
    case "ADD_CHECKIN":
      return [...state, action.checkIn];

    case "REMOVE_CHECKIN":
      return state.filter(c => c.id !== action.id);

    default:
      return state;
  }
}

export default checkInsReducer;
