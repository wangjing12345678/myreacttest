import { fromJS } from "immutable";

const TabbarReducer = (
  prevSate = fromJS({
    show: true,
  }),
  action
) => {
  if (action.type == "hide-tabbar") {
    return prevSate.set("show", false);
  } else if (action.type == "show-tabbar") {
    return prevSate.set("show", true);
  }
  return prevSate;
};

export default TabbarReducer;
