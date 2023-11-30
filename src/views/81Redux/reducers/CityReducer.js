const CityReducer = (
  prevSate = {
    cityName: "北京",
  },
  action
) => {
  let newState = { ...prevSate };
  if (action.type == "change-city") {
    newState.cityName = action.value;
    return newState;
  }
  return prevSate; //此处注意 使用persistor 这里必须返回prevSate 不然storage会重置 newState已经改变了对象指向、
};

export default CityReducer;
