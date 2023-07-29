import { updateProduct } from "../../actions/productAction";



export const updateProductDataByID = (id, product) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/updateProduct/${id}`, {
            method: 'PUT',
            body: JSON.stringify(product),
            headers: { 'Content-Type': 'application/json'}
        });
        const data = await res.json();
        if(data){
            dispatch(updateProduct(product));
        }
    }
}

export default updateProductDataByID;