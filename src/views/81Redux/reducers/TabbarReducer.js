const TabbarReducer = (
  prevSate = {
    show: true,
  },
  action
) => {
  let newState = { ...prevSate };
  if (action.type == "hide-tabbar") {
    newState.show = false;
    return newState;
  } else if (action.type == "show-tabbar") {
    newState.show = true;
    return newState;
  }
  return prevSate;
  console.log(newState);
};

export default TabbarReducer;
