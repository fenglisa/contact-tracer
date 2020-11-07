function symptomsReducer(state = [], action) {
  switch (action.type) {
    case "ADD_SYMPTOM":
      return [...state, action.symptom];

    case "DELETE_SYMPTOM":
      return state.filter(s => s.id !== action.id);

    default:
      return state;
  }
}

export default symptomsReducer;
