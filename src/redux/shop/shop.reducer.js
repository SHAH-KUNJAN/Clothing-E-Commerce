import shopData from "./shop.data";

const INTIAL_STATE = {
  collections: shopData,
};

const shopReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
