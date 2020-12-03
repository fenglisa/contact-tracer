export const fetchStatus = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/users/${id}`)
    .then(r => r.json())
    .then(data => {
      dispatch({ type: 'FETCH_STATUS', status: data.positive })
    })
  };
};

export const updateStatus = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        positive: true
        })
    })
    .then(r => r.json())
    .then(data => {
      dispatch({ type: 'FETCH_STATUS', status: data.positive })
    })
  };
};

export const treatStatus = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        positive: false
        })
    })
    .then(r => r.json())
    .then(data => {
      dispatch({ type: 'FETCH_STATUS', status: data.positive })
    })
  };
};
