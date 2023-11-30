import { fromJS } from "immutable";

const CityReducer = (
  prevSate = {
    cityName: "北京",
  },
  action
) => {
  let newState = fromJS(prevSate);
  if (action.type == "change-city") {
      console.log(action)
    return newState.set("cityName", action.value).toJS();
  }
  return prevSate; //此处注意 使用persistor 这里必须返回prevSate 不然storage会重置 newState已经改变了对象指向、
};

export default CityReducer;
