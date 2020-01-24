import { combineReducers } from "redux";
import fridgeList from "./fridgeListReducer";
import shopList from "./shopListReducer";

export default combineReducers({
  fridgeList,
  shopList
});
