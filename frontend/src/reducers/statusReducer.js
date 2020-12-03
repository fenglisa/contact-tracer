function statusReducer(state = false, action) {
  switch (action.type) {

    case "FETCH_STATUS":
      let currentStatus = state.status;
      currentStatus = action.status;
      return currentStatus;

    default:
      return state;
  }
}

export default statusReducer;
