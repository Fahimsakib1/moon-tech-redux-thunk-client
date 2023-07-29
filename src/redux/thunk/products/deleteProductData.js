import { removeProduct } from "../../actions/productAction";



export const deleteProductData = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/product/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        });
        const data = await res.json();

        if (data.deletedCount > 0) {
            
            //j kono ekta dispatch likhlei hobe
            
            // dispatch(addProduct(product));
            dispatch(removeProduct(id))
        }
    }
}

export default deleteProductData;