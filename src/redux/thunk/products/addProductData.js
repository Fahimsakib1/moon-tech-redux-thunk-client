import { addProduct } from "../../actions/productAction";



export const addProductData = (product) => {
    return async (dispatch, getState) => {
        const res = await fetch('http://localhost:5000/product', {
            method: 'POST',
            body: JSON.stringify(product),
            headers: { 'Content-Type': 'application/json' }
        });
        const data = await res.json();

        if (data.acknowledged) {
            
            //j kono ekta dispatch likhlei hobe

            // dispatch(addProduct(product));
            
            dispatch(addProduct({
                _id: data.insertedId,
                ...product,
            }))
        }
    }
}

export default addProductData;