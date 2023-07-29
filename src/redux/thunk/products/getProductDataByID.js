import { editProduct } from "../../actions/productAction";



export const getProductDataByID = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/allProducts/product/${id}`);
        const data = await res.json();
        if(data){
            dispatch(editProduct(id));
        }
    }
}

export default getProductDataByID;