import { clearFilters } from "../../actions/filterAction";

const fetchAllProductsForClearFilter = () => {
    return async (dispatch, getState) => {
        const res = await fetch('http://localhost:5000/products');
        const data = await res.json();
        if(data.length){
            dispatch(clearFilters(data))
        }
    }
}

export default fetchAllProductsForClearFilter;