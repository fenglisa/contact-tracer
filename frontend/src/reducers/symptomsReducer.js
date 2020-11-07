import { v4 as uuid } from 'uuid';

function symptomsReducer(state = [], action) {
  switch (action.type) {
    case "ADD_SYMPTOM":
    const symptom = {
      id: uuid(),
      name: action.symptom
    }
    return state.concat(symptom);

    case "DELETE_SYMPTOM":
      return state.filter(s => s.id !== action.id);

    default:
      return state;
  }
}

export default symptomsReducer;
