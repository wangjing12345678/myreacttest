const CinemaListReducer = (
  prevSate = {
    list: [],
  },
  action
) => {
  let newState = { ...prevSate };
  if (action.type == "change-list") {
    newState.list = action.value;
    return newState;
  }
  return prevSate;
};

export default CinemaListReducer;
