import { CLEAR_ALL_FILTERS, TOGGLE_BRAND, TOGGLE_STOCK } from "../actionTypes/actionTypes"


export const toggleBrand = (brandName) => {
    return {
        type: TOGGLE_BRAND,
        payload: brandName
    }
}


export const toggleStock = () => {
    return {
        type: TOGGLE_STOCK
    }
}


export const clearFilters = (data) => {
    return {
        type: CLEAR_ALL_FILTERS,
        payload: data
    }
}