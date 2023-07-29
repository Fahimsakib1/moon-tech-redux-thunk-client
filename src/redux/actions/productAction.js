import {
  ADD_PRODUCT,
  ADD_TO_CART,
  EDIT_PRODUCT,
  LOAD_PRODUCT,
  PRODUCT_LOADED,
  REMOVE_FROM_CART,
  REMOVE_PRODUCT,
  UPDATE_PRODUCT,
} from "../actionTypes/actionTypes";


export const loadProduct = (data) => {
  return {
    type: LOAD_PRODUCT,
    payload: data
  }
}

//this function is for getting the product by ID which is going to be updated
export const editProduct = (id) => {
  return {
    type: EDIT_PRODUCT,
    payload: id
  }
}

export const updateProduct = (product) => {
  return {
    type: UPDATE_PRODUCT,
    payload: product
  }
}

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

export const removeProduct = (id) => {
  return {
    type: REMOVE_PRODUCT,
    payload: id,
  };
};

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (product) => {
  return {
    type: REMOVE_FROM_CART,
    payload: product,
  };
};

export const loaded = (products) => {
  return {
    type: PRODUCT_LOADED,
    payload: products,
  };
};
