import { searchProduct } from "../../actions/productAction";



export const fetchProductsByKeywordSearch = (search) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/searchProducts/${search}`);
        const data = await res.json();
        if(data){
            console.log("Fetched Data", data);
            dispatch(searchProduct(data));
        }
    }
}

export default fetchProductsByKeywordSearch;