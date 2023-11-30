//引入redux
//利用createStore（reducer）
import { applyMiddleware, combineReducers, createStore } from "redux";
import CityReducer from "./reducers/CityReducer";
import TabbarReducer from "./reducers/TabbarReducer";
import CinemaListReducer from "./reducers/CinemaListReducer";
import reduxThunk from "redux-thunk";
import reduxPromise from "redux-promise";

// 持久化
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  storage,
  whitelist:['CityReducer']
};

const reducer = combineReducers({
  CityReducer,
  TabbarReducer,
  CinemaListReducer,
});

// 将reduce按照persistConfig规则进行持久化
const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, applyMiddleware(reduxThunk, reduxPromise));

let persistor = persistStore(store);
export default store
export { persistor };
