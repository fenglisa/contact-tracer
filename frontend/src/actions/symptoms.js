export const deleteSymptom = (id) => {
  return ({type: 'DELETE_SYMPTOM', id })
}

export const addSymptom = (symptom) => {
  return ({ type: "ADD_SYMPTOM", symptom })
}
