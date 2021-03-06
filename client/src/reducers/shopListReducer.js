import { shopListActionTypes } from "../actions/shopListActions";

const initialState = {
  shopList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case shopListActionTypes.addShopItem:
      return Object.assign({}, state, {
        shopList: [action.shopItem].concat(state.shopList),
      });
    case shopListActionTypes.deleteShopItem:
      let newShopList = state.shopList.slice(0);
      newShopList.splice(action.index,1);
      return Object.assign({}, state, {
        shopList: newShopList,
      });
    case shopListActionTypes.initializeShopList:
      return Object.assign({}, state, {
        shopList: action.shopList,
      });
    case shopListActionTypes.clearShopList:
      return Object.assign({}, state, {
        shopList: [],
      })
    default:
      return state;
  }
};
