export const fridgeListActionTypes = {
  addFridgeItem: 'ADD_FRIDGE_ITEM',
  deleteFridgeItem: "DELETE_FRIDGE_ITEM",
  initializeFridgeList: 'INITIALIZE_FRIDGE_LIST',
  clearFridgeList: 'CLEAR_FRIDGE_LIST',
};

export const addFridgeItem = (fridgeItem) => {
  return {
    type: fridgeListActionTypes.addFridgeItem,
    fridgeItem,
  };
};

export const deleteFridgeItem = (index) => {
  return {
    type: fridgeListActionTypes.deleteFridgeItem,
    index,
  }
}

export const initializeFridgeList = (fridgeList) => {
  return {
    type: fridgeListActionTypes.initializeFridgeList,
    fridgeList,
  };
};

export const clearFridgeList = (fridgeList) => {
  return {
    type: fridgeListActionTypes.clearFridgeList
  }
}
