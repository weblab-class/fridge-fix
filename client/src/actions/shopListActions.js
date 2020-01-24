export const shopListActionTypes = {
  addShopItem: 'ADD_SHOP_ITEM',
  deleteShopItem: "DELETE_SHOP_ITEM",
  initializeShopList: 'INITIALIZE_SHOP_LIST',
  clearShopList: 'CLEAR_SHOP_LIST',
};

export const addShopItem = (shopItem) => {
  return {
    type: shopListActionTypes.addShopItem,
    shopItem,
  };
};

export const deleteShopItem = (index) => {
  return {
    type: shopListActionTypes.deleteShopItem,
    index,
  }
}

export const initializeShopList = (shopList) => {
  return {
    type: shopListActionTypes.initializeShopList,
    shopList,
  };
};

export const clearShopList = (shopList) => {
  return {
    type: shopListActionTypes.clearShopList
  }
}
