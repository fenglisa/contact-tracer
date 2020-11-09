import { v4 as uuid } from 'uuid';

function checkInsReducer(state = [], action) {
  switch (action.type) {
    case "ADD_CHECKIN":
      const checkIn = {
        id: uuid(),
        location: {name: action.checkIn},
        user: {email: "lisafeng10@gmail.com"}
      }
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
