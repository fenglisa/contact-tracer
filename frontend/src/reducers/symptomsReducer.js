import { v4 as uuid } from 'uuid';

function symptomsReducer(state = [], action) {
  switch (action.type) {
    case "ADD_SYMPTOM":
      if(state.filter(s => s.name === action.symptom).length > 0){
        alert('You have already logged that symptom');
        return state;
      }else{
        const symptom = {
          id: uuid(),
          name: action.symptom
        };
        return state.concat(symptom);
      };

    case "DELETE_SYMPTOM":
      return state.filter(s => s.id !== action.id);

    default:
      return state;
  }
}

export default symptomsReducer;
