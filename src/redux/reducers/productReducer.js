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

const initialState = {
  cart: [],
  products: [],
};



const productReducer = (state = initialState, action) => {
  
  
  const selectedProduct = state.cart.find(
    (product) => product._id === action.payload._id
  );



  switch (action.type) {

    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };

      //this function is for getting the product by ID which is going to be updated
      case EDIT_PRODUCT:
        return {
          ...state,
          products: state.products.find(
            (product) => product._id === action.payload
          ),
        };

        case UPDATE_PRODUCT:
        return {
          ...state,
          // J kono ekta likhlei hobe
          //products: action.payload, 
          products: [...state.products, action.payload]
        };

    case REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product._id !== action.payload
        ),
      };

    case ADD_TO_CART:
      if (selectedProduct) {
        const newCart = state.cart.filter(
          (product) => product._id !== selectedProduct._id
        );

        selectedProduct.quantity = selectedProduct.quantity + 1;

        return {
          ...state,
          cart: [...newCart, selectedProduct],
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
      
    case REMOVE_FROM_CART:
      if (selectedProduct.quantity > 1) {
        const newCart = state.cart.filter(
          (product) => product._id !== selectedProduct._id
        );
        selectedProduct.quantity = selectedProduct.quantity - 1;

        return {
          ...state,
          cart: [...newCart, selectedProduct],
        };
      }
      return {
        ...state,
        cart: state.cart.filter(
          (product) => product._id !== action.payload._id
        ),
      };

    case PRODUCT_LOADED:
      return {
        ...state,
        products: action.payload,
      };

      case LOAD_PRODUCT :
        return {
          ...state,
          products: action.payload
        }



    default:
      return state;
  }
};

export default productReducer;
