import { fridgeListActionTypes } from "../actions/fridgeListActions";

const initialState = {
  fridgeList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case fridgeListActionTypes.addFridgeItem:
      return Object.assign({}, state, {
        fridgeList: state.fridgeList.concat([action.fridgeItem]),
      });
    case fridgeListActionTypes.deleteFridgeItem:
      let newFridgeList = state.fridgeList.slice(0);
      newFridgeList.splice(action.index,1);
      return Object.assign({}, state, {
        fridgeList: newFridgeList,
      });
    case fridgeListActionTypes.initializeFridgeList:
      return Object.assign({}, state, {
        fridgeList: action.fridgeList,
      });
    case fridgeListActionTypes.clearFridgeList:
      return Object.assign({}, state, {
        fridgeList: [],
      })
    default:
      return state;
  }
};
