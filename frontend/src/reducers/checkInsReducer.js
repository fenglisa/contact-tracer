import { v4 as uuid } from 'uuid';

function checkInsReducer(state = [], action) {
  switch (action.type) {
    case "ADD_CHECKIN":
      const checkIn = {
        id: uuid(),
        name: action.checkIn
      }
      return state.concat(checkIn);

    case "DELETE_CHECKIN":
      return state.filter(c => c.id !== action.id);

    default:
      return state;
  }
}

export default checkInsReducer;
