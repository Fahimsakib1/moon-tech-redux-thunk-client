import { ADD_TO_CART } from "../actionTypes/actionTypes";


//this function is called currying function in javascript
const cartCounter = (store) => (next) => (action) => {
    
    const state = store.getState();
    const cart = state.product.cart; //cart ekta array

    console.log("Current State: ", store.getState());
    console.log("Action: ", action);

    if(action.type === ADD_TO_CART){
        
        const newAction = {
            ...action,
            payload: {...action.payload, cartPosition: cart.length}
        }
        
        return next(newAction);
    }
    return next(action);
}

export default cartCounter;